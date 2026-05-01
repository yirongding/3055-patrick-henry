const storageKey = "property-report-template-active-tab";
const reportData = window.REPORT_DATA || { meta: {}, sections: [] };
const embeddedRentCompData = Array.isArray(window.RENT_COMP_DATA) ? window.RENT_COMP_DATA : null;
const rentCompSectionId = "apartment-rent-comps";
const rentCompDataPath = "./data/rent-comps.json";
const rentCompWebsiteMap = {
  "The Clara": "https://www.apartments.com/the-clara-santa-clara-ca/6b3v70v/",
  "AVE Santa Clara": "https://www.apartments.com/ave-santa-clara-santa-clara-ca/z3k89nx/",
  "The Lafayette": "https://www.apartments.com/the-lafayette-santa-clara-ca/c3enymd/",
  Passero: "https://www.apartments.com/passero-santa-clara-ca/vbeyz4d/",
  "Mainline North Apartments": "https://www.apartments.com/mainline-north-apartments-santa-clara-ca-santa-clara-ca/gr4pthz/"
};

function formatCurrency(value, options = {}) {
  const { maximumFractionDigits = 0, compact = false } = options;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: compact ? "compact" : "standard",
    maximumFractionDigits
  }).format(value);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatNumber(value, options = {}) {
  const { maximumFractionDigits = 0, minimumFractionDigits = 0 } = options;
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits,
    minimumFractionDigits
  }).format(value);
}

function formatSquareFeet(value) {
  return `${formatNumber(value)} SF`;
}

function formatSquareFeetRange(min, max) {
  if (min == null && max == null) return "Not published";
  if (min == null) return formatSquareFeet(max);
  if (max == null || min === max) return formatSquareFeet(min);
  return `${formatNumber(min)}-${formatNumber(max)} SF`;
}

function formatCurrencyRange(min, max) {
  if (min == null && max == null) return "Call for rent";
  if (min == null) return formatCurrency(max);
  if (max == null || min === max) return formatCurrency(min);
  return `${formatCurrency(min)}-${formatCurrency(max)}`;
}

function formatPricePerSf(value) {
  return `$${formatNumber(value, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}/SF`;
}

function formatPricePerSfRange(range) {
  if (!range) return "Not published";
  if (Math.abs(range.min - range.max) < 0.005) return formatPricePerSf(range.min);
  return `${formatPricePerSf(range.min)}-${formatPricePerSf(range.max)}`;
}

function normalizeLayout(layout) {
  const label = String(layout || "").trim();
  const lower = label.toLowerCase();
  if (lower.includes("studio")) return "Studio";
  const bedroomsMatch = lower.match(/(\d+)\s*bed/);
  if (bedroomsMatch) {
    return `${bedroomsMatch[1]} Bedroom`;
  }
  return label;
}

function getLayoutSortValue(layout) {
  const lower = String(layout || "").toLowerCase();
  if (lower.includes("studio")) return 0;
  const bedroomsMatch = lower.match(/(\d+)\s*bed/);
  if (bedroomsMatch) return Number(bedroomsMatch[1]);
  return 99;
}

function compareLayouts(a, b) {
  const valueA = getLayoutSortValue(a);
  const valueB = getLayoutSortValue(b);
  if (valueA !== valueB) return valueA - valueB;
  return a.localeCompare(b);
}

function computePricePerSfRange(unitType) {
  if (
    unitType?.rent_min == null ||
    unitType?.rent_max == null ||
    unitType?.sq_ft_min == null ||
    unitType?.sq_ft_max == null
  ) {
    return null;
  }

  const price1 = Number(unitType.rent_max) / Number(unitType.sq_ft_max);
  const price2 = Number(unitType.rent_min) / Number(unitType.sq_ft_min);

  return {
    min: Math.min(price1, price2),
    max: Math.max(price1, price2)
  };
}

function sumUnitsAvailable(property) {
  return (property.unit_types || []).reduce((total, unitType) => total + (Number(unitType.units_available) || 0), 0);
}

function hasAvailableUnits(property) {
  return sumUnitsAvailable(property) > 0;
}

function getRentCompSection() {
  return reportData.sections.find((section) => section.id === rentCompSectionId);
}

function buildRentCompSources(properties) {
  return properties
    .filter((property) => rentCompWebsiteMap[property.property_name])
    .map((property) => ({
      label: `${property.property_name} Apartments.com page`,
      url: rentCompWebsiteMap[property.property_name]
    }));
}

function renderRentCompSummary(properties) {
  const summaryMap = new Map();

  properties.forEach((property) => {
    (property.unit_types || []).forEach((unitType) => {
      const layout = normalizeLayout(unitType.layout);

      if (!summaryMap.has(layout)) {
        summaryMap.set(layout, {
          layout,
          buildingCount: 0,
          availableUnits: 0,
          pricedBuildingCount: 0,
          sfMin: null,
          sfMax: null,
          rentMin: null,
          rentMax: null,
          pricePerSfMin: null,
          pricePerSfMax: null
        });
      }

      const summary = summaryMap.get(layout);
      summary.buildingCount += 1;
      summary.availableUnits += Number(unitType.units_available) || 0;

      const hasPublishedPricing =
        unitType.sq_ft_min != null &&
        unitType.sq_ft_max != null &&
        unitType.rent_min != null &&
        unitType.rent_max != null;

      if (!hasPublishedPricing) return;

      summary.pricedBuildingCount += 1;
      summary.sfMin = summary.sfMin == null ? unitType.sq_ft_min : Math.min(summary.sfMin, unitType.sq_ft_min);
      summary.sfMax = summary.sfMax == null ? unitType.sq_ft_max : Math.max(summary.sfMax, unitType.sq_ft_max);
      summary.rentMin = summary.rentMin == null ? unitType.rent_min : Math.min(summary.rentMin, unitType.rent_min);
      summary.rentMax = summary.rentMax == null ? unitType.rent_max : Math.max(summary.rentMax, unitType.rent_max);

      const priceRange = computePricePerSfRange(unitType);
      if (!priceRange) return;

      summary.pricePerSfMin = summary.pricePerSfMin == null ? priceRange.min : Math.min(summary.pricePerSfMin, priceRange.min);
      summary.pricePerSfMax = summary.pricePerSfMax == null ? priceRange.max : Math.max(summary.pricePerSfMax, priceRange.max);
    });
  });

  const rows = Array.from(summaryMap.values())
    .sort((a, b) => compareLayouts(a.layout, b.layout))
    .map(
      (summary) => `
        <tr>
          <td>${escapeHtml(summary.layout)}</td>
          <td>${escapeHtml(String(summary.availableUnits))}</td>
          <td>${escapeHtml(formatSquareFeetRange(summary.sfMin, summary.sfMax))}</td>
          <td>${escapeHtml(formatCurrencyRange(summary.rentMin, summary.rentMax))}</td>
          <td>${escapeHtml(formatPricePerSfRange(summary.pricePerSfMin == null ? null : { min: summary.pricePerSfMin, max: summary.pricePerSfMax }))}</td>
        </tr>
      `
    )
    .join("");

  return `
    <div class="project-subsection comp-group">
      <div class="project-section-header">
        <h3 class="project-subsection-title">Unit-type summary</h3>
      </div>
      <p class="project-subsection-copy">Summary ranges below roll up the four newly constructed buildings with current availability. Price per square foot uses the requested range method: <em>max rent / max SF</em> and <em>min rent / min SF</em>, then takes the min and max of those two outputs.</p>
      <div class="project-compare-table rent-summary-table">
        <table>
          <thead>
            <tr>
              <th>Unit type</th>
              <th>Available units</th>
              <th>SF range</th>
              <th>Rent range</th>
              <th>Price / SF range</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>
  `;
}

function renderRentCompBuilding(property) {
  const totalAvailable = sumUnitsAvailable(property);
  const amenityPreview = (property.amenities || []).slice(0, 4).join(" • ");
  const websiteUrl = rentCompWebsiteMap[property.property_name];
  const unitRows = (property.unit_types || [])
    .slice()
    .sort((a, b) => compareLayouts(normalizeLayout(a.layout), normalizeLayout(b.layout)))
    .map((unitType) => {
      const unitLabel = normalizeLayout(unitType.layout);
      const priceRange = computePricePerSfRange(unitType);
      const notes = [
        unitType.availability_date,
        unitType.pricing_note,
        unitType.notes
      ].filter(Boolean);

      return `
        <tr>
          <td>${escapeHtml(unitLabel)}</td>
          <td>${escapeHtml(String(Number(unitType.units_available) || 0))}</td>
          <td>${escapeHtml(formatSquareFeetRange(unitType.sq_ft_min, unitType.sq_ft_max))}</td>
          <td>${escapeHtml(formatCurrencyRange(unitType.rent_min, unitType.rent_max))}</td>
          <td>${escapeHtml(formatPricePerSfRange(priceRange))}</td>
          <td>${escapeHtml(notes.join(" • ") || "Current availability not published")}</td>
        </tr>
      `;
    })
    .join("");

  const detailItems = (property.unit_types || [])
    .map((unitType) => {
      const unitLabel = normalizeLayout(unitType.layout);
      const floorPlanCount = (unitType.plan_breakdown || []).length;
      const topPlans = (unitType.plan_breakdown || [])
        .slice()
        .sort((a, b) => (Number(b.available) || 0) - (Number(a.available) || 0))
        .slice(0, 3)
        .map((plan) => `${plan.plan} (${Number(plan.available) || 0})`);

      const messages = [];
      if (floorPlanCount) {
        messages.push(`${floorPlanCount} floor plans tracked`);
      }
      if (topPlans.length) {
        messages.push(`largest current buckets: ${topPlans.join(", ")}`);
      }
      if (unitType.not_available_plans?.length) {
        messages.push(`currently unavailable plans noted: ${unitType.not_available_plans.join(", ")}`);
      }
      if (unitType.plans_available?.length && !topPlans.length) {
        messages.push(`plans currently shown: ${unitType.plans_available.join(", ")}`);
      }
      if (unitType.pricing_note) {
        messages.push(unitType.pricing_note);
      }
      if (unitType.notes) {
        messages.push(unitType.notes);
      }

      if (!messages.length) return "";

      return `
        <li>
          <strong>${escapeHtml(unitLabel)}:</strong>
          ${escapeHtml(messages.join("; "))}
        </li>
      `;
    })
    .filter(Boolean)
    .join("");

  return `
    <div class="project-subsection comp-group rent-comp-building">
      <div class="rent-building-header">
        <div>
          <div class="rent-building-kicker">New-construction apartment comparable</div>
          <h3 class="project-subsection-title">${
            websiteUrl
              ? `<a href="${escapeHtml(websiteUrl)}" target="_blank" rel="noopener">${escapeHtml(property.property_name)}</a>`
              : escapeHtml(property.property_name)
          }</h3>
          <p class="project-subsection-copy">${escapeHtml(`${property.address}, ${property.city_state_zip}`)}</p>
        </div>
        <div class="rent-building-badges">
          <span class="rent-badge">Built ${escapeHtml(String(property.year_built || "n/a"))}</span>
          <span class="rent-badge">${escapeHtml(String(property.total_units || "n/a"))} total units</span>
          <span class="rent-badge">${escapeHtml(String(totalAvailable))} currently available</span>
        </div>
      </div>

      <div class="rent-building-meta">
        <div class="rent-mini-stat">
          <span>Parking</span>
          <strong>${escapeHtml(
            property.parking?.cost_per_month == null
              ? property.parking?.type || "Not published"
              : `${property.parking.type || "Parking"} • ${property.parking.cost_per_month === 0 ? "Included" : `${formatCurrency(property.parking.cost_per_month)}/mo`}`
          )}</strong>
        </div>
        <div class="rent-mini-stat">
          <span>Pet policy</span>
          <strong>${escapeHtml(property.pet_policy?.allowed ? "Pets allowed" : "Not published")}</strong>
        </div>
        <div class="rent-mini-stat">
          <span>Lease terms</span>
          <strong>${escapeHtml(property.lease_terms || "Not published")}</strong>
        </div>
        <div class="rent-mini-stat">
          <span>Amenities</span>
          <strong>${escapeHtml(amenityPreview || "Not published")}</strong>
        </div>
      </div>

      <div class="project-compare-table rent-building-table">
        <table>
          <thead>
            <tr>
              <th>Unit type</th>
              <th>Available units</th>
              <th>SF range</th>
              <th>Rent range</th>
              <th>Price / SF range</th>
              <th>Availability / notes</th>
            </tr>
          </thead>
          <tbody>${unitRows}</tbody>
        </table>
      </div>

      ${
        detailItems
          ? `
            <details class="rent-detail-toggle">
              <summary>Floor-plan and availability notes</summary>
              <ul class="rent-detail-list">${detailItems}</ul>
            </details>
          `
          : ""
      }

      <p class="comp-note">${escapeHtml(property.notes || "No additional building notes provided.")} Verified ${escapeHtml(String(property.data_verified || ""))}.</p>
    </div>
  `;
}

function renderRentComparableSection(properties) {
  const totalAvailable = properties.reduce((total, property) => total + sumUnitsAvailable(property), 0);
  const totalUnits = properties.reduce((total, property) => total + (Number(property.total_units) || 0), 0);
  const years = Array.from(new Set(properties.map((property) => property.year_built).filter(Boolean))).sort();
  const summaryCards = [
    { key: "Comparable set", value: `${properties.length} buildings`, supporting: "All five are newly constructed Santa Clara apartment assets." },
    { key: "Available units", value: `${formatNumber(totalAvailable)} / ${formatNumber(totalUnits)}`, supporting: "Current available units out of the total units across the five comparable buildings." },
    { key: "Delivery window", value: years.length ? `${years[0]}-${years[years.length - 1]}` : "Current", supporting: "New supply captured in the comp set." },
    { key: "Layouts covered", value: "Studio-3BR", supporting: "Summary table rolls pricing by canonical unit type." }
  ];

  return `
    <div class="project-stack rent-comps-stack">
      ${renderCards(summaryCards)}
      ${renderRentCompSummary(properties)}
      <div class="project-section-header rent-section-header">
        <h3 class="project-subsection-title">Buildings grouped by comparable</h3>
      </div>
      ${properties.map(renderRentCompBuilding).join("")}
    </div>
  `;
}

async function hydrateRentComparableSection() {
  const section = getRentCompSection();
  if (!section) return;

  try {
    const allProperties = embeddedRentCompData || await (async () => {
      const response = await fetch(rentCompDataPath);
      if (!response.ok) {
        throw new Error(`Failed to load ${rentCompDataPath}: ${response.status}`);
      }
      return response.json();
    })();
    const properties = allProperties.filter(hasAvailableUnits);

    section.paragraphs = [
      "This rent comparable page focuses on newly constructed Santa Clara apartment buildings with current availability, sourced from Apartments.com listings. Data as of April 13, 2026 — available units may change.",
      "Available units are grouped by building, with a unit-type summary table at the top to show the current asking-rent and price-per-square-foot range by studio, one-bedroom, two-bedroom, and three-bedroom layouts."
    ];
    section.bullets = [
      "Price per square foot is calculated from each unit-type range using max rent / max SF and min rent / min SF, then reported as the min and max of those two values.",
      "These are Apartments.com asking-rent snapshots and advertised square-footage ranges, not executed lease comps or concession-adjusted effective rents.",
      "Buildings with no units currently available are excluded from the comp set and from the summary statistics."
    ];
    section.customHtml = renderRentComparableSection(properties);
    section.sources = buildRentCompSources(properties);
  } catch (error) {
    section.customHtml = `
      <div class="empty-state">
        Rent comparable data could not be loaded from ${escapeHtml(rentCompDataPath)}. ${escapeHtml(error.message || "Unknown error.")}
      </div>
    `;
  }
}

function renderMeta() {
  document.title = reportData.meta.title || "Property Report Template";
  document.getElementById("report-type").textContent = reportData.meta.reportType || "Interactive property report template";
  document.getElementById("hero-title").textContent = reportData.meta.title || "Property Address Placeholder";
  document.getElementById("hero-summary").textContent = reportData.meta.summary || "";
  document.getElementById("disclaimer").innerHTML = `<strong>Data & disclaimer:</strong> ${escapeHtml(reportData.meta.disclaimer || "")}`;

  const heroMeta = document.getElementById("hero-meta");
  heroMeta.innerHTML = (reportData.meta.pills || [])
    .map((pill) => `<div class="pill">${escapeHtml(pill)}</div>`)
    .join("");

  const contact = reportData.meta.contact || {};
  const contactCard = document.getElementById("contact-card");
  contactCard.innerHTML = `
    <strong>${escapeHtml(contact.name || "Broker / Team Name")}</strong>
    <div>${escapeHtml(contact.title || "Title / License")}</div>
    <div>${escapeHtml(contact.company || "Company")}</div>
    <div>${escapeHtml(contact.email || "email@example.com")}</div>
    <div>${escapeHtml(contact.phone || "(000) 000-0000")}</div>
    <div><a href="${escapeHtml(contact.websiteUrl || "#")}" target="_blank" rel="noopener">${escapeHtml(contact.website || "website.com")}</a></div>
    <div><a href="${escapeHtml(contact.linkUrl || "#")}" target="_blank" rel="noopener">${escapeHtml(contact.linkLabel || "Add contact link")}</a></div>
  `;
}

function renderCards(cards) {
  if (!cards || !cards.length) return "";
  return `
    <div class="cards">
      ${cards
        .map(
          (card) => `
            <div class="card">
              <div class="k">${escapeHtml(card.key || "")}</div>
              <div class="v">${escapeHtml(card.value || "")}</div>
              <div class="s">${escapeHtml(card.supporting || "")}</div>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderFigures(figures) {
  if (!figures || !figures.length) return "";
  return figures
    .map(
      (figure) => `
        <figure class="figure">
          <img src="${escapeHtml(figure.src || "")}" alt="${escapeHtml(figure.alt || "")}" />
          ${figure.caption ? `<figcaption class="figcap">${escapeHtml(figure.caption)}</figcaption>` : ""}
          ${figure.source ? `<div class="source">${escapeHtml(figure.source)}</div>` : ""}
        </figure>
      `
    )
    .join("");
}

function renderParagraphs(paragraphs) {
  if (!paragraphs || !paragraphs.length) return "";
  return paragraphs
    .map((paragraph) => {
      if (typeof paragraph === "object" && paragraph.html) {
        const className = paragraph.className ? ` class="${escapeHtml(paragraph.className)}"` : "";
        return `<p${className}>${paragraph.html}</p>`;
      }
      return `<p>${escapeHtml(paragraph)}</p>`;
    })
    .join("");
}

function renderBullets(bullets) {
  if (!bullets || !bullets.length) return "";
  return `<ul>${bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}</ul>`;
}

function renderGrid(items) {
  if (!items || !items.length) return "";
  return `
    <div class="grid-two">
      ${items
        .map(
          (item) => `
            <div class="mini">
              <h4>${escapeHtml(item.title || "")}</h4>
              ${item.body ? `<p>${escapeHtml(item.body)}</p>` : ""}
              ${
                item.bullets && item.bullets.length
                  ? `<ul>${item.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}</ul>`
                  : ""
              }
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderTable(table) {
  if (!table || !table.columns || !table.rows) return "";
  return `
    <table>
      <thead>
        <tr>${table.columns.map((column) => `<th>${escapeHtml(column)}</th>`).join("")}</tr>
      </thead>
      <tbody>
        ${table.rows
          .map(
            (row) => `
              <tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>
            `
          )
          .join("")}
      </tbody>
    </table>
  `;
}

function renderNotes(notes) {
  if (!notes || !notes.length) return "";
  return notes
    .map((note) => `<div class="placeholder-note">${escapeHtml(note)}</div>`)
    .join("");
}

function renderSources(sources) {
  if (!sources || !sources.length) return "";
  return `
    <div class="fine-print">
      <strong>Sources</strong>
      <ul>
        ${sources
          .map(
            (source) => `
              <li><a href="${escapeHtml(source.url)}" target="_blank" rel="noopener">${escapeHtml(source.label)}</a></li>
            `
          )
          .join("")}
      </ul>
    </div>
  `;
}

function renderCustomHtml(section) {
  if (!section || !section.customHtml) return "";
  return `<div class="custom-section">${section.customHtml}</div>`;
}

function renderAssessmentSection(section) {
  if (!section || !section.assessmentCharts || !section.assessmentCharts.length) return "";
  const colorMap = Object.fromEntries(
    (section.assessmentCharts[0]?.series || []).map((series) => [series.label, series.color])
  );

  function renderChart(chart) {
    return `
      <div class="tax-chart-card">
        <div class="tax-chart-header">
          <div>
            <h3 class="project-subsection-title">${escapeHtml(chart.title)}</h3>
            <p class="tax-chart-copy">${escapeHtml(chart.takeaway)}</p>
          </div>
          <div class="tax-chart-legend">
            ${chart.series
              .map(
                (series) => `
                  <span class="tax-legend-item">
                    <span class="tax-legend-dot" style="background:${escapeHtml(series.color)}"></span>
                    ${escapeHtml(series.label)}
                  </span>
                `
              )
              .join("")}
          </div>
        </div>
        <div class="tax-chart-frame">
          <div class="tax-chart-canvas-wrap">
            <canvas class="tax-chart-canvas" id="${escapeHtml(chart.chartId)}" aria-label="${escapeHtml(chart.title)} chart"></canvas>
          </div>
        </div>
      </div>
    `;
  }

  function renderAssessmentSnapshotTable(table) {
    if (!table || !table.columns || !table.rows) return "";

    return `
      <table>
        <thead>
          <tr>${table.columns.map((column) => `<th>${escapeHtml(column)}</th>`).join("")}</tr>
        </thead>
        <tbody>
          ${table.rows
            .map((row) => {
              const property = row[0];
              const color = colorMap[property] || "#6f6559";
              return `
                <tr>
                  <td>
                    <span class="tax-property-chip" style="--tax-chip-color:${escapeHtml(color)}">
                      <span class="tax-property-chip-dot"></span>
                      ${escapeHtml(property)}
                    </span>
                  </td>
                  ${row.slice(1).map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}
                </tr>
              `;
            })
            .join("")}
        </tbody>
      </table>
      ${
        table.footnote
          ? `<div class="tax-table-footnote">${escapeHtml(table.footnote)}</div>`
          : ""
      }
    `;
  }

  const snapshotTable = section.snapshotTable ? renderAssessmentSnapshotTable(section.snapshotTable) : "";

  return `
    <div class="tax-analysis">
      ${section.assessmentCharts.map(renderChart).join("")}
      ${
        snapshotTable
          ? `
            <div class="tax-chart-card">
              <h3 class="project-subsection-title">Selected property snapshot</h3>
              <p class="tax-chart-copy">Latest assessed values below are based on Santa Clara County Assessor public data. The final column shows the 2023 to 2025 net-assessed change using each record's county-reported bottom line.</p>
              ${snapshotTable}
            </div>
          `
          : ""
      }
    </div>
  `;
}

function initAssessmentCharts() {
  if (!window.Chart) return;

  const sectionsWithCharts = reportData.sections.filter((section) => section.assessmentCharts && section.assessmentCharts.length);

  sectionsWithCharts.forEach((section) => {
    section.assessmentCharts.forEach((chart) => {
      const canvas = document.getElementById(chart.chartId);
      if (!canvas || canvas.dataset.chartReady === "true") return;

      const datasets = chart.series.map((series) => ({
        label: series.label,
        data: series.values,
        borderColor: series.color,
        backgroundColor: series.color,
        borderWidth: 3.5,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointHitRadius: 10,
        pointBackgroundColor: "#ffffff",
        pointBorderColor: series.color,
        pointBorderWidth: 2.5,
        pointHoverBackgroundColor: "#ffffff",
        pointHoverBorderColor: series.color,
        pointHoverBorderWidth: 3,
        spanGaps: false,
        tension: 0.18
      }));

      // eslint-disable-next-line no-new
      new window.Chart(canvas, {
        type: "line",
        data: {
          labels: chart.years,
          datasets
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: {
            mode: "nearest",
            intersect: false
          },
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              backgroundColor: "rgba(17, 17, 17, 0.94)",
              titleColor: "#ffffff",
              bodyColor: "rgba(255, 255, 255, 0.9)",
              displayColors: true,
              padding: 12,
              cornerRadius: 12,
              callbacks: {
                title(items) {
                  return items[0]?.label || "";
                },
                label(context) {
                  return `${context.dataset.label}: ${formatCurrency(context.parsed.y)}`;
                },
                afterLabel(context) {
                  const values = context.dataset.data || [];
                  const currentValue = Number(values[context.dataIndex]);
                  const previousValue = context.dataIndex > 0 ? Number(values[context.dataIndex - 1]) : null;
                  if (!previousValue) return "Starting point in available public-data history.";
                  const change = ((currentValue - previousValue) / previousValue) * 100;
                  return `${change.toFixed(1)}% year-over-year change`;
                }
              }
            }
          },
          scales: {
            x: {
              grid: {
                display: false
              },
              ticks: {
                color: "#6f6559",
                font: {
                  size: 12
                },
                maxRotation: 45,
                minRotation: 45
              },
              border: {
                color: "#cabda6"
              }
            },
            y: {
              beginAtZero: true,
              ticks: {
                color: "#6f6559",
                font: {
                  size: 12
                },
                callback(value) {
                  return formatCurrency(Number(value), { compact: true, maximumFractionDigits: 1 });
                }
              },
              grid: {
                color: "#e8dfcf"
              },
              border: {
                display: false
              }
            }
          }
        }
      });

      canvas.dataset.chartReady = "true";
    });
  });
}

function renderSections() {
  const tablist = document.getElementById("tablist");
  const content = document.getElementById("content");

  tablist.innerHTML = reportData.sections
    .map(
      (section, index) => `
        <button class="tab-btn${index === 0 ? " active" : ""}" data-tab="${escapeHtml(section.id)}">
          ${escapeHtml(section.label)}
        </button>
      `
    )
    .join("");

  content.innerHTML = reportData.sections
    .map(
      (section, index) => {
        const cards = renderCards(section.cards);
        const figures = renderFigures(section.figures);
        const grid = renderGrid(section.grid);
        const bullets = renderBullets(section.bullets);
        const table = renderTable(section.table);
        const assessmentSection = renderAssessmentSection(section);
        const customHtml = renderCustomHtml(section);

        return `
          <section class="panel${index === 0 ? " active" : ""}" id="${escapeHtml(section.id)}">
            <h2 class="section-title">${escapeHtml(section.title)}</h2>
            ${
              section.lede
                ? `<div class="lede">${
                    typeof section.lede === "object" && section.lede.html
                      ? section.lede.html
                      : escapeHtml(section.lede)
                  }</div>`
                : ""
            }
            ${renderParagraphs(section.paragraphs)}
            ${cards}
            ${figures}
            ${section.tableFirst ? table : grid}
            ${section.tableFirst ? grid : table}
            ${assessmentSection}
            ${customHtml}
            ${bullets}
            ${renderNotes(section.notes)}
            ${renderSources(section.sources)}
          </section>
        `;
      }
    )
    .join("");
}

function bindTabs() {
  const buttons = document.querySelectorAll(".tab-btn");
  const panels = document.querySelectorAll(".panel");
  const mobileSidebar = document.getElementById("mobileSidebar");
  const mobileNavToggle = document.getElementById("mobileNavToggle");
  const mobileNavLabel = document.getElementById("mobileNavLabel");

  function activateTab(id) {
    buttons.forEach((button) => button.classList.toggle("active", button.dataset.tab === id));
    panels.forEach((panel) => panel.classList.toggle("active", panel.id === id));
    try {
      localStorage.setItem(storageKey, id);
    } catch (error) {
      void error;
    }
  }

  if (mobileNavToggle) {
    mobileNavToggle.addEventListener("click", () => {
      mobileSidebar.classList.toggle("open");
      mobileNavLabel.textContent = mobileSidebar.classList.contains("open") ? "Hide" : "Show";
    });
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      activateTab(button.dataset.tab);
      if (window.innerWidth <= 1100 && mobileSidebar) {
        mobileSidebar.classList.remove("open");
        mobileNavLabel.textContent = "Show";
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  try {
    const saved = localStorage.getItem(storageKey);
    if (saved && document.getElementById(saved)) {
      activateTab(saved);
    }
  } catch (error) {
    void error;
  }
}

async function initApp() {
  renderMeta();
  await hydrateRentComparableSection();
  renderSections();
  initAssessmentCharts();
  bindTabs();
}

initApp();
