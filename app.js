const storageKey = "property-report-template-active-tab";
const reportData = window.REPORT_DATA || { meta: {}, sections: [] };

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
    .map((paragraph) =>
      typeof paragraph === "object" && paragraph.html
        ? `<p>${paragraph.html}</p>`
        : `<p>${escapeHtml(paragraph)}</p>`
    )
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

  const snapshotTable = section.snapshotTable ? renderTable(section.snapshotTable) : "";

  return `
    <div class="tax-analysis">
      ${section.assessmentCharts.map(renderChart).join("")}
      ${
        snapshotTable
          ? `
            <div class="tax-chart-card">
              <h3 class="project-subsection-title">Selected property snapshot</h3>
              <p class="tax-chart-copy">Latest assessed values below are taken from the county PDFs in the local tax folder. The final column shows the 2023 to 2025 net-assessed change using each record's county-reported bottom line.</p>
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
        borderWidth: 3,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: series.color,
        pointBorderColor: "#ffffff",
        pointBorderWidth: 2,
        tension: 0.28
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
                  if (!previousValue) return "Starting point in available local PDF history.";
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
                }
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

renderMeta();
renderSections();
initAssessmentCharts();
bindTabs();
