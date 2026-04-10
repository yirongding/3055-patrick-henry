window.REPORT_DATA = {
  meta: {
    reportType: "Property reference report",
    title: "3055 Patrick Henry Drive, Santa Clara, CA",
    summary:
      "Reference report for 3055 Patrick Henry Drive with property data, planning context, neighboring projects, market references, and source links by section.",
    pills: [
      "Date: April 10, 2026",
      "Format: Interactive property report",
      "Status: Current draft"
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
          caption: "Urban design framework from the Patrick Henry Drive Specific Plan.",
          source: "Patrick Henry Drive Specific Plan"
        }
      ],
      table: {
        columns: ["Planning item", "Current read", "Notes"],
        rows: [
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
        "Current file materials identify entitlement, environmental, geotechnical, affordability, and data-verification items that remain open."
      ],
      table: {
        columns: ["Risk / item", "What is known now", "Required follow-up"],
        rows: [
          ["Entitlement risk", "Site is unentitled for residential development in the current file set.", "Land-use counsel review plus city staff confirmation of parcel-specific path."],
          ["Yield risk", "Unit assumptions vary across concept materials and gross-site math.", "Massing test with parking, affordability, and net-site assumptions."],
          ["Occupancy / carry risk", "CoStar shows both 0.0% vacancy and active lease marketing signals.", "Current rent roll, tenant stack, and leasing status."],
          ["Environmental risk", "Liquefaction zone noted; flood risk appears low.", "Phase I ESA and, if indicated, Phase II follow-up."],
          ["Geotechnical risk", "No current foundation-cost study in the file set.", "Geotechnical investigation and early structural assumptions."],
          ["Fee / affordability risk", "Affordable housing and infrastructure obligations will apply.", "Impact-fee schedule, affordability sensitivity, and legal compliance review."],
          ["Height / airport risk", "Plan envelope is broad but may not equal executable height.", "FAA / aeronautical review if taller scenarios are studied."],
          ["Subdivision / parcel strategy", "Parcel split is only a strategic concept today.", "Title, survey, and subdivision feasibility review."],
          ["Lender diligence package", "Not assembled in current draft.", "ALTA, survey, PCA, ESA, seismic, zoning, and title package." ]
        ]
      },
      bullets: [
        "Do not collapse building-size, parking, or occupancy conflicts into a single final figure without backup.",
        "The disclaimer remains visible at the top of the report."
      ],
      sources: [
        { label: "CompRedux workbook", url: "./sources-supporting-docs/CompRedux-3055-PATRICK-HENRY-DR-SANTA-CLARA-CA-95054-2026-04-08.xlsx" },
        { label: "CoStar property summary PDF", url: "./sources-supporting-docs/Costar Reports/property-summary.pdf" },
        { label: "Patrick Henry Drive Specific Plan", url: "https://www.santaclaraca.gov/our-city/departments-a-f/community-development/planning-division/specific-plans/patrick-henry-drive" }
      ]
    },
    {
      id: "current-use-market",
      label: "Current Use Market (Submarket)",
      title: "Current use market (submarket)",
      paragraphs: [
        "Available CoStar materials include North Santa Clara flex-market references alongside current subject property figures."
      ],
      table: {
        columns: ["Metric", "North Santa Clara flex", "Subject", "Notes"],
        rows: [
          ["Vacancy", "9.0%", "0.0% shown in CoStar summary", "Occupancy status remains unresolved."],
          ["Asking rent", "$26.60/SF", "$18.77/SF", "Current asking figures from cited materials."],
          ["12-month net absorption", "198K SF", "N/A", "Submarket figure only."],
          ["12-month leased SF", "528K SF", "N/A", "Submarket figure only."],
          ["12-month deliveries", "255K SF", "N/A", "Submarket figure only."],
          ["12-month sales volume", "$136M", "N/A", "Submarket figure only."],
          ["Sale pricing", "$392/SF", "N/A", "Submarket figure only."],
          ["Cap rate", "6.5%", "N/A", "Submarket figure only." ]
        ]
      },
      notes: [
        "Subject vacancy and lease status should be verified directly."
      ],
      sources: [
        { label: "CoStar property analytics PDF", url: "./sources-supporting-docs/Costar Reports/property-analytics.pdf" },
        { label: "CoStar property summary PDF", url: "./sources-supporting-docs/Costar Reports/property-summary.pdf" }
      ]
    },
    {
      id: "multifamily-market",
      label: "Multifamily Market (Metro)",
      title: "Multifamily market (metro)",
      paragraphs: [
        "Current published summaries include metro-level rent, vacancy, absorption, deliveries, and sales-volume references."
      ],
      table: {
        columns: ["Metric", "Current read", "Date", "Notes"],
        rows: [
          ["San Jose asking rent", "$3,297", "Yardi Matrix March 24, 2026 report (through January)", "Current metro pricing reference."],
          ["San Jose rent trend", "-0.1% on T3 basis", "Yardi Matrix March 24, 2026 report", "Trailing-three-month rent trend."],
          ["San Jose investment transactions", "$2.0B last year", "Yardi Matrix March 24, 2026 report", "Published metro transaction figure."],
          ["Bay Area vacancy", "4.2%", "CBRE Q4 2025", "Published Bay Area figure."],
          ["Bay Area absorption", "11,316 units", "CBRE Q4 2025", "Published Bay Area figure."],
          ["Bay Area deliveries", "8,371 units", "CBRE Q4 2025", "Published Bay Area figure."],
          ["Bay Area sales volume", "More than $8B", "CBRE Q4 2025", "Published Bay Area figure."],
          ["San Jose 2025 sales volume", "$2.76B", "Local CoStar capital-markets workbook", "Local workbook figure."],
          ["San Jose 2025 price / unit", "$489,183", "Local CoStar capital-markets workbook", "Local workbook figure."],
          ["San Jose 2026 Q1 price / unit", "$502,267", "Local CoStar capital-markets workbook", "Local workbook figure." ]
        ]
      },
      notes: [
        "This section uses metro and Bay Area references rather than a Santa Clara-only apartment submarket report.",
        "If the report needs a Santa Clara-only apartment market page, a fresher local submarket report should still be added."
      ],
      sources: [
        { label: "Yardi Matrix San Jose report landing page", url: "https://www.yardimatrix.com/publications/download/file/8529-MatrixMultifamilySanJoseReport-March2026" },
        { label: "CBRE Bay Area Multifamily Figures Q4 2025", url: "https://www.cbre.com/insights/figures/bay-area-multifamily-figures-q4-2025" },
        { label: "CoStar capital markets workbook", url: "./sources-supporting-docs/Costar Reports/Capital Market Data Sheet - San Jose - CA.xlsx" }
      ]
    },
    {
      id: "investment-strategy",
      label: "Scenario References",
      title: "Scenario references",
      paragraphs: [
        "The current materials reference multiple site scenarios, including continued operation, interim repositioning, redevelopment, parcel reconfiguration, and mixed civic-use concepts."
      ],
      table: {
        columns: ["Scenario", "Description", "Current reference", "Current limitation"],
        rows: [
          ["Hold", "Operate the existing flex asset largely as-is.", "Current building and tenancy information are incomplete.", "Occupancy and lease status remain unresolved."],
          ["Reposition", "Treat the site as covered land while retaining interim use.", "Current property data and planning context are available.", "Still depends on future entitlement and carry assumptions."],
          ["Redevelop", "Pursue residential or mixed-use consistent with corridor planning context.", "Specific plan references and corridor precedents are included in this report.", "Requires entitlement, fees, affordability, parking, and execution review."],
          ["Parcel split / phased control", "Separate future development pads, retained improvements, or community-serving components.", "Included as a scenario reference only.", "No parcel-specific filing verified yet."],
          ["Church / civic partnership structure", "Blend housing with a faith or community-serving component.", "Included as a precedent reference only.", "Not a verified characteristic of the current site." ]
        ]
      },
      bullets: [
        "Parcel split and civic-use structures are scenario references only and are not verified filings for 3055 Patrick Henry."
      ],
      sources: [
        { label: "CoStar property summary PDF", url: "./sources-supporting-docs/Costar Reports/property-summary.pdf" },
        { label: "Patrick Henry Drive Specific Plan", url: "https://www.santaclaraca.gov/our-city/departments-a-f/community-development/planning-division/specific-plans/patrick-henry-drive" },
        { label: "Berkadia / citybiz coverage of 3100-3118 Patrick Henry sale", url: "https://www.citybiz.co/article/787736/berkadia-arranges-sale-of-residential-development-site-near-levis-stadium-in-santa-clara-california/" },
        { label: "Los Angeles Times church-housing precedent file", url: "./sources-supporting-docs/Development Vision Procedents/Laguna Beach church reworks, scales down affordable housing project - Los Angeles Times.html" },
        { label: "HousingWire faith-land policy file", url: "./sources-supporting-docs/Development Vision Procedents/States bet on by-right housing projects on church land.html" }
      ]
    },
    {
      id: "development-vision-precedents",
      label: "Development Vision Precedents",
      title: "Development vision precedents",
      lede:
        "This section groups corridor residential precedents and faith/civic land examples referenced in the source materials.",
      paragraphs: [
        "The church and civic examples are precedent references and not direct scale comparables for 3055 Patrick Henry."
      ],
      cards: [
        { key: "Current Laguna program", value: "29 units", supporting: "28 affordable apartments plus one manager unit." },
        { key: "Earlier Laguna concepts", value: "72 / 44 units", supporting: "The proposal was previously reported at 72 units and later 44 units." },
        { key: "Parking", value: "41 spaces", supporting: "One subterranean level; about 30 resident spaces plus public and church use." },
        { key: "State policy examples", value: "CA / FL / VA", supporting: "HousingWire identifies California, Florida, and Virginia as active faith-land housing examples." }
      ],
      notes: [
        "Laguna Beach Neighborhood Congregational Church was reported at 72 units, then 44 units, and later 29 units."
      ],
      sources: [
        { label: "Los Angeles Times church-housing precedent file", url: "./sources-supporting-docs/Development Vision Procedents/Laguna Beach church reworks, scales down affordable housing project - Los Angeles Times.html" },
        { label: "Orange County Register church-housing precedent file", url: "./sources-supporting-docs/Development Vision Procedents/Laguna Beach church revamps affordable housing project – Orange County Register.html" },
        { label: "HousingWire faith-land policy file", url: "./sources-supporting-docs/Development Vision Procedents/States bet on by-right housing projects on church land.html" }
      ]
    },
    {
      id: "neighboring-projects",
      label: "Neighboring Projects",
      title: "Neighboring projects",
      lede:
        "Nearby city project pages and transaction references show residential and mixed-use activity in the broader corridor.",
      table: {
        columns: ["Project", "Program", "Status", "Notes"],
        rows: [
          ["3100-3118 Patrick Henry Drive", "$12.5M land sale on roughly 2.5-2.52 acres", "Closed Dec. 18, 2025", "Nearby transaction reference."],
          ["3000 Patrick Henry Drive", "307-unit mixed-use project plus 5,000 SF arts center, art park, and 4,000 SF retail", "Approved", "City project-page reference."],
          ["4590 Patrick Henry Drive", "284-unit multifamily project plus public park parcel", "Approved", "City project-page reference."],
          ["2518 Mission College Blvd / Santa Clara Park", "1,792 apartment units plus retail and structured parking", "Approved", "City project-page reference."],
          ["Related Santa Clara", "1,680 residential units within a 9.2M SF mixed-use district", "Under construction / phased", "City project-page reference."],
          ["Mission Point", "Up to 2,000 new homes plus office / R&D and retail", "District-scale plan", "City project-page reference." ]
        ]
      },
      notes: [
        "The corrected corridor precedent set is 3000 Patrick Henry at 307 units and 4590 Patrick Henry at 284 units.",
        "The 3100-3118 sale is included as a nearby transaction reference."
      ],
      sources: [
        { label: "Berkadia / citybiz coverage of 3100-3118 Patrick Henry sale", url: "https://www.citybiz.co/article/787736/berkadia-arranges-sale-of-residential-development-site-near-levis-stadium-in-santa-clara-california/" },
        { label: "Traded sale summary for 3100-3118 Patrick Henry", url: "https://traded.co/deals/california/office/sale/3100-3118-patrick-henry-drive/" },
        { label: "3000 Patrick Henry city project page", url: "https://www.santaclaraca.gov/Home/Components/BusinessDirectory/BusinessDirectory/493/2495?npage=3" },
        { label: "4590 Patrick Henry city project page", url: "https://www.santaclaraca.gov/Home/Components/BusinessDirectory/BusinessDirectory/513/2495" },
        { label: "2518 Mission College city project page", url: "https://www.santaclaraca.gov/Home/Components/BusinessDirectory/BusinessDirectory/519/2571/" },
        { label: "Related Santa Clara", url: "https://www.santaclaraca.gov/business-development/related-santa-clara" },
        { label: "Mission Point", url: "https://www.santaclaraca.gov/business-development/mission-point" }
      ]
    },
    {
      id: "tax-assessed-value-analysis",
      label: "Tax-Assessed Value Analysis",
      title: "Tax-assessed value analysis",
      paragraphs: [
        "The local tax materials show annual assessed land value, improvement value, total assessed value, and tax amount by year."
      ],
      cards: [
        { key: "2025-26 assessed value", value: "$32.77M", supporting: "Gross assessed value." },
        { key: "2025-26 tax bill", value: "$390,442.80", supporting: "Annual secured tax amount in the local tax materials." },
        { key: "Land assessment", value: "$16.50M", supporting: "2025-26 assessed land component." },
        { key: "Improvement assessment", value: "$16.27M", supporting: "2025-26 assessed improvement component." }
      ],
      table: {
        columns: ["Tax year", "Land", "Improvements", "Total assessed", "Tax amount"],
        rows: [
          ["2025-2026", "$16,498,524", "$16,270,959", "$32,769,483", "$390,442.80"],
          ["2024-2025", "$16,175,024", "$15,951,921", "$32,126,945", "$375,925.97"],
          ["2023-2024", "$15,857,867", "$15,639,139", "$31,497,006", "$375,316.34"],
          ["2022-2023", "$15,546,929", "$15,332,490", "$30,879,419", "$365,766.90"],
          ["2021-2022", "$15,242,088", "$15,031,853", "$30,273,941", "$364,348.03"],
          ["2020-2021", "$15,085,800", "$14,877,720", "$29,963,520", "$357,720.22"],
          ["2019-2020", "$13,954,885", "$6,208,066", "$20,162,951", "$246,058.31" ]
        ]
      },
      sources: [
        { label: "CompRedux workbook", url: "./sources-supporting-docs/CompRedux-3055-PATRICK-HENRY-DR-SANTA-CLARA-CA-95054-2026-04-08.xlsx" },
        { label: "Tax bill PDF", url: "./sources-supporting-docs/TaxBill APN 104-04-136.pdf" },
        { label: "CoStar property summary PDF", url: "./sources-supporting-docs/Costar Reports/property-summary.pdf" }
      ]
    },
    {
      id: "condo-sale-comps",
      label: "Condo Sale Comps",
      title: "Condo sale comps",
      paragraphs: [
        "This section lists nearby North Santa Clara / Rivermark-area condo closed sales shown in the cited sources."
      ],
      table: {
        columns: ["Comp", "Type", "Size", "Sale price", "Price / SF", "Sale date", "Notes"],
        rows: [
          ["1883 Agnew Rd #426", "2 bed / 2 bath condo", "1,148 SF", "$940,000", "$819/SF", "Aug. 29, 2025", "Closed-sale reference."],
          ["1883 Agnew Rd #104", "2 bed / 2 bath condo", "1,148 SF", "$920,000", "~$801/SF", "Nov. 14, 2025", "Closed-sale reference."],
          ["3901 Lick Mill Blvd #165", "2 bed / 2.5 bath condo", "1,328 SF", "$1,130,000", "$851/SF", "Oct. 24, 2025", "Closed-sale reference."]
        ]
      },
      notes: [
        "The 1883 Agnew #104 price per square foot is an implied figure from the reported sale price and reported unit size."
      ],
      sources: [
        { label: "1883 Agnew Rd #426 on Redfin", url: "https://www.redfin.com/CA/Santa-Clara/1883-Agnew-Rd-95054/unit-426/home/12179352" },
        { label: "1883 Agnew Rd #104 on Zillow", url: "https://www.zillow.com/homedetails/1883-Agnew-Rd-UNIT-104-Santa-Clara-CA-95054/79841975_zpid/" },
        { label: "3901 Lick Mill Blvd #165 on Redfin", url: "https://www.redfin.com/CA/Santa-Clara/3901-Lick-Mill-Blvd-95054/unit-165/home/12188361" }
      ]
    },
    {
      id: "apartment-rent-comps",
      label: "Apartment Rent Comps",
      title: "Apartment rent comps",
      paragraphs: [
        "This section lists current asking-rent references from nearby apartment listings."
      ],
      table: {
        columns: ["Comp", "Product", "Current asking range", "Notes", "Source"],
        rows: [
          ["Santa Clara Square Apartment Homes", "Institutional multifamily", "$3,645+/mo", "Listing range shifts by unit type and availability.", "Apartments.com"],
          ["The Lafayette", "Multifamily", "$3,405-$6,405/mo", "Current asking-range reference.", "Apartments.com"],
          ["North Park Apartment Homes", "Large nearby North San Jose community", "Starting at $2,710/mo", "Current asking-range reference.", "ForRent"]
        ]
      },
      bullets: [
        "These are asking-rent snapshots, not effective rents.",
        "Concessions and unit-level mix are not shown here.",
        "The Clara rent data was retained in the prior draft but removed here because I could not keep that exact current range supported cleanly enough in this revision."
      ],
      sources: [
        { label: "Santa Clara Square listing page", url: "https://www.apartments.com/es/santa-clara-square-apartment-homes-santa-clara-ca/rqgtnx3/" },
        { label: "The Lafayette listing page", url: "https://www.apartments.com/es/the-lafayette-santa-clara-ca/c3enymd/" },
        { label: "North Park Apartment Homes listing page", url: "https://www.forrent.com/ca/san-jose/north-park-apartment-homes/vsbvpbe" }
      ]
    },
    {
      id: "methodology-sources",
      label: "Methodology & Sources",
      title: "Methodology and sources",
      bullets: [
        "This draft is organized into 14 sections with source references listed on each corresponding page.",
        "Property facts, ownership, tax, and current asset context were cross-checked against the local workbook and local CoStar exports dated April 8, 2026.",
        "Planning and project precedent sections prioritize City of Santa Clara project pages and adopted-plan materials.",
        "Current market sections use the most recent readily available Yardi Matrix, CBRE, and local CoStar references reviewed for this update.",
        "Where sources conflicted, the conflict is shown directly instead of being averaged away."
      ],
      table: {
        columns: ["Open item", "Notes", "Current status"],
        rows: [
          ["Final building size", "Source conflict between 68,075 SF and 70,520 SF.", "Open: 68,075 SF vs. 70,520 SF."],
          ["Current occupancy and rent roll", "Current occupancy and lease information remain incomplete.", "Open."],
          ["Final parking count", "Source conflict between 140 and 240 stalls.", "Open: 140 vs. 240."],
          ["Parcel-specific entitlement path", "Parcel-specific city and counsel confirmation still needed.", "Open for final city / counsel confirmation."],
          ["Additional land-sale comp set", "No expanded land-sale comp set included yet.", "Open."],
          ["Standardized distance matrix", "Distance matrix not yet added.", "Open."],
          ["Current Santa Clara apartment submarket report", "Santa Clara-specific apartment submarket report not yet added.", "Recommended."],
          ["FAA / height confirmation", "No project-specific FAA / height confirmation included.", "Recommended." ]
        ]
      },
      notes: [
        "Run `node scripts/audit-template.js` before sharing to catch accidental carryover language.",
        "The nearby 3100-3118 Patrick Henry land sale is included under neighboring projects and scenario references."
      ],
      sources: [
        { label: "CompRedux workbook", url: "./sources-supporting-docs/CompRedux-3055-PATRICK-HENRY-DR-SANTA-CLARA-CA-95054-2026-04-08.xlsx" },
        { label: "CoStar property summary PDF", url: "./sources-supporting-docs/Costar Reports/property-summary.pdf" },
        { label: "CoStar property analytics PDF", url: "./sources-supporting-docs/Costar Reports/property-analytics.pdf" },
        { label: "CoStar capital markets workbook", url: "./sources-supporting-docs/Costar Reports/Capital Market Data Sheet - San Jose - CA.xlsx" },
        { label: "Patrick Henry Drive Specific Plan", url: "https://www.santaclaraca.gov/our-city/departments-a-f/community-development/planning-division/specific-plans/patrick-henry-drive" }
      ]
    }
  ]
};
