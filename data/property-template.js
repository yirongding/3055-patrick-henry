window.REPORT_DATA = {
  meta: {
    reportType: "Property reference report",
    title: "3055 Patrick Henry Drive, Santa Clara, CA",
    summary:
      "Reference report for 3055 Patrick Henry Drive with property data, planning context, neighboring projects, market references, and source links by section.",
    pills: [
      "Date: April 14, 2026",
      "Format: Interactive property report"
    ],
    disclaimer:
      "This report is for discussion purposes only and is not legal, zoning, valuation, tax, engineering, environmental, or investment advice. Facts shown here should be confirmed directly with the City of Santa Clara, Santa Clara County, title, seller materials, and current third-party market reports before any investment decision.",
    contact: {
      name: "Alina Siert",
      title: "Real Estate Broker • DRE 01893238",
      company: "Keller Williams Advisors",
      email: "Alina@SiertGroup.com",
      phone: "(408) 712-7692",
      linkLabel: "Connect with me on LinkedIn →",
      linkUrl: "https://www.linkedin.com/in/alinasiert"
    }
  },
  sections: [
    {
      id: "property-overview",
      label: "Property Overview",
      title: "Property overview",
      lede:
        "3055 Patrick Henry Drive is a 3.82-acre parcel improved with a two-story flex/light-industrial building and located within the Patrick Henry Drive Specific Plan area adopted on March 22, 2022.",
      cards: [
        { key: "Site area", value: "3.82 AC", supporting: "166,399 SF land area; APN 104-04-136." },
        { key: "Existing building", value: "70,520 SF", supporting: "CoStar Rentable Building Area." },
        { key: "Historical basis", value: "$19.0M", supporting: "Closed April 8, 2016." }
      ],
      figures: [
        {
          src: "./sources-supporting-docs/Property Images/PrimaryPhoto.jpg",
          alt: "Primary exterior photo of 3055 Patrick Henry Drive",
          caption: "Primary property photo.",
          source: "Property Images folder"
        }
      ],
      table: {
        columns: ["Item", "Current read"],
        rows: [
          ["Address", "3055 Patrick Henry Dr, Santa Clara, CA 95054"],
          ["APN", "104-04-136"],
          ["Current zoning", "ML, City/Santa Clara"],
          ["Existing use", "Flex / light manufacturing / technological industry"],
          ["Year built", "1981"],
          ["Stories", "2"],
          ["Building area", "CoStar Rentable Building Area: 70,520 SF"],
          ["Parking", "140 surface stalls"],
          ["Recorded owner", "3055 Patrick Henry Development, LLC"],
          ["True owner", "Z & L Properties"],
          ["Construction", "Tilt-up / reinforced concrete"],
          ["Clear height", "16 feet"],
          ["Power", "4,000a / 220-480v 3p 3w heavy"],
          ["Last sale", "$19,000,000 on April 8, 2016"],
          ["Flood / seismic", "Minimal flood hazard; liquefaction zone"]
        ]
      },
      sources: [
        { label: "CompRedux workbook", url: "./sources-supporting-docs/CompRedux-3055-PATRICK-HENRY-DR-SANTA-CLARA-CA-95054-2026-04-08.xlsx" },
        { label: "CoStar property summary PDF", url: "./sources-supporting-docs/Costar Reports/property-summary.pdf" },
        { label: "CoStar property sales PDF", url: "./sources-supporting-docs/Costar Reports/property-sales.pdf" }
      ]
    },
    {
      id: "location-overview",
      label: "Location Overview",
      title: "Location overview",
      paragraphs: [
        "The site is in North Santa Clara near Mission College, Levi's Stadium, major office and R&D campuses, San Jose International Airport, and Rivermark retail and services.",
        "Trade-area metrics in the available materials are shown for 1-mile and 3-mile rings around the site."
      ],
      figures: [
        {
          src: "./sources-supporting-docs/location.png",
          alt: "Location map for 3055 Patrick Henry Drive",
          caption: "Location context for 3055 Patrick Henry Drive. Source: 2023 Offering Memorandum by CBRE."
        }
      ],
      cards: [
        { key: "Mission College", value: "~0.6 mi", supporting: "2023 OM reference." },
        { key: "SJC Airport", value: "4.7 mi / 9 min", supporting: "Regional access reference." },
        { key: "Apple / Google / Meta", value: "<10 min drive", supporting: "2023 OM reference." },
        { key: "Old Ironsides VTA", value: "~0.5 mi", supporting: "Nearest mapped VTA station reference." }
      ],
      table: {
        columns: ["Metric", "1-mile", "3-mile"],
        rows: [
          ["Population", "9,635", "149,548"],
          ["Households", "3,237", "57,080"],
          ["Median age", "37.9", "36.7"],
          ["Median household income", "$163,266", "$184,925"],
          ["Daytime employees", "23,129", "139,198"],
          ["Population growth 2025-2030", "4.50%", "2.87%"],
          ["Household growth 2025-2030", "4.97%", "2.95%"]
        ]
      },
      grid: [
        {
          title: "Employers",
          bullets: [
            "Intel (1.2 mi)",
            "Applied Materials (1.4 mi)",
            "Apple Park (4.5 mi)",
            "Googleplex (5.9 mi)",
            "Meta HQ (10.9 mi)"
          ]
        },
        {
          title: "Transit",
          bullets: [
            "Old Ironsides VTA Station (0.5 mi)",
            "San Jose International Airport (4.7 mi / 9 min)"
          ]
        },
        {
          title: "Education",
          bullets: [
            "Mission College (0.6 mi)",
            "Santa Clara University (5.0 mi)"
          ]
        },
        {
          title: "Retail / district",
          bullets: [
            "Rivermark retail and services (nearby)",
            "Levi's Stadium / Tasman district (nearby)"
          ]
        }
      ],
      sources: [
        { label: "2023 OM PDF", url: "./sources-supporting-docs/old-om-3055patrickhenry.pdf" },
        { label: "CoStar property summary PDF", url: "./sources-supporting-docs/Costar Reports/property-summary.pdf" },
        { label: "Rivermark Village", url: "https://www.rivermarkvillage.com/" }
      ]
    },
    {
      id: "zoning-policy",
      label: "Zoning & Policy",
      title: "Zoning and policy",
      lede: {
        html: 'The <a href="https://www.santaclaraca.gov/our-city/departments-a-f/community-development/planning-division/specific-plans/patrick-henry-drive" target="_blank" rel="noopener">Patrick Henry Drive Specific Plan</a> is the core planning document for the site and frames the area as a transit-oriented transition from an underutilized industrial district to a mixed-use neighborhood.'
      },
      paragraphs: [
        "The City of Santa Clara states that the Specific Plan was adopted on March 22, 2022 to guide the transition of a 74-acre industrial neighborhood bounded by Mission College Boulevard, Great America Parkway, the Hetch-Hetchy right-of-way, and Calabazas Creek.",
        "The City's infrastructure fee page states that the plan contemplates two land-use scenarios, up to 12,000 residential units, approximately 310,000 square feet of neighborhood-oriented convenience retail, and up to 14 acres of open space."
      ],
      cards: [
        { key: "Plan adoption", value: "March 22, 2022", supporting: "Patrick Henry Drive Specific Plan adopted by City Council." },
        { key: "Plan area", value: "74 acres", supporting: "City-defined specific plan area." },
        { key: "Retail / open space", value: "310K SF / up to 14 acres", supporting: "City infrastructure fee page summary." },
        { key: "Plan scenarios", value: "Up to 12,000 units", supporting: "City infrastructure fee page summary." }
      ],
      figures: [
        {
          src: "./sources-supporting-docs/PATRICK.png",
          alt: "Patrick Henry Drive Specific Plan urban design framework",
          caption: "Urban design framework from the adopted specific plan.",
          source: "Patrick Henry Drive Specific Plan"
        }
      ],
      table: {
        columns: ["Planning item", "Current read", "Notes"],
        rows: [
          ["Current zoning in CoStar", "ML, City/Santa Clara", "CoStar property summary reference."],
          ["Zone designation", "UC", "Current parcel data reference."],
          ["Specific plan", "Patrick Henry Drive Specific Plan", "Adopted city planning document."],
          ["Plan area size", "Approx. 74 acres", "City infrastructure fee page summary."],
          ["Urban Center Residential density", "120-250 du/ac", "Specific Plan land-use designation reference."],
          ["Urban Village density", "100-149 du/ac", "Specific Plan land-use designation reference."],
          ["Very High Density Residential", "51-99 du/ac", "Specific Plan land-use designation reference."],
          ["Height envelope", "5 stories / 60 feet minimum to 25 stories / 300 feet maximum", "Plan envelope; parcel-specific execution still requires confirmation."],
          ["Setbacks", "0 feet minimum / 15 feet maximum", "Plan development standard reference."],
          ["Max FAR", "8.0", "Plan development standard reference."],
          ["Parking", "Subject to Chapter 18.38", "Parking requirements still need parcel-specific code review."],
          ["Affordable housing", "15% ordinance baseline", "Ordinance baseline noted in source materials."],
          ["Entitlement timing", "TBD", "No verified parcel-specific schedule in current file set." ]
        ]
      },
      notes: [
        "Gross-site density math at 3.82 acres is 458 units at 120 du/ac, 573 units at 150 du/ac, 764 units at 200 du/ac, and 955 units at 250 du/ac."
      ],
      sources: [
        { label: "CompRedux workbook", url: "./sources-supporting-docs/CompRedux-3055-PATRICK-HENRY-DR-SANTA-CLARA-CA-95054-2026-04-08.xlsx" },
        { label: "Patrick Henry Drive Specific Plan", url: "https://www.santaclaraca.gov/our-city/departments-a-f/community-development/planning-division/specific-plans/patrick-henry-drive" },
        { label: "Patrick Henry infrastructure fee page", url: "https://www.santaclaraca.gov/our-city/departments-g-z/public-works/engineering/land-property-development/patrick-henry-drive-specific-plan-infrastructure-impact-fee" }
      ]
    },
    {
      id: "risks-due-diligence",
      label: "Risks & Due Diligence",
      title: "Risks and due diligence",
      paragraphs: [
        "Current file materials point to several items that affect basis, carrying costs, execution, and downside protection. This section is limited to what the present source set shows."
      ],
      table: {
        columns: ["Risk / item", "What is known now", "Source"],
        rows: [
          ["Property-tax carry", "The 2025-2026 secured tax bill shows $390,442.80 total annual tax, with $409,984.94 current amount due after delinquency add-ons; the first installment already includes a 10% penalty plus $20 cost.", "Santa Clara County Department of Tax and Collections secured tax bill (APN 104-04-136)."],
          ["Assessment step-up since last sale", "The county bill shows a 2025-2026 net assessed value of $32,769,483 versus the recorded April 8, 2016 sale at $19,000,000. CompRedux's ATTOM-sourced history also shows assessed value rising from $20,162,951 in 2019-2020 to $29,963,520 in 2020-2021, with improvement value rising from $6,208,066 to $14,877,720 in the same period.", "Santa Clara County tax bill; ATTOM Property Data API fields cited in CompRedux-04-12 source citations."],
          ["Occupancy and income visibility", "CoStar reports 0.0% subject vacancy, but the same summary also shows a 72,000 SF flex availability entry at $21.00 NNN asking rent and subject asking rent of $18.77/SF.", "CoStar property summary PDF, page 1."],
          ["Core property-data conflicts", "Current source materials do not align on several base facts: CoStar shows 70,520 SF, 140 surface spaces, and zoning noted as ML, while the April 12 CompRedux report shows 68,075 SF building area, UC zoning, and no required-parking figure populated.", "CoStar property summary PDF; Santa Clara County GIS zoning and ATTOM Property Data API fields cited in CompRedux-04-12."],
          ["Planning and infrastructure load", "The City states the Patrick Henry Drive Specific Plan covers about 74 acres and contemplates up to 12,000 housing units, about 310,000 SF of neighborhood retail, and up to 14 acres of open space. The City's infrastructure fee page states the area-wide fee was set at $9,626 per residential unit for FY 2021-22 and is adjusted annually for inflation.", "City of Santa Clara Patrick Henry Drive Specific Plan Infrastructure Impact Fee page."],
          ["Affordable housing obligation", "The City states residential projects with fewer than 10 units pay an affordable-housing impact fee, while projects with 10 or more units must construct affordable housing onsite. The current ordinance page states a 15% onsite requirement for both rental and for-sale projects meeting that threshold.", "City of Santa Clara Affordable Housing Ordinance page."],
          ["Ground-condition and environmental context", "The April 12 CompRedux report flags the site in a liquefaction zone and outside the special flood hazard area (Flood Zone X / panel 06085C0063H). The same report cites 781 EPA-regulated facilities within 1 mile, including 232 hazardous-waste facilities and 24 TRI sites.", "California Geological Survey seismic hazard program; FEMA Map Service Center and EPA facilities sources cited in CompRedux-04-12."],
          ["Data completeness", "CompRedux states overall coverage at 46%, including 50% tax-assessment coverage and 10% zoning coverage, after timeouts from the Santa Clara Assessor and County tax-bill websites.", "CompRedux-04-12 source-citation and data-quality pages, referencing sccassessor.org and payments.sccgov.org timeout notices."]
        ]
      },
      sources: [
        { label: "CompRedux April 12 report", url: "./sources-supporting-docs/CompRedux-04-12.pdf" },
        { label: "Santa Clara County secured tax bill (APN 104-04-136)", url: "./sources-supporting-docs/TaxBill APN 104-04-136.pdf" },
        { label: "CoStar property summary PDF", url: "./sources-supporting-docs/Costar Reports/property-summary.pdf" },
        { label: "Patrick Henry Drive Specific Plan", url: "https://www.santaclaraca.gov/our-city/departments-a-f/community-development/planning-division/specific-plans/patrick-henry-drive" },
        { label: "Patrick Henry infrastructure impact fee page", url: "https://www.santaclaraca.gov/our-city/departments-g-z/public-works/engineering/land-property-development/patrick-henry-drive-specific-plan-infrastructure-impact-fee" },
        { label: "Affordable Housing Ordinance", url: "https://www.santaclaraca.gov/our-city/departments-a-f/community-development/housing-community-services-division/affordable-housing-ordinance" },
        { label: "California Seismic Hazard Zones", url: "https://www.conservation.ca.gov/cgs/sh/seismic-hazard-zones" }
      ]
    },
    {
      id: "current-use-market",
      label: "Current Use Market",
      title: "Current use market",
      paragraphs: [
        "Available CoStar materials include both a subject-level property analytics summary and a broader North Santa Clara industrial submarket report dated April 8, 2026.",
        "Together, they show a market with moderate vacancy, active leasing volume, limited current deliveries, and a flex segment carrying higher vacancy but stronger asking rents than the subject."
      ],
      table: {
        columns: ["Metric", "North Santa Clara market read", "Subject / flex read"],
        rows: [
          ["Market asking rent", "$26.62/SF for the 2-4 Star North Santa Clara submarket; $27.00/SF across the broader North Santa Clara industrial submarket", "$18.77/SF at the subject; $31.11/SF for North Santa Clara flex properties"],
          ["Vacancy rate", "9.0% for the 2-4 Star submarket; 8.8% for the broader industrial submarket", "0.0% shown for the subject; 15.6% for North Santa Clara flex"],
          ["Availability rate / available space", "9.7% with 1.1M SF total available in the 2-4 Star submarket; 9.3% in the broader industrial submarket", "No subject availability rate shown in analytics; CoStar summary also shows a 72,000 SF flex availability listing"],
          ["12-month net absorption", "198K SF in the 2-4 Star submarket; submarket report also cites about 200K SF over the past year", "0 SF at the subject"],
          ["12-month leased SF", "528K SF in the 2-4 Star submarket; 621K SF market-wide in the analytics set", "0 SF at the subject"],
          ["Leasing probability / market depth", "57.1% six-month leasing probability in the North Santa Clara 2-4 Star submarket", "Subject-level probability not shown"],
          ["Inventory", "11.3M SF in the 2-4 Star submarket; 11.47M SF in the broader industrial submarket", "70,520 SF subject RBA; North Santa Clara flex inventory totals 5.27M SF"],
          ["Under construction / deliveries", "300K SF under construction; 255K SF delivered over the past 12 months; 56K SF delivered over the past 8 quarters in the submarket report", "No subject construction"],
          ["Transactions / sales volume", "8 transactions and $136M sales volume over the past 12 months; submarket report shows $135.9M sales volume", "No subject sale in the trailing-12-month period"],
          ["Sale pricing / cap rate", "$392/SF to $401/SF market sale price and 6.5% market cap rate", "No current subject trade in the period"]
        ]
      },
      sources: [
        { label: "CoStar North Santa Clara Industrial Submarket report", url: "./sources-supporting-docs/Costar Reports/North Santa Clara-Industrial-Submarket-2026-04-08.pdf" },
        { label: "CoStar property analytics PDF", url: "./sources-supporting-docs/Costar Reports/property-analytics.pdf" },
        { label: "CoStar property summary PDF", url: "./sources-supporting-docs/Costar Reports/property-summary.pdf" }
      ]
    },
    {
      id: "multifamily-market",
      label: "Multifamily Market",
      title: "Multifamily market",
      paragraphs: [
        "Current published materials include a Santa Clara multifamily submarket report dated April 12, 2026 and a broader Bay Area multifamily market summary from CBRE.",
        "The figures below separate Santa Clara submarket fundamentals from Bay Area-wide supply-and-demand totals.",
        {
          className: "market-highlight",
          html: "<strong>Supply-demand callout:</strong> Recent absorption is outpacing recent deliveries in both geographies. Santa Clara absorbed 1,286 units over the past 12 months versus 675 deliveries, while the Bay Area absorbed 11,316 units versus 8,371 deliveries in the current market read. In practical terms, demand has been strong enough to digest new product faster than supply is arriving, which supports the corridor's multifamily redevelopment story even as Santa Clara still carries a larger proposed pipeline."
        }
      ],
      cards: [
        { key: "Santa Clara Absorption", value: "1,286 units", supporting: "Past 12 months, per CoStar Santa Clara submarket report." },
        { key: "Santa Clara Deliveries", value: "675 units", supporting: "Past 12 months, per CoStar Santa Clara submarket report." },
        { key: "Bay Area Absorption", value: "11,316 units", supporting: "CBRE Bay Area Multifamily Figures Q4 2025." },
        { key: "Bay Area Deliveries", value: "8,371 units", supporting: "CBRE Bay Area Multifamily Figures Q4 2025." }
      ],
      table: {
        columns: ["Metric", "Current read", "Source"],
        rows: [
          ["Santa Clara asking rent", "$3,644/month average asking rent; $3,607/month effective rent", "CoStar Santa Clara Multi-Family Submarket report."],
          ["Santa Clara rent growth", "4.3% asking-rent growth year over year; 5.9% effective-rent growth year over year", "CoStar Santa Clara Multi-Family Submarket report."],
          ["Santa Clara vacancy", "5.1% submarket vacancy; stabilized vacancy near 4%", "CoStar Santa Clara Multi-Family Submarket report."],
          ["Santa Clara inventory", "23,438 units in the submarket", "CoStar Santa Clara Multi-Family Submarket report."],
          ["Santa Clara pipeline", "0 units under construction; 7,095 proposed units in the next 8 quarters; more than 5,000 units noted as proposed in narrative text", "CoStar Santa Clara Multi-Family Submarket report."],
          ["Santa Clara quality tiers", "4 & 5 Star: $4,212 rent / 7.3% vacancy; 3 Star: $3,446 rent / 3.6% vacancy; 1 & 2 Star: $2,402 rent / 2.9% vacancy", "CoStar Santa Clara Multi-Family Submarket report."],
          ["Bay Area vacancy", "4.2%", "CBRE Bay Area Multifamily Figures."],
          ["Bay Area sales volume", "More than $8B", "CBRE Bay Area Multifamily Figures."]
        ]
      },
      sources: [
        { label: "CoStar Santa Clara Multi-Family Submarket report", url: "./sources-supporting-docs/Costar Reports/Santa Clara-MultiFamily-Submarket-2026-04-12.pdf" },
        { label: "CBRE Bay Area Multifamily Figures Q4 2025", url: "https://www.cbre.com/insights/figures/bay-area-multifamily-figures-q4-2025" },
        { label: "CBRE Bay Area Multifamily market page", url: "https://www.cbre.com/insights/figures/bay-area-multifamily-figures-q4-2025" }
      ]
    },
    {
      id: "investment-strategy",
      label: "Scenario References",
      title: "Scenario references",
      lede:
        "Current materials support three practical paths for 3055 Patrick Henry: hold the existing flex asset, reposition it as covered land while preserving interim income, or pursue full redevelopment tied to the Patrick Henry corridor transition.",
      paragraphs: [
        "The existing building still carries functional industrial/flex characteristics, but the broader planning context, nearby residential precedent, and site scale all point to a future use that could be materially more intensive than today's improvements.",
        "The section below keeps the scenarios distinct rather than blending them into a single underwriting story."
      ],
      cards: [
        { key: "Existing asset", value: "70,520 SF", supporting: "CoStar rentable building area; 3 Star flex/light manufacturing profile." },
        { key: "Land basis", value: "3.82 acres", supporting: "166,399 SF parcel; 2016 recorded sale at $19.0M." },
        { key: "Planning context", value: "Specific Plan area", supporting: "Within the Patrick Henry Drive Specific Plan framework." }
      ],
      grid: [
        {
          title: "Hold",
          body: "Operate the property primarily as an existing flex/light-manufacturing asset.",
          bullets: [
            "Current read: 3 Star flex/light manufacturing building in Marriott Business Park with 1981 vintage construction.",
            "Income context: CoStar shows $18.77/SF subject asking rent, below the North Santa Clara 2-4 Star submarket asking-rent benchmark.",
            "Constraint: public materials do not resolve current tenancy, rent roll, or whether the active marketing reflects vacancy, lease-up, or broader repositioning."
          ]
        },
        {
          title: "Reposition",
          body: "Use the building as interim income while advancing the site as a covered-land residential redevelopment opportunity.",
          bullets: [
            "Current read: the existing improvements create carry potential while the land sits inside a corridor already being planned for denser mixed-use housing.",
            "Supporting facts: the Patrick Henry Drive Specific Plan covers a 74-acre district with up to 12,000 residential units contemplated area-wide.",
            "Constraint: a credible covered-land strategy still depends on confirmed occupancy, carry costs, tax burden, and predevelopment timing."
          ]
        },
        {
          title: "Redevelop",
          body: "Pursue residential or mixed-use redevelopment consistent with corridor policy and nearby project precedent.",
          bullets: [
            "Current read: the site is materially larger than many infill parcels and sits near other approved or marketed residential projects along Patrick Henry and Mission College.",
            "Supporting facts: nearby references in this report include 3000 Patrick Henry, 4590 Patrick Henry, Santa Clara Park, Related Santa Clara, and Mission Point.",
            "Constraint: current file materials do not establish a final executable unit count, parking solution, affordability load, or entitlement path for this parcel."
          ]
        },
        {
          title: "Additional structures",
          body: "Parcel split, phased control, or church / civic partnership concepts remain strategic references rather than verified site plans.",
          bullets: [
            "Parcel split / phased control: included as a strategy concept only; no parcel-specific filing is shown in the current source set.",
            "Church / civic partnership: included as an external precedent category, not as a verified attribute of 3055 Patrick Henry.",
            "Use in this report: these are option frameworks, not current entitlements or announced plans."
          ]
        }
      ],
      sources: [
        { label: "CoStar property summary PDF", url: "./sources-supporting-docs/Costar Reports/property-summary.pdf" },
        { label: "CoStar property analytics PDF", url: "./sources-supporting-docs/Costar Reports/property-analytics.pdf" },
        { label: "Patrick Henry Drive Specific Plan", url: "https://www.santaclaraca.gov/our-city/departments-a-f/community-development/planning-division/specific-plans/patrick-henry-drive" },
        { label: "Patrick Henry infrastructure impact fee page", url: "https://www.santaclaraca.gov/our-city/departments-g-z/public-works/engineering/land-property-development/patrick-henry-drive-specific-plan-infrastructure-impact-fee" },
        { label: "Berkadia / citybiz coverage of 3100-3118 Patrick Henry sale", url: "https://www.citybiz.co/article/787736/berkadia-arranges-sale-of-residential-development-site-near-levis-stadium-in-santa-clara-california/" },
        { label: "Los Angeles Times church-housing precedent file", url: "./sources-supporting-docs/Development Vision Procedents/Laguna Beach church reworks, scales down affordable housing project - Los Angeles Times.html" },
        { label: "HousingWire faith-land policy file", url: "./sources-supporting-docs/Development Vision Procedents/States bet on by-right housing projects on church land.html" }
      ]
    },
    {
      id: "development-vision-precedents",
      label: "Development Vision Precedents",
      title: "Development vision precedents",
      customHtml: `
          <div class="precedent-wrap">
          <div class="precedent-block precedent-hero">
            <h3 class="precedent-title">Preserving sanctuary use while introducing affordable housing</h3>
            <p class="precedent-subtitle">Across California, faith-owned properties are increasingly being evaluated as sites for affordable housing under streamlined state frameworks. A Laguna Beach church example shows how a campus can pursue housing while preserving core community-serving buildings, adapting the project over time in response to funding realities, neighborhood concerns, and design refinement.</p>
            <div class="precedent-chips">
              <span class="precedent-chip">State policy support</span>
              <span class="precedent-chip">Faith-owned land</span>
              <span class="precedent-chip">Affordable housing</span>
              <span class="precedent-chip">Sanctuary preservation</span>
            </div>
          </div>

          <div class="precedent-block">
            <h3 class="precedent-section-title">Policy backdrop: faith-owned land as a housing opportunity</h3>
            <p>HousingWire presents church-land housing as part of a broader movement, with California identified as an early state that created a by-right path for qualifying affordable housing on religious land. The article describes this as a clearer approval route tied to objective standards and long-term affordability requirements.</p>
            <ul class="precedent-bullets">
              <li>California is described as the first state to allow qualifying housing on church property without rezoning.</li>
              <li>The Affordable Housing on Faith Lands Act is framed as a tool for 100% affordable multifamily housing on religious and nonprofit-college land.</li>
              <li>HousingWire positions Laguna Beach's Neighborhood Congregational Church as an early test case for that model.</li>
            </ul>
            <div class="precedent-mini-callout">Policy-supported model</div>
          </div>

          <div class="precedent-block">
            <h3 class="precedent-section-title">Case study: Neighborhood Congregational Church, Laguna Beach</h3>
            <div class="precedent-feature-media">
              <img src="./sources-supporting-docs/Development Vision Procedents/OCR-L-NCC-0121-01.webp" alt="Rendering of the 29-unit affordable housing project proposed at Neighborhood Congregational Church in Laguna Beach" />
              <div class="precedent-feature-caption">A rendering of a 29-unit affordable housing project proposed to be built on the Neighborhood Congregational Church property in Laguna Beach. (Courtesy of Neighborhood Congregational Church)</div>
            </div>
            <p class="precedent-case-copy">A Laguna Beach church revised its affordable housing concept over multiple iterations while retaining the central goal of pairing housing with continued church and community use. The first concept introduced in 2024 contemplated 72 units. A later submission reduced that to 44 units. The current revision proposes 28 affordable units plus 1 manager’s unit and abandons plans to demolish the original sanctuary, instead preserving and rejuvenating both the sanctuary and Bridge Hall.</p>
            <div class="precedent-two-col">
              <div>
                <ul class="precedent-bullets">
                  <li>Mix of studio, one-, two-, and three-bedroom units.</li>
                  <li>Income-qualified households roughly $35,550 to $125,940.</li>
                  <li>Approximate rents from $888 to $2,640 per month.</li>
                  <li>Craftsman-style building reduced from three stories to two.</li>
                </ul>
              </div>
              <div>
                <ul class="precedent-bullets">
                  <li>41 subterranean parking spaces, with about 30 for residents and the remainder for public and church use.</li>
                  <li>Public improvements include widened sidewalks, wider Catalina Street, community plaza / green space, and a playground.</li>
                  <li>Walkable access to downtown amenities, the beach, a grocer, and the high school is cited as a competitive advantage for tax-credit funding.</li>
                </ul>
              </div>
            </div>
            <div class="precedent-metrics">
              <div class="precedent-metric">
                <span class="precedent-metric-value">72 → 44 → 29</span>
                <span class="precedent-metric-label">Total units over time</span>
                <div class="precedent-metric-note">The proposal was resized across three publicly reported iterations.</div>
              </div>
              <div class="precedent-metric">
                <span class="precedent-metric-value">Preserved</span>
                <span class="precedent-metric-label">Sanctuary</span>
                <div class="precedent-metric-note">The latest revision drops demolition of the original sanctuary.</div>
              </div>
              <div class="precedent-metric">
                <span class="precedent-metric-value">Preserved</span>
                <span class="precedent-metric-label">Bridge Hall</span>
                <div class="precedent-metric-note">The revised concept keeps and rejuvenates the hall building.</div>
              </div>
              <div class="precedent-metric">
                <span class="precedent-metric-value">41</span>
                <span class="precedent-metric-label">Parking spaces</span>
                <div class="precedent-metric-note">One level of subterranean parking is included in the current proposal.</div>
              </div>
            </div>
          </div>

          <div class="precedent-block">
            <h3 class="precedent-section-title">Project evolution</h3>
            <div class="precedent-timeline">
              <div class="precedent-timeline-item">
                <div class="precedent-timeline-year">2024</div>
                <h4>72-unit concept introduced</h4>
                <p>The church's first publicly discussed affordable housing proposal introduced a materially larger residential program on the campus.</p>
              </div>
              <div class="precedent-timeline-item">
                <div class="precedent-timeline-year">2025</div>
                <h4>44-unit submission</h4>
                <p>A later submission reduced the project to 44 units and included demolition of the existing buildings in favor of a Spirit Center concept.</p>
              </div>
              <div class="precedent-timeline-item">
                <div class="precedent-timeline-year">2026</div>
                <h4>28 affordable units + 1 manager's unit</h4>
                <p>The current revision drops sanctuary demolition, preserves Bridge Hall, and resizes the project around funding, design, and neighborhood constraints.</p>
              </div>
            </div>
            <p class="precedent-timeline-note">This precedent matters because the core development vision remained intact while the project was resized and refined in response to feasibility, funding, and neighborhood concerns.</p>
          </div>

          <div class="precedent-block">
            <h3 class="precedent-section-title">Why this precedent matters</h3>
            <div class="precedent-implications">
              <div class="precedent-metric">
                <span class="precedent-metric-label">Policy Alignment</span>
                <div class="precedent-metric-note">Supports the idea that faith-owned land can be a legitimate housing delivery channel under California’s current framework.</div>
              </div>
              <div class="precedent-metric">
                <span class="precedent-metric-label">Preservation-Oriented Vision</span>
                <div class="precedent-metric-note">Shows that affordable housing can be paired with continued institutional and community use rather than full site replacement.</div>
              </div>
              <div class="precedent-metric">
                <span class="precedent-metric-label">Feasibility-Responsive Execution</span>
                <div class="precedent-metric-note">Demonstrates that unit count and site strategy may evolve based on funding, community concerns, and entitlement realities while preserving the core thesis.</div>
              </div>
            </div>
          </div>

          <div class="precedent-source-row">
            <strong>Sources:</strong>
            <a href="https://www.housingwire.com/articles/church-land-housing-laws/" target="_blank" rel="noopener">HousingWire</a>,
            <a href="https://www.ocregister.com/2026/01/22/laguna-beach-church-revamps-affordable-housing-project/" target="_blank" rel="noopener">Orange County Register</a>,
            <a href="https://www.latimes.com/socal/daily-pilot/news/story/2026-01-23/laguna-beach-church-reworks-scales-down-affordable-housing-project" target="_blank" rel="noopener">Los Angeles Times / Daily Pilot</a>
          </div>
        </div>
      `,
      sources: []
    },
    {
      id: "neighboring-projects",
      label: "Nearby Projects & Comps",
      title: "Nearby projects & comps",
      lede:
        "Nearby redevelopment projects, land trades, and large mixed-use districts show what product is being advanced around the subject and how the corridor is evolving.",
      customHtml: `
        <div class="project-stack">
          <div class="project-subsection nearby-group">
            <div class="project-section-header">
              <h3 class="project-subsection-title">Neighboring development projects</h3>
              <span class="project-dot green"></span>
            </div>
            <p class="project-subsection-copy">The four most relevant nearby references are 3100-3118 Patrick Henry Drive, 3000 Patrick Henry Drive, 4590 Patrick Henry Drive, and 2518 Mission College Boulevard. Together they show adjacent capital activity, approved multifamily scale, and the type of product being delivered in the immediate area.</p>
          </div>

          <div class="project-profile green">
            <h4>3100-3118 Patrick Henry Drive</h4>
            <div class="project-kicker">Immediately adjacent Patrick Henry corridor land trade and redevelopment reference. 0.1 mi from subject.</div>
            <div class="project-detail-grid">
              <div class="project-detail"><strong>Address / location</strong>3100-3118 Patrick Henry Dr, Santa Clara, CA 95054; Marriott Business Park.</div>
              <div class="project-detail"><strong>Developer / sponsor</strong>JEMCOR Development Partners.</div>
              <div class="project-detail"><strong>Property type / use</strong>Residential development-site sale; existing flex / R&amp;D asset.</div>
              <div class="project-detail"><strong>Status</strong>Sold; residential development-site reference.</div>
              <div class="project-detail"><strong>Delivery timeline</strong>Not published.</div>
              <div class="project-detail"><strong>Latest known sale date</strong>December 2025.</div>
              <div class="project-detail"><strong>Latest known sold price</strong>$12,500,000.</div>
              <div class="project-detail"><strong>Total unit count</strong>Approx. 252-375 units implied by Berkadia's stated zoning density of 100-149 units per developable acre across 2.52 acres; no specific filed program published.</div>
              <div class="project-detail"><strong>Unit mix</strong>Not published.</div>
              <div class="project-detail"><strong>Height / scale</strong>37,180 SF RBA; 1 story; 2.52 acres; built 1981; zoning allows up to 160 feet.</div>
              <div class="project-detail"><strong>Program components</strong>High-density residential redevelopment potential under the Patrick Henry Drive Specific Plan.</div>
              <div class="project-detail"><strong>Positioning</strong>Land-sale / redevelopment signal.</div>
              <div class="project-detail"><strong>Relationship to subject</strong>Same corridor; very near subject.</div>
              <div class="project-detail"><strong>Why it matters</strong>Confirms active land investment on Patrick Henry.</div>
              <div class="project-detail"><strong>Photo / rendering reference</strong>CoStar photos, aerial, plat map, floor plan, site plan.</div>
            </div>
            <div class="project-image-grid">
              <div class="project-image-card">
                <img src="./sources-supporting-docs/Neighboring projects & comps/3100-3118 Patrick Henry Dr - 1.jpg" alt="3100-3118 Patrick Henry Drive existing property view" />
              </div>
              <div class="project-image-card">
                <img src="./sources-supporting-docs/Neighboring projects & comps/3100-3118-Patrick-Henry-Drive-2.jpg" alt="3100-3118 Patrick Henry Drive additional property view" />
              </div>
            </div>
            <div class="project-image-caption">3100-3118 Patrick Henry Drive: nearby Marriott Business Park property sold in December 2025 as a residential development-site reference.</div>
          </div>

          <div class="project-profile green">
            <h4>3000 Patrick Henry Drive</h4>
            <div class="project-kicker">Same-corridor residential conversion precedent on a similarly sized 2.52-acre parcel. 0.1 mi from subject.</div>
            <div class="project-detail-grid">
              <div class="project-detail"><strong>Address / location</strong>3000 Patrick Henry Dr, Santa Clara, CA 95054; CoStar report is filed as 3000-3030 Patrick Henry Dr for the same property.</div>
              <div class="project-detail"><strong>Developer / sponsor</strong>SummerHill Apartment Communities / Pactron Ventures.</div>
              <div class="project-detail"><strong>Property type / use</strong>Approved mixed-use residential redevelopment replacing an older flex / R&amp;D property.</div>
              <div class="project-detail"><strong>Status</strong>Approved.</div>
              <div class="project-detail"><strong>Delivery timeline</strong>Not published.</div>
              <div class="project-detail"><strong>Latest sale date</strong>February 2022 transfer recorded in CoStar sales history; price not published.</div>
              <div class="project-detail"><strong>Latest known sale date</strong>August 2011 for the prior flex property.</div>
              <div class="project-detail"><strong>Latest known sold price</strong>$5,175,000 for the prior flex property.</div>
              <div class="project-detail"><strong>Total unit count</strong>307 dwelling units.</div>
              <div class="project-detail"><strong>Unit mix</strong>Not published in the current source set.</div>
              <div class="project-detail"><strong>Height / scale</strong>7 stories; prior flex building 35,200 SF; 2.52 acres.</div>
              <div class="project-detail"><strong>Program components</strong>5,000 SF community arts center, about 9,250 SF dedicated art park, and 4,000 SF of retail space.</div>
              <div class="project-detail"><strong>Positioning</strong>Market-rate mixed-use residential precedent in the same Patrick Henry corridor.</div>
              <div class="project-detail"><strong>Relationship to subject</strong>Same corridor; nearly identical lot size.</div>
              <div class="project-detail"><strong>Why it matters</strong>Direct same-corridor residential precedent.</div>
              <div class="project-detail"><strong>Photo / rendering reference</strong>City project page; CoStar old-property report.</div>
            </div>
            <div class="project-image-grid">
              <div class="project-image-card">
                <img src="./sources-supporting-docs/Neighboring projects & comps/3000 patrick henry.jpg" alt="3000 Patrick Henry Drive existing property view" />
              </div>
              <div class="project-image-card">
                <img src="./sources-supporting-docs/Neighboring projects & comps/3000 patrick henry rendering.png" alt="3000 Patrick Henry Drive rendering" />
              </div>
            </div>
            <div class="project-image-caption">3000 Patrick Henry Drive: legacy flex property and same-corridor rendering reference for the approved 307-unit mixed-use redevelopment.</div>
          </div>

          <div class="project-profile green">
            <h4>4590 Patrick Henry Drive</h4>
            <div class="project-kicker">Proposed multifamily benchmark close to the subject with published scale, sponsor, and timing. 0.2 mi from subject.</div>
            <div class="project-detail-grid">
              <div class="project-detail"><strong>Address / location</strong>4590 Patrick Henry Dr, Santa Clara, CA 95054.</div>
              <div class="project-detail"><strong>Developer / sponsor</strong>Walnut Hill Capital LLC; Kasa Partners; BAR Architects.</div>
              <div class="project-detail"><strong>Property type / use</strong>Proposed market-rate apartments on a site currently improved with a former flex / R&amp;D building.</div>
              <div class="project-detail"><strong>Status</strong>Approved / pipeline.</div>
              <div class="project-detail"><strong>Delivery timeline</strong>Start July 2026; built 2027.</div>
              <div class="project-detail"><strong>Latest known sale date</strong>February 2020 for the prior flex property.</div>
              <div class="project-detail"><strong>Latest known sold price</strong>$16,675,000 for the prior flex property.</div>
              <div class="project-detail"><strong>Total unit count</strong>284 units.</div>
              <div class="project-detail"><strong>Unit mix</strong>Studios, 1BR, 2BR.</div>
              <div class="project-detail"><strong>Height / scale</strong>8 stories; about 300,000 SF GBA; 1 building; 2.80 acres.</div>
              <div class="project-detail"><strong>Program components</strong>0.55-acre public park parcel; ground-floor social lounge.</div>
              <div class="project-detail"><strong>Positioning</strong>Market-rate 3 Star mid-rise apartments.</div>
              <div class="project-detail"><strong>Relationship to subject</strong>Same corridor; immediate future competition set.</div>
              <div class="project-detail"><strong>Why it matters</strong>Clear benchmark for nearby apartment scale and timing.</div>
              <div class="project-detail"><strong>Photo / rendering reference</strong>City page and CoStar proposed-property report.</div>
            </div>
            <div class="project-image-grid">
              <div class="project-image-card">
                <img src="./sources-supporting-docs/Neighboring projects & comps/4590 Patrick Henry.jpg" alt="4590 Patrick Henry Drive existing property view" />
              </div>
              <div class="project-image-card">
                <img src="./sources-supporting-docs/Neighboring projects & comps/4590 Patrick Henry Rendering.jpg" alt="4590 Patrick Henry Drive rendering" />
              </div>
            </div>
            <div class="project-image-caption">4590 Patrick Henry Drive: former flex / R&amp;D site and current rendering for the approved 284-unit residential project.</div>
          </div>

          <div class="project-profile green">
            <h4>2518 Mission College Boulevard / Santa Clara Park Residential Project</h4>
            <div class="project-kicker">Large-scale residential conversion of an office campus in the Freedom Circle Focus Area. 1.1 mi from subject.</div>
            <div class="project-detail-grid">
              <div class="project-detail"><strong>Address / location</strong>2518 Mission College Blvd, Santa Clara, CA 95054.</div>
              <div class="project-detail"><strong>Developer / sponsor</strong>Irvine Company.</div>
              <div class="project-detail"><strong>Property type / use</strong>Approved apartment redevelopment of the Santa Clara Park office campus.</div>
              <div class="project-detail"><strong>Status</strong>Approved.</div>
              <div class="project-detail"><strong>Delivery timeline</strong>Start April 2026; built 2028.</div>
              <div class="project-detail"><strong>Latest known sale date</strong>January 2015 for the prior office property, as part of a portfolio sale.</div>
              <div class="project-detail"><strong>Latest known sold price</strong>$9,682,451 for the prior office property.</div>
              <div class="project-detail"><strong>Total unit count</strong>1,792 apartment units.</div>
              <div class="project-detail"><strong>Unit mix</strong>15% affordable; bedroom mix not published.</div>
              <div class="project-detail"><strong>Height / scale</strong>5 buildings; 5 stories; about 1.7M SF residential; 25.74 acres.</div>
              <div class="project-detail"><strong>Program components</strong>3,500 SF retail, about 16,800 SF amenities, 2,537 parking spaces, and subdivision into six lots.</div>
              <div class="project-detail"><strong>Positioning</strong>Large-scale market-rate multifamily with an affordable component.</div>
              <div class="project-detail"><strong>Relationship to subject</strong>Nearby large office-to-residential conversion.</div>
              <div class="project-detail"><strong>Why it matters</strong>Institutional-scale apartment supply signal near the subject.</div>
              <div class="project-detail"><strong>Photo / rendering reference</strong>City project page; CoStar proposed-property report.</div>
            </div>
            <div class="project-image-grid">
              <div class="project-image-card">
                <img src="./sources-supporting-docs/Neighboring projects & comps/2518 Mission College Boulevard.jpg" alt="2518 Mission College Boulevard existing property view" />
              </div>
              <div class="project-image-card">
                <img src="./sources-supporting-docs/Neighboring projects & comps/2518 Mission College Boulevard plan.png" alt="2518 Mission College Boulevard site plan" />
              </div>
            </div>
            <div class="project-image-caption">2518 Mission College Boulevard: Santa Clara Park campus and site-plan reference for the approved 1,792-unit residential redevelopment.</div>
          </div>

          <div class="project-profile">
            <h4>Comparison chart: top nearby projects</h4>
            <div class="project-compare-table nearby-projects-table">
              <table>
                <thead>
                  <tr>
                    <th>Property</th>
                    <th>Latest sale</th>
                    <th>Previous known sale</th>
                    <th>Prior Building SF</th>
                    <th>Price / SF</th>
                    <th>Lot (AC)</th>
                    <th>Units</th>
                    <th>Construction</th>
                    <th>Developer / sponsor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>3100-3118 Patrick Henry</td>
                    <td>Dec. 2025: $12,500,000</td>
                    <td>May 2000: $8,700,000</td>
                    <td>37,180 SF existing building</td>
                    <td>$336.20/SF<div class="comp-cell-note">Based on latest sale.</div></td>
                    <td>2.52</td>
                    <td>Approx. 252-375 units (implied zoning capacity)</td>
                    <td>Not published</td>
                    <td>JEMCOR Development Partners</td>
                  </tr>
                  <tr>
                    <td>3000 Patrick Henry</td>
                    <td>Feb. 2022: Price not published</td>
                    <td>Aug. 2011: $5,175,000</td>
                    <td>35,200 SF prior flex building</td>
                    <td>$147.02/SF<div class="comp-cell-note">Based on previous known sale.</div></td>
                    <td>2.52</td>
                    <td>307</td>
                    <td>Not published</td>
                    <td>SummerHill Apartment Communities / Pactron Ventures</td>
                  </tr>
                  <tr>
                    <td>4590 Patrick Henry</td>
                    <td>Feb. 2020: $16,675,000</td>
                    <td>Not published</td>
                    <td>43,080 SF prior building</td>
                    <td>$387.07/SF<div class="comp-cell-note">Based on latest sale.</div></td>
                    <td>2.80</td>
                    <td>284</td>
                    <td>Jul. 2026 start / 2027 built</td>
                    <td>Walnut Hill Capital / Kasa Partners</td>
                  </tr>
                  <tr>
                    <td>2518 Mission College</td>
                    <td>Jan. 2015: $136,500,000</td>
                    <td>May 2013: $96,200,000</td>
                    <td>22,500 SF prior office building</td>
                    <td>$319.45/SF<div class="comp-cell-note">Based on latest sale.</div></td>
                    <td>1.35 AC prior lot; proposed project land size 25.74 AC</td>
                    <td>1,792</td>
                    <td>Apr. 2026 start / 2028 built</td>
                    <td>Irvine Company</td>
                  </tr>
                  <tr class="subject-row">
                    <td>3055 Patrick Henry</td>
                    <td>Apr. 2018: Not published</td>
                    <td>Apr. 2016: $19,000,000</td>
                    <td>70,520 SF building area</td>
                    <td>$269.43/SF<div class="comp-cell-note">Based on previous known sale.</div></td>
                    <td>3.82</td>
                    <td>Not published</td>
                    <td>Existing 1981 flex building</td>
                    <td>3055 Patrick Henry Development, LLC / Z &amp; L Properties</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="project-subsection area-group">
            <div class="project-section-header">
              <h3 class="project-subsection-title">Other developments in the area</h3>
              <span class="project-dot orange"></span>
            </div>
            <p class="project-subsection-copy">Related Santa Clara and Mission Point are materially larger district-scale projects than the top four nearby references, but they are still important because they show the broader direction of North Santa Clara land use and capital commitment.</p>
            <div class="project-mini-grid">
              <div class="project-profile orange">
                <div class="project-split">
                  <div>
                    <h4>Related Santa Clara</h4>
                    <div class="project-detail-grid">
                      <div class="project-detail"><strong>Address / location</strong>5155 Stars &amp; Stripes Drive, adjacent to Levi's Stadium. 1.5 mi from subject.</div>
                      <div class="project-detail"><strong>Developer / sponsor</strong>Related Companies in partnership with the City of Santa Clara.</div>
                      <div class="project-detail"><strong>Program</strong>9.2M SF mixed-use district including 1,680 residential units, 700 hotel rooms, about 5M SF office, retail / entertainment, and a 30-acre city park.</div>
                      <div class="project-detail"><strong>Status</strong>Multi-phased development with construction impacts and road work described by the city as ongoing.</div>
                      <div class="project-detail"><strong>Why it matters</strong>Shows major institutional commitment to a large mixed-use neighborhood model in North Santa Clara.</div>
                      <div class="project-detail"><strong>Reference image</strong>City project page rendering.</div>
                    </div>
                  </div>
                  <div class="project-image-side">
                    <img src="./sources-supporting-docs/Neighboring projects & comps/related santa clara.png" alt="Related Santa Clara rendering" />
                  </div>
                </div>
              </div>
              <div class="project-profile orange">
                <div class="project-split">
                  <div>
                    <h4>Mission Point by Kylli</h4>
                    <div class="project-detail-grid">
                      <div class="project-detail"><strong>Address / location</strong>3005 Democracy Way, Santa Clara, on 46 acres. 0.7 mi from subject.</div>
                      <div class="project-detail"><strong>Developer / sponsor</strong>Kylli, Inc.</div>
                      <div class="project-detail"><strong>Program</strong>Approved mixed-use district with about 1,800 multifamily units, about 3.0M SF office / lab, about 100,000 SF retail, childcare, and park / trail / open-space infrastructure.</div>
                      <div class="project-detail"><strong>Status</strong>Approved by City Council on Nov. 19, 2024.</div>
                      <div class="project-detail"><strong>Why it matters</strong>Demonstrates continued city support for reworking large commercial properties into mixed-use districts with substantial housing.</div>
                      <div class="project-detail"><strong>Reference image</strong>City project page aerial.</div>
                    </div>
                  </div>
                  <div class="project-image-side">
                    <img src="./sources-supporting-docs/Neighboring projects & comps/mission point.jpg" alt="Mission Point by Kylli aerial rendering" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="project-subsection comp-group">
          <div class="project-profile">
            <h3 class="project-subsection-title">10-mile radius sale comps</h3>
            <p class="project-subsection-copy">CoStar sale comps for the subject property within a 10-mile radius.</p>
            <div class="project-detail-grid">
              <div class="project-detail"><strong>Radius</strong>10 miles from 3055 Patrick Henry Dr.</div>
              <div class="project-detail"><strong>Property type</strong>Flex.</div>
              <div class="project-detail"><strong>Building status</strong>Existing; under renovation.</div>
              <div class="project-detail"><strong>Property size</strong>35,260-141,040 SF.</div>
              <div class="project-detail"><strong>CoStar rating</strong>4 Star, 3 Star, 2 Star.</div>
              <div class="project-detail"><strong>Sale date</strong>Last 2 years.</div>
              <div class="project-detail"><strong>Excludes</strong>Condo sales, portfolio sales, non-arms length sales, partial interest transfer sales, public record sales.</div>
            </div>
            <div class="project-compare-table sale-comp-table">
              <table>
                <thead>
                  <tr>
                    <th>Address</th>
                    <th>Rating</th>
                    <th>Yr built</th>
                    <th>Size</th>
                    <th>Distance</th>
                    <th>Sale</th>
                    <th>Price</th>
                    <th>$ / SF</th>
                    <th>Submkt</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>1010 Rincon Cir</td><td>3</td><td>1984</td><td>90,871 SF</td><td>4.01 mi</td><td>Jun 2024</td><td>$35,500,000</td><td>$390.66</td><td>N. San Jose</td></tr>
                  <tr><td>1195-1213 Elko Dr</td><td>2</td><td>1985</td><td>44,277 SF</td><td>0.85 mi</td><td>Jun 2024</td><td>$11,650,000</td><td>$263.12</td><td>Sunnyvale</td></tr>
                  <tr><td>3495 Deer Creek Rd</td><td>3</td><td>1979</td><td>81,031 SF</td><td>9.07 mi</td><td>Jul 2024</td><td>$55,964,000</td><td>$690.65</td><td>Palo Alto</td></tr>
                  <tr><td>3939 N 1st St</td><td>3</td><td>1984</td><td>64,396 SF</td><td>2.04 mi</td><td>Sep 2024</td><td>$10,800,000</td><td>$167.71</td><td>N. San Jose</td></tr>
                  <tr><td>3176 Porter Dr</td><td>3</td><td>1991</td><td>42,899 SF</td><td>9.18 mi</td><td>Dec 2024</td><td>$24,800,000</td><td>$578.10</td><td>Palo Alto</td></tr>
                  <tr><td>3550 N 1st St</td><td>3</td><td>2000</td><td>76,690 SF</td><td>2.33 mi</td><td>Feb 2025</td><td>$18,530,000</td><td>$241.62</td><td>N. San Jose</td></tr>
                  <tr><td>3200 Patrick Henry Dr</td><td>2</td><td>1978</td><td>105,120 SF</td><td>0.16 mi</td><td>Feb 2025</td><td>$18,000,000</td><td>$171.23</td><td>N. Santa Clara</td></tr>
                  <tr><td>3725 N 1st St</td><td>2</td><td>1970</td><td>70,656 SF</td><td>2.14 mi</td><td>Feb 2025</td><td>$27,000,000</td><td>$382.13</td><td>N. San Jose</td></tr>
                  <tr><td>575 Cottonwood Dr</td><td>2</td><td>1985/2008</td><td>48,384 SF</td><td>3.78 mi</td><td>May 2025</td><td>$14,330,000</td><td>$296.17</td><td>Milpitas</td></tr>
                  <tr><td>4750 Patrick Henry Dr</td><td>3</td><td>1979</td><td>65,360 SF</td><td>0.24 mi</td><td>Jun 2025</td><td>$19,850,000</td><td>$303.70</td><td>N. Santa Clara</td></tr>
                  <tr><td>401 Whitney Pl</td><td>3</td><td>1982</td><td>72,776 SF</td><td>6.06 mi</td><td>Jun 2025</td><td>$27,100,000</td><td>$372.38</td><td>Fremont</td></tr>
                  <tr><td>3200 N 1st St</td><td>4</td><td>1997</td><td>85,017 SF</td><td>2.55 mi</td><td>Jun 2025</td><td>$22,723,000</td><td>$267.28</td><td>N. San Jose</td></tr>
                  <tr><td>1321 Ridder Park Dr</td><td>2</td><td>1984</td><td>36,030 SF</td><td>4.51 mi</td><td>Sep 2025</td><td>$13,250,000</td><td>$367.75</td><td>SJ-Berryessa</td></tr>
                  <tr><td>2304-2306 Zanker Rd</td><td>3</td><td>1983</td><td>40,565 SF</td><td>3.67 mi</td><td>Oct 2025</td><td>$9,150,000</td><td>$225.56</td><td>N. San Jose</td></tr>
                  <tr><td>3350 W Bayshore Rd</td><td>2</td><td>1982</td><td>60,000 SF</td><td>7.53 mi</td><td>Dec 2025</td><td>$29,000,000</td><td>$483.33</td><td>Palo Alto</td></tr>
                  <tr><td>2710 Lakeview Ct</td><td>2</td><td>1987</td><td>80,354 SF</td><td>5.79 mi</td><td>Feb 2026</td><td>$28,800,000</td><td>$358.41</td><td>Fremont</td></tr>
                  <tr class="subject-row"><td>3055 Patrick Henry Dr</td><td>3</td><td>1981</td><td>70,520 SF</td><td>0.00 mi</td><td>Apr 2016</td><td>$19,000,000</td><td>$269.43</td><td>N. Santa Clara</td></tr>
                </tbody>
              </table>
            </div>
            <div class="comp-note">Source: CoStar 10-mile sale comp set for subject.</div>
          </div>
          </div>
        </div>
      `,
      sources: [
        { label: "Berkadia / citybiz coverage of 3100-3118 Patrick Henry sale", url: "https://www.citybiz.co/article/787736/berkadia-arranges-sale-of-residential-development-site-near-levis-stadium-in-santa-clara-california/" },
        { label: "Traded sale summary for 3100-3118 Patrick Henry", url: "https://traded.co/deals/california/office/sale/3100-3118-patrick-henry-drive/" },
        { label: "3100-3118 Patrick Henry CoStar report", url: "./sources-supporting-docs/Neighboring projects & comps/3100-3118 Patrick Henry Dr.pdf" },
        { label: "CoStar sales history - 3100-3118 Patrick Henry Drive", url: "./sources-supporting-docs/Neighboring projects & comps/Sale History/3100-3118 Patrick Henry Dr.xlsx" },
        { label: "3000 Patrick Henry city project page", url: "https://www.santaclaraca.gov/Home/Components/BusinessDirectory/BusinessDirectory/493/2495?npage=3" },
        { label: "3000 Patrick Henry CoStar report", url: "./sources-supporting-docs/Neighboring projects & comps/3000-3030 Patrick Henry Dr.pdf" },
        { label: "CoStar sales history - 3000 Patrick Henry Drive", url: "./sources-supporting-docs/Neighboring projects & comps/Sale History/3000 Patrick Henry Dr.xlsx" },
        { label: "4590 Patrick Henry city project page", url: "https://www.santaclaraca.gov/Home/Components/BusinessDirectory/BusinessDirectory/513/2495?fsiteid=1&npage=4" },
        { label: "4590 Patrick Henry proposed CoStar report", url: "./sources-supporting-docs/Neighboring projects & comps/4590 Patrick Henry Dr - Proposed.pdf" },
        { label: "4590 Patrick Henry old property CoStar report", url: "./sources-supporting-docs/Neighboring projects & comps/4590 Patrick Henry Dr - old property.pdf" },
        { label: "CoStar sales history - 4590 Patrick Henry Drive", url: "./sources-supporting-docs/Neighboring projects & comps/Sale History/4590 Patrick Henry Dr.xlsx" },
        { label: "2518 Mission College city project page", url: "https://www.santaclaraca.gov/Home/Components/BusinessDirectory/BusinessDirectory/519/2571?npage=2" },
        { label: "2518 Mission College proposed CoStar report", url: "./sources-supporting-docs/Neighboring projects & comps/2518 Mission College Blvd - proposed.pdf" },
        { label: "2518 Mission College old property CoStar report", url: "./sources-supporting-docs/Neighboring projects & comps/2518 Mission College Blvd - old property.pdf" },
        { label: "CoStar sales history - 2518 Mission College Boulevard", url: "./sources-supporting-docs/Neighboring projects & comps/Sale History/2518 Mission College Blvd.xlsx" },
        { label: "CoStar sales history - 3055 Patrick Henry Drive", url: "./sources-supporting-docs/Neighboring projects & comps/Sale History/3055-patrick-henry.xlsx" },
        { label: "Related Santa Clara", url: "https://www.santaclaraca.gov/business-development/related-santa-clara" },
        { label: "Mission Point by Kylli", url: "https://www.santaclaraca.gov/Home/Components/BusinessDirectory/BusinessDirectory/245/2495?alpha=K" },
        { label: "CoStar 10-mile radius flex property comps", url: "./sources-supporting-docs/Neighboring projects & comps/costar 30mi radius flex property comps.xlsx" }
      ]
    },
    {
      id: "tax-assessed-value-analysis",
      label: "Tax-Assessed Value Analysis",
      title: "Tax-assessed value analysis",
      lede:
        "Santa Clara County Assessor public data, compiled in the newly saved CompRedux workbooks, now show assessed-value history from 2014-2015 through 2025-2026 for 3055 Patrick Henry and four nearby Santa Clara reference properties.",
      paragraphs: [
        "The charts below track land value, improvement value, and net assessed value separately so the longer-term basis step-ups are easier to read across the full eleven-to-twelve-year history."
      ],
      assessmentCharts: [
        {
          chartId: "tax-chart-land-value",
          title: "Land value",
          takeaway:
            "Over the longer series, land-value basis steps are much more visible: 2518 Mission College remains the outlier, while 3055 and 4590 show the largest Patrick Henry corridor land positions.",
          years: ["2014-2015", "2015-2016", "2016-2017", "2017-2018", "2018-2019", "2019-2020", "2020-2021", "2021-2022", "2022-2023", "2023-2024", "2024-2025", "2025-2026"],
          series: [
            { label: "3055 Patrick Henry", color: "#aa566b", values: [6732494, 6867009, 9289537, 13413000, 13681260, 13954885, 15085800, 15242088, 15857867, 16175024, 16498524, null] },
            { label: "3000 Patrick Henry", color: "#c9a24d", values: [3381281, 3448838, 3501432, 3571460, 3642889, 3715746, 3790060, 3829325, 3984029, 4063709, 4144983, 4144983] },
            { label: "3100-3118 Patrick Henry", color: "#4f7b6a", values: [2899582, 2957515, 3002617, 3062669, 3123922, 3186400, 3250128, 3283799, 3349474, 3416463, 3484792, 3554487] },
            { label: "4590 Patrick Henry", color: "#2f5d7c", values: [3762444, 3837617, 3896140, 3974062, 4053543, 4134613, 12000000, 11619140, 12088552, 12330323, 12576929, 12576929] },
            { label: "2518 Mission College", color: "#7e5aa6", values: [56726965, 57860369, 85281000, 86986620, 88726352, 90500879, 92310896, 93267236, 95132580, 98975935, 100955453, null] }
          ]
        },
        {
          chartId: "tax-chart-improvement-value",
          title: "Improvement value",
          takeaway:
            "The longer improvement-value history shows where building basis changed materially over time, especially at 3055, 4590, and 2518 Mission College.",
          years: ["2014-2015", "2015-2016", "2016-2017", "2017-2018", "2018-2019", "2019-2020", "2020-2021", "2021-2022", "2022-2023", "2023-2024", "2024-2025", "2025-2026"],
          series: [
            { label: "3055 Patrick Henry", color: "#aa566b", values: [5563051, 5674200, 5727612, 5967000, 6086340, 6208066, 14877720, 15031853, 15639139, 15951921, 16270959, null] },
            { label: "3000 Patrick Henry", color: "#c9a24d", values: [2087598, 2237176, 2241030, 2247398, 2260793, 2277209, 3540871, 3474777, 2263652, 2308925, 2355103, 4374367] },
            { label: "3100-3118 Patrick Henry", color: "#4f7b6a", values: [2490160, 2539913, 2578646, 2630218, 2682822, 2736478, 2791207, 2820123, 2876525, 2934055, 2992736, 3052590] },
            { label: "4590 Patrick Henry", color: "#2f5d7c", values: [1646069, 1678957, 1704561, 1738652, 1773425, 1808893, 4400000, 5228613, 5439848, 5548644, 5659616, 5659616] },
            { label: "2518 Mission College", color: "#7e5aa6", values: [39880238, 40677045, 53300625, 54366637, 55453969, 56563048, 59584308, 60201601, 61405633, 63886419, 65164147, null] }
          ]
        },
        {
          chartId: "tax-chart-net-assessed-value",
          title: "Net assessed value",
          takeaway:
            "Net assessed value best captures the total basis trajectory: 3055 steps up sharply after 2019-2020, 4590 also reprices higher, and 2518 Mission College remains a much larger campus-scale benchmark.",
          years: ["2014-2015", "2015-2016", "2016-2017", "2017-2018", "2018-2019", "2019-2020", "2020-2021", "2021-2022", "2022-2023", "2023-2024", "2024-2025", "2025-2026"],
          series: [
            { label: "3055 Patrick Henry", color: "#aa566b", values: [12295545, 12541209, 15017149, 19380000, 19767600, 20162951, 29963520, 30273941, 30879419, 32126945, 32769483, null] },
            { label: "3000 Patrick Henry", color: "#c9a24d", values: [5468879, 5686014, 5742462, 5818858, 5903682, 5992955, 7330931, 7304102, 7929664, 6372634, 8519350, 8519350] },
            { label: "3100-3118 Patrick Henry", color: "#4f7b6a", values: [5389742, 5497428, 5581263, 5692887, 5806744, 5922878, 6041335, 6103922, 6225999, 6350518, 6477528, 6607077] },
            { label: "4590 Patrick Henry", color: "#2f5d7c", values: [5408513, 5516574, 5600701, 5712714, 5826968, 5943506, 16400000, 16847753, 17184707, 17878967, 18236545, 18236545] },
            { label: "2518 Mission College", color: "#7e5aa6", values: [96607203, 98537414, 138581625, 141353257, 144180321, 147063927, 151895204, 153468837, 156538213, 162862354, 166119600, null] }
          ]
        }
      ],
      snapshotTable: {
        columns: ["Property", "Latest year", "Land", "Improvements", "Net assessed", "2014-15 to latest change"],
        rows: [
          ["3055 Patrick Henry", "2024-2025", "$16,498,524", "$16,270,959", "$32,769,483", "+$20,473,938 / +166.5%"],
          ["4590 Patrick Henry", "2025-2026", "$12,576,929", "$5,659,616", "$18,236,545", "+$12,828,032 / +237.2%"],
          ["3000 Patrick Henry", "2025-2026", "$4,144,983", "$4,374,367", "$8,519,350", "+$3,050,471 / +55.8%"],
          ["3100-3118 Patrick Henry", "2025-2026", "$3,554,487", "$3,052,590", "$6,607,077", "+$1,217,335 / +22.6%"],
          ["2518 Mission College", "2024-2025", "$100,955,453", "$65,164,147", "$166,119,600", "+$69,512,397 / +72.0%"]
        ]
      },
      sources: [
        { label: "Santa Clara County Assessor public data — CompRedux workbook for 3055 Patrick Henry", url: "./sources-supporting-docs/Tax info/CompRedux/3055-PATRICK-HENRY-DR-SANTA-CLARA-950541815-2026-04-14.xlsx" },
        { label: "Santa Clara County Assessor public data — CompRedux workbook for 3000 Patrick Henry", url: "./sources-supporting-docs/Tax info/CompRedux/3000-PATRICK-HENRY-DR-SANTA-CLARA-950541814-2026-04-14.xlsx" },
        { label: "Santa Clara County Assessor public data — CompRedux workbook for 3100-3118 Patrick Henry", url: "./sources-supporting-docs/Tax info/CompRedux/3100-PATRICK-HENRY-DR-SANTA-CLARA-950541814-2026-04-14.xlsx" },
        { label: "Santa Clara County Assessor public data — CompRedux workbook for 4590 Patrick Henry", url: "./sources-supporting-docs/Tax info/CompRedux/4590-PATRICK-HENRY-DR-SANTA-CLARA-950541817-2026-04-14.xlsx" },
        { label: "Santa Clara County Assessor public data — CompRedux workbook for 2518 Mission College", url: "./sources-supporting-docs/Tax info/CompRedux/2518-Misson-college-blvd.xlsx" }
      ]
    },
    {
      id: "condo-sale-comps",
      label: "Condo Sale Comps",
      title: "Condo sale comps",
      paragraphs: [
        "Recent condo sale comps: this section summarizes condo comparables in ZIP code 95054, including current active listings, coming-soon listings, and sold listings since January 1, 2026, plus a location map for quick visual reference. Data as of April 12, 2026 — listing status and availability may change."
      ],
      customHtml: `
        <div class="project-subsection comp-group">
          <h3 class="project-subsection-title">Condo Sale Summary</h3>
          <div class="project-compare-table condo-summary-table">
            <table>
              <thead>
                <tr>
                  <th>Bedroom group</th>
                  <th>Count</th>
                  <th>DOM</th>
                  <th>$/SF</th>
                  <th>Avg List</th>
                  <th>Avg Sale</th>
                  <th>Avg HOA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1 bedroom</td>
                  <td>5</td>
                  <td>36</td>
                  <td>$727.70</td>
                  <td>$644,318</td>
                  <td>$619,922</td>
                  <td>$579</td>
                </tr>
                <tr>
                  <td>2 bedroom</td>
                  <td>8</td>
                  <td>25</td>
                  <td>$729.35</td>
                  <td>$765,030</td>
                  <td>$803,333</td>
                  <td>$661</td>
                </tr>
                <tr>
                  <td>3 bedroom</td>
                  <td>2</td>
                  <td>133</td>
                  <td>$659.45</td>
                  <td>$873,000</td>
                  <td>$935,000</td>
                  <td>$569</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 class="project-subsection-title">Condo Sale Comp Map</h3>
          <figure class="figure">
            <img src="./sources-supporting-docs/Condo Sale Comp.png" alt="3055 Patrick Henry condo sale comparables map with numbered condo sale comps" />
            <figcaption class="figcap">Condo sale comp map with numbered listings in the North Santa Clara / Rivermark area.</figcaption>
          </figure>

          <h3 class="project-subsection-title">All Condo Sale Comps</h3>
          <p class="project-subsection-copy">Ordered to match the numbering shown on the sale comp map.</p>

          <div class="condo-toolbar">
            <div class="condo-status-list">
              <span class="condo-status-badge coming">Coming Soon</span>
              <span class="condo-status-badge active">Active</span>
              <span class="condo-status-badge sold">Sold</span>
            </div>
            <a class="mls-button" href="https://search.mlslistings.com/DE.asp?ID=DE-110058988797&L=1&eml=RGluZ3lpcm9uZ2R5ckBnbWFpbC5jb20=" target="_blank" rel="noopener">View MLS Listings</a>
          </div>

          <div class="project-compare-table condo-comp-table">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Address</th>
                  <th>Yr / Cond.</th>
                  <th>Bd / Ba</th>
                  <th>SF</th>
                  <th>HOA</th>
                  <th>List</th>
                  <th>Sale</th>
                  <th>$/SF</th>
                  <th>Close</th>
                  <th>DOM</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="comp-number comp-coming">1</span></td>
                  <td>1883 Agnew Rd #420</td>
                  <td>2006<div class="comp-cell-note">Unknown</div></td>
                  <td>2 / 2</td>
                  <td>1,070</td>
                  <td>$611</td>
                  <td>$866,666</td>
                  <td>&mdash;</td>
                  <td>$809.97</td>
                  <td>&mdash;</td>
                  <td>&mdash;</td>
                </tr>
                <tr>
                  <td><span class="comp-number comp-active">2</span></td>
                  <td>1883 Agnew Rd #311</td>
                  <td>2006<div class="comp-cell-note">Semi-updated</div></td>
                  <td>2 / 2</td>
                  <td>1,070</td>
                  <td>$434</td>
                  <td>$849,000</td>
                  <td>&mdash;</td>
                  <td>$793.46</td>
                  <td>&mdash;</td>
                  <td>72</td>
                </tr>
                <tr>
                  <td><span class="comp-number comp-active">3</span></td>
                  <td>2200 Agnew Rd #318</td>
                  <td>1982<div class="comp-cell-note">Semi-updated</div></td>
                  <td>2 / 2</td>
                  <td>1,195</td>
                  <td>$983</td>
                  <td>$838,000</td>
                  <td>&mdash;</td>
                  <td>$701.26</td>
                  <td>&mdash;</td>
                  <td>37</td>
                </tr>
                <tr>
                  <td><span class="comp-number comp-coming">4</span></td>
                  <td>1031 Clyde Ave #1804</td>
                  <td>1979<div class="comp-cell-note">Semi-updated</div></td>
                  <td>3 / 2</td>
                  <td>1,266</td>
                  <td>$550</td>
                  <td>$799,999</td>
                  <td>&mdash;</td>
                  <td>$631.91</td>
                  <td>&mdash;</td>
                  <td>&mdash;</td>
                </tr>
                <tr>
                  <td><span class="comp-number comp-active">5</span></td>
                  <td>1883 Agnew Rd #112</td>
                  <td>2006<div class="comp-cell-note">Semi-updated</div></td>
                  <td>2 / 2</td>
                  <td>1,152</td>
                  <td>$632</td>
                  <td>$799,000</td>
                  <td>&mdash;</td>
                  <td>$693.58</td>
                  <td>&mdash;</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td><span class="comp-number comp-coming">6</span></td>
                  <td>1883 Agnew Rd #218</td>
                  <td>2006<div class="comp-cell-note">Semi-updated</div></td>
                  <td>1 / 1</td>
                  <td>870</td>
                  <td>$425</td>
                  <td>$695,000</td>
                  <td>&mdash;</td>
                  <td>$798.85</td>
                  <td>&mdash;</td>
                  <td>&mdash;</td>
                </tr>
                <tr>
                  <td><span class="comp-number comp-coming">7</span></td>
                  <td>2200 Agnew Rd #109</td>
                  <td>1982<div class="comp-cell-note">Semi-updated</div></td>
                  <td>2 / 1</td>
                  <td>816</td>
                  <td>$898</td>
                  <td>$449,000</td>
                  <td>&mdash;</td>
                  <td>$550.25</td>
                  <td>&mdash;</td>
                  <td>&mdash;</td>
                </tr>
                <tr>
                  <td><span class="comp-number comp-sold">8</span></td>
                  <td>1883 Agnew Rd #367</td>
                  <td>2006<div class="comp-cell-note">Semi-updated</div></td>
                  <td>3 / 2</td>
                  <td>1,361</td>
                  <td>$588</td>
                  <td>$946,000</td>
                  <td>$935,000</td>
                  <td>$686.99</td>
                  <td>1/28/26</td>
                  <td>133</td>
                </tr>
                <tr>
                  <td><span class="comp-number comp-sold">9</span></td>
                  <td>3901 Lick Mill Blvd #116</td>
                  <td>2005<div class="comp-cell-note">Semi-updated</div></td>
                  <td>2 / 2</td>
                  <td>1,192</td>
                  <td>$612</td>
                  <td>$880,800</td>
                  <td>$900,000</td>
                  <td>$755.03</td>
                  <td>3/23/26</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td><span class="comp-number comp-sold">10</span></td>
                  <td>1883 Agnew Rd #325</td>
                  <td>2006<div class="comp-cell-note">Semi-updated</div></td>
                  <td>2 / 2</td>
                  <td>1,070</td>
                  <td>$550</td>
                  <td>$788,888</td>
                  <td>$790,000</td>
                  <td>$738.32</td>
                  <td>1/28/26</td>
                  <td>13</td>
                </tr>
                <tr>
                  <td><span class="comp-number comp-sold">11</span></td>
                  <td>3901 Lick Mill Blvd #434</td>
                  <td>2005<div class="comp-cell-note">Updated</div></td>
                  <td>2 / 1</td>
                  <td>908</td>
                  <td>$571</td>
                  <td>$648,888</td>
                  <td>$720,000</td>
                  <td>$792.95</td>
                  <td>3/2/26</td>
                  <td>9</td>
                </tr>
                <tr>
                  <td><span class="comp-number comp-sold">12</span></td>
                  <td>3901 Lick Mill Blvd #430</td>
                  <td>2005<div class="comp-cell-note">Updated</div></td>
                  <td>1 / 1</td>
                  <td>865</td>
                  <td>$566</td>
                  <td>$718,888</td>
                  <td>$700,000</td>
                  <td>$809.25</td>
                  <td>3/19/26</td>
                  <td>41</td>
                </tr>
                <tr>
                  <td><span class="comp-number comp-sold">13</span></td>
                  <td>3901 Lick Mill Blvd #312</td>
                  <td>2005<div class="comp-cell-note">Semi-updated</div></td>
                  <td>1 / 1</td>
                  <td>900</td>
                  <td>$567</td>
                  <td>$669,000</td>
                  <td>$660,000</td>
                  <td>$733.33</td>
                  <td>3/3/26</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td><span class="comp-number comp-sold">14</span></td>
                  <td>3901 Lick Mill Blvd #358</td>
                  <td>2005<div class="comp-cell-note">Updated</div></td>
                  <td>1 / 1</td>
                  <td>900</td>
                  <td>$572</td>
                  <td>$688,800</td>
                  <td>$656,688</td>
                  <td>$729.65</td>
                  <td>2/27/26</td>
                  <td>83</td>
                </tr>
                <tr>
                  <td><span class="comp-number comp-sold">15</span></td>
                  <td>2200 Agnew Rd #207</td>
                  <td>1982<div class="comp-cell-note">Semi-updated</div></td>
                  <td>1 / 1</td>
                  <td>816</td>
                  <td>$767</td>
                  <td>$449,900</td>
                  <td>$463,000</td>
                  <td>$567.40</td>
                  <td>1/26/26</td>
                  <td>14</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="comp-note">Source: all condo comp data is from MLS. The map image is the local condo sale comp graphic saved with this report.</div>
        </div>
      `,
      sources: [
        { label: "MLS condo comp link", url: "https://search.mlslistings.com/DE.asp?ID=DE-110058988797&L=1&eml=RGluZ3lpcm9uZ2R5ckBnbWFpbC5jb20=" },
        { label: "Condo sale comp Numbers file", url: "./sources-supporting-docs/Condo Sale Comps  .numbers" },
        { label: "Condo sale comp map image", url: "./sources-supporting-docs/Condo Sale Comp.png" }
      ]
    },
    {
      id: "apartment-rent-comps",
      label: "Rent Comparables",
      title: "Rent comparables",
      paragraphs: [
        "Loading rent comparable data."
      ],
      customHtml: "",
      bullets: [
        "Rent comparable data is summarized from the current Apartments.com comp set."
      ],
      sources: [
        { label: "Apartments.com comp sources", url: "https://www.apartments.com/" }
      ]
    },
    {
      id: "methodology-sources",
      label: "Methodology & Sources",
      title: "Sources",
      lede: "All sources used in this report, organized by section.",
      customHtml: `
        <div class="sources-index">

          <div class="sources-group-block">
            <h3 class="sources-group-title">Property overview</h3>
            <ul class="sources-group-list">
              <li><a href="./sources-supporting-docs/CompRedux-3055-PATRICK-HENRY-DR-SANTA-CLARA-CA-95054-2026-04-08.xlsx" target="_blank" rel="noopener">CompRedux workbook — 3055 Patrick Henry (April 8, 2026)</a></li>
              <li><a href="./sources-supporting-docs/Costar Reports/property-summary.pdf" target="_blank" rel="noopener">CoStar property summary PDF</a></li>
              <li><a href="./sources-supporting-docs/Costar Reports/property-sales.pdf" target="_blank" rel="noopener">CoStar property sales PDF</a></li>
            </ul>
          </div>

          <div class="sources-group-block">
            <h3 class="sources-group-title">Location overview</h3>
            <ul class="sources-group-list">
              <li><a href="./sources-supporting-docs/old-om-3055patrickhenry.pdf" target="_blank" rel="noopener">2023 Offering Memorandum (CBRE)</a></li>
              <li><a href="https://www.rivermarkvillage.com/" target="_blank" rel="noopener">Rivermark Village</a></li>
            </ul>
          </div>

          <div class="sources-group-block">
            <h3 class="sources-group-title">Zoning & policy</h3>
            <ul class="sources-group-list">
              <li><a href="https://www.santaclaraca.gov/our-city/departments-a-f/community-development/planning-division/specific-plans/patrick-henry-drive" target="_blank" rel="noopener">Patrick Henry Drive Specific Plan — City of Santa Clara</a></li>
              <li><a href="https://www.santaclaraca.gov/our-city/departments-g-z/public-works/engineering/land-property-development/patrick-henry-drive-specific-plan-infrastructure-impact-fee" target="_blank" rel="noopener">Patrick Henry Drive infrastructure impact fee page</a></li>
              <li><a href="https://www.santaclaraca.gov/our-city/departments-a-f/community-development/housing-community-services-division/affordable-housing-ordinance" target="_blank" rel="noopener">City of Santa Clara Affordable Housing Ordinance</a></li>
            </ul>
          </div>

          <div class="sources-group-block">
            <h3 class="sources-group-title">Risks & due diligence</h3>
            <ul class="sources-group-list">
              <li><a href="./sources-supporting-docs/CompRedux-04-12.pdf" target="_blank" rel="noopener">CompRedux report (April 12, 2026)</a></li>
              <li><a href="./sources-supporting-docs/TaxBill APN 104-04-136.pdf" target="_blank" rel="noopener">Santa Clara County secured tax bill — APN 104-04-136</a></li>
              <li><a href="https://www.conservation.ca.gov/cgs/sh/seismic-hazard-zones" target="_blank" rel="noopener">California Seismic Hazard Zones — CA Conservation</a></li>
            </ul>
          </div>

          <div class="sources-group-block">
            <h3 class="sources-group-title">Current use market</h3>
            <ul class="sources-group-list">
              <li><a href="./sources-supporting-docs/Costar Reports/property-analytics.pdf" target="_blank" rel="noopener">CoStar property analytics PDF</a></li>
              <li><a href="./sources-supporting-docs/Costar Reports/North Santa Clara-Industrial-Submarket-2026-04-08.pdf" target="_blank" rel="noopener">CoStar North Santa Clara Industrial Submarket report (April 8, 2026)</a></li>
            </ul>
          </div>

          <div class="sources-group-block">
            <h3 class="sources-group-title">Multifamily market</h3>
            <ul class="sources-group-list">
              <li><a href="./sources-supporting-docs/Costar Reports/Santa Clara-MultiFamily-Submarket-2026-04-12.pdf" target="_blank" rel="noopener">CoStar Santa Clara Multi-Family Submarket report (April 12, 2026)</a></li>
              <li><a href="https://www.cbre.com/insights/figures/bay-area-multifamily-figures-q4-2025" target="_blank" rel="noopener">CBRE Bay Area Multifamily Figures Q4 2025</a></li>
            </ul>
          </div>

          <div class="sources-group-block">
            <h3 class="sources-group-title">Nearby projects & comps</h3>
            <ul class="sources-group-list">
              <li><a href="https://www.citybiz.co/article/787736/berkadia-arranges-sale-of-residential-development-site-near-levis-stadium-in-santa-clara-california/" target="_blank" rel="noopener">Berkadia / citybiz — 3100-3118 Patrick Henry sale coverage</a></li>
              <li><a href="https://traded.co/deals/california/office/sale/3100-3118-patrick-henry-drive/" target="_blank" rel="noopener">Traded — 3100-3118 Patrick Henry sale summary</a></li>
              <li><a href="./sources-supporting-docs/Neighboring projects &amp; comps/3100-3118 Patrick Henry Dr.pdf" target="_blank" rel="noopener">3100-3118 Patrick Henry CoStar report</a></li>
              <li><a href="./sources-supporting-docs/Neighboring projects &amp; comps/Sale History/3100-3118 Patrick Henry Dr.xlsx" target="_blank" rel="noopener">CoStar sales history — 3100-3118 Patrick Henry Drive</a></li>
              <li><a href="https://www.santaclaraca.gov/Home/Components/BusinessDirectory/BusinessDirectory/493/2495?npage=3" target="_blank" rel="noopener">3000 Patrick Henry — City of Santa Clara project page</a></li>
              <li><a href="./sources-supporting-docs/Neighboring projects &amp; comps/3000-3030 Patrick Henry Dr.pdf" target="_blank" rel="noopener">3000 Patrick Henry CoStar report</a></li>
              <li><a href="./sources-supporting-docs/Neighboring projects &amp; comps/Sale History/3000 Patrick Henry Dr.xlsx" target="_blank" rel="noopener">CoStar sales history — 3000 Patrick Henry Drive</a></li>
              <li><a href="https://www.santaclaraca.gov/Home/Components/BusinessDirectory/BusinessDirectory/513/2495?fsiteid=1&amp;npage=4" target="_blank" rel="noopener">4590 Patrick Henry — City of Santa Clara project page</a></li>
              <li><a href="./sources-supporting-docs/Neighboring projects &amp; comps/4590 Patrick Henry Dr - Proposed.pdf" target="_blank" rel="noopener">4590 Patrick Henry proposed CoStar report</a></li>
              <li><a href="./sources-supporting-docs/Neighboring projects &amp; comps/4590 Patrick Henry Dr - old property.pdf" target="_blank" rel="noopener">4590 Patrick Henry prior property CoStar report</a></li>
              <li><a href="./sources-supporting-docs/Neighboring projects &amp; comps/Sale History/4590 Patrick Henry Dr.xlsx" target="_blank" rel="noopener">CoStar sales history — 4590 Patrick Henry Drive</a></li>
              <li><a href="https://www.santaclaraca.gov/Home/Components/BusinessDirectory/BusinessDirectory/519/2571?npage=2" target="_blank" rel="noopener">2518 Mission College — City of Santa Clara project page</a></li>
              <li><a href="./sources-supporting-docs/Neighboring projects &amp; comps/2518 Mission College Blvd - proposed.pdf" target="_blank" rel="noopener">2518 Mission College proposed CoStar report</a></li>
              <li><a href="./sources-supporting-docs/Neighboring projects &amp; comps/2518 Mission College Blvd - old property.pdf" target="_blank" rel="noopener">2518 Mission College prior property CoStar report</a></li>
              <li><a href="./sources-supporting-docs/Neighboring projects &amp; comps/Sale History/2518 Mission College Blvd.xlsx" target="_blank" rel="noopener">CoStar sales history — 2518 Mission College Boulevard</a></li>
              <li><a href="./sources-supporting-docs/Neighboring projects &amp; comps/Sale History/3055-patrick-henry.xlsx" target="_blank" rel="noopener">CoStar sales history — 3055 Patrick Henry Drive</a></li>
              <li><a href="https://www.santaclaraca.gov/business-development/related-santa-clara" target="_blank" rel="noopener">Related Santa Clara — City of Santa Clara</a></li>
              <li><a href="https://www.santaclaraca.gov/Home/Components/BusinessDirectory/BusinessDirectory/245/2495?alpha=K" target="_blank" rel="noopener">Mission Point by Kylli — City of Santa Clara</a></li>
              <li><a href="./sources-supporting-docs/Neighboring projects &amp; comps/costar 30mi radius flex property comps.xlsx" target="_blank" rel="noopener">CoStar 10-mile radius flex property comps</a></li>
            </ul>
          </div>

          <div class="sources-group-block">
            <h3 class="sources-group-title">Tax-assessed value analysis</h3>
            <ul class="sources-group-list">
              <li><a href="./sources-supporting-docs/Tax info/CompRedux/3055-PATRICK-HENRY-DR-SANTA-CLARA-950541815-2026-04-14.xlsx" target="_blank" rel="noopener">CompRedux — 3055 Patrick Henry assessed value (April 14, 2026)</a></li>
              <li><a href="./sources-supporting-docs/Tax info/CompRedux/3000-PATRICK-HENRY-DR-SANTA-CLARA-950541814-2026-04-14.xlsx" target="_blank" rel="noopener">CompRedux — 3000 Patrick Henry assessed value (April 14, 2026)</a></li>
              <li><a href="./sources-supporting-docs/Tax info/CompRedux/3100-PATRICK-HENRY-DR-SANTA-CLARA-950541814-2026-04-14.xlsx" target="_blank" rel="noopener">CompRedux — 3100-3118 Patrick Henry assessed value (April 14, 2026)</a></li>
              <li><a href="./sources-supporting-docs/Tax info/CompRedux/4590-PATRICK-HENRY-DR-SANTA-CLARA-950541817-2026-04-14.xlsx" target="_blank" rel="noopener">CompRedux — 4590 Patrick Henry assessed value (April 14, 2026)</a></li>
              <li><a href="./sources-supporting-docs/Tax info/CompRedux/2518-Misson-college-blvd.xlsx" target="_blank" rel="noopener">CompRedux — 2518 Mission College assessed value</a></li>
            </ul>
          </div>

          <div class="sources-group-block">
            <h3 class="sources-group-title">Condo sale comps</h3>
            <ul class="sources-group-list">
              <li><a href="https://search.mlslistings.com/DE.asp?ID=DE-110058988797&amp;L=1&amp;eml=RGluZ3lpcm9uZ2R5ckBnbWFpbC5jb20=" target="_blank" rel="noopener">MLS condo comp listings (ZIP 95054, since Jan 1, 2026)</a></li>
              <li><a href="./sources-supporting-docs/Condo Sale Comps  .numbers" target="_blank" rel="noopener">Condo sale comp data file (Numbers)</a></li>
            </ul>
          </div>

          <div class="sources-group-block">
            <h3 class="sources-group-title">Rent comparables</h3>
            <ul class="sources-group-list">
              <li><a href="https://www.apartments.com/" target="_blank" rel="noopener">Apartments.com</a></li>
            </ul>
          </div>

          <div class="sources-group-block">
            <h3 class="sources-group-title">Development vision precedents</h3>
            <ul class="sources-group-list">
              <li><a href="https://www.housingwire.com/articles/church-land-housing-laws/" target="_blank" rel="noopener">HousingWire — Faith-owned land housing policy</a></li>
              <li><a href="https://www.ocregister.com/2026/01/22/laguna-beach-church-revamps-affordable-housing-project/" target="_blank" rel="noopener">Orange County Register — Laguna Beach church revamps affordable housing project</a></li>
              <li><a href="https://www.latimes.com/socal/daily-pilot/news/story/2026-01-23/laguna-beach-church-reworks-scales-down-affordable-housing-project" target="_blank" rel="noopener">Los Angeles Times / Daily Pilot — Laguna Beach church reworks, scales down affordable housing project</a></li>
            </ul>
          </div>

        </div>
      `,
      sources: []
    }
  ]
};
