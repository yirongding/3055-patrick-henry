const storageKey = "property-report-template-active-tab";
const reportData = window.REPORT_DATA || { meta: {}, sections: [] };

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
  return paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("");
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
              <p>${escapeHtml(item.body || "")}</p>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderCharts(charts) {
  if (!charts || !charts.length) return "";

  return charts
    .map((chart) => {
      const values = (chart.series || []).map((item) => Number(item.value) || 0);
      const max = Math.max(...values, 1);

      return `
        <div class="chart-block">
          ${chart.title ? `<div class="chart-title">${escapeHtml(chart.title)}</div>` : ""}
          ${chart.subtitle ? `<div class="chart-subtitle">${escapeHtml(chart.subtitle)}</div>` : ""}
          <div class="chart-bars">
            ${(chart.series || [])
              .map((item) => {
                const width = `${((Number(item.value) || 0) / max) * 100}%`;
                return `
                  <div class="chart-row">
                    <div class="chart-label">${escapeHtml(item.label || "")}</div>
                    <div class="chart-track">
                      <div class="chart-bar" style="width: ${width}"></div>
                    </div>
                    <div class="chart-value">${escapeHtml(item.display || item.value || "")}</div>
                  </div>
                  ${item.supporting ? `<div class="chart-support">${escapeHtml(item.supporting)}</div>` : ""}
                `;
              })
              .join("")}
          </div>
        </div>
      `;
    })
    .join("");
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
      (section, index) => `
        <section class="panel${index === 0 ? " active" : ""}" id="${escapeHtml(section.id)}">
          <h2 class="section-title">${escapeHtml(section.title)}</h2>
          ${section.lede ? `<div class="lede">${escapeHtml(section.lede)}</div>` : ""}
          ${renderParagraphs(section.paragraphs)}
          ${renderCards(section.cards)}
          ${renderFigures(section.figures)}
          ${renderGrid(section.grid)}
          ${renderCharts(section.charts)}
          ${renderBullets(section.bullets)}
          ${renderTable(section.table)}
          ${renderNotes(section.notes)}
          ${renderSources(section.sources)}
        </section>
      `
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
bindTabs();
