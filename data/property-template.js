window.REPORT_DATA = {
  meta: {
    reportType: "Residential redevelopment positioning report",
    title: "3055 Patrick Henry Drive, Santa Clara, CA",
    summary:
      "Investor-oriented view of 3055 Patrick Henry Drive: current flex asset facts, ownership and tax basis, specific-plan context, nearby residential precedent, and the market data most relevant to a North Santa Clara residential redevelopment thesis.",
    pills: [
      "Date: April 8, 2026",
      "Format: Interactive investor report",
      "Status: Unentitled residential redevelopment thesis"
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
      id: "overview",
      label: "Overview",
      title: "Executive summary",
      lede:
        "3055 Patrick Henry Drive reads more convincingly today as covered land in a city-backed transition corridor than as a long-duration legacy flex hold. The parcel combines a 3.82-acre land position, a modestly improved 1981 two-story flex building, and placement within the Patrick Henry Drive planning area, where current parcel data now points to a UC / specific-plan framework rather than a pure legacy industrial story.",
      cards: [
        { key: "Lot size", value: "3.82 AC", supporting: "166,399 SF land area; APN 104-04-136." },
        { key: "Building size", value: "68,075-70,520 SF", supporting: "Public sources conflict; both figures are surfaced for diligence." },
        { key: "Last sale", value: "$19.0M", supporting: "Closed April 8, 2016." },
        { key: "Current owner", value: "3055 Patrick Henry Development, LLC", supporting: "CoStar also ties true owner to Z & L Properties." }
      ],
      charts: [
        {
          title: "Residential yield framing",
          subtitle: "Use as scenario language, not as an entitled program. Current sources conflict.",
          series: [
            { label: "User concept low", value: 345, display: "345 units", supporting: "120 du/ac on 3.82 acres." },
            { label: "User concept high", value: 430, display: "430 units", supporting: "150 du/ac on 3.82 acres." },
            { label: "Specific plan low", value: 458, display: "458 units", supporting: "120 du/ac applied to 3.82 acres." },
            { label: "Specific plan high", value: 955, display: "955 units", supporting: "250 du/ac theoretical ceiling; not a project approval." }
          ]
        }
      ],
      bullets: [
        "Primary investor takeaway: large-site optionality inside an adopted policy corridor matters more here than current flex income alone.",
        "The report should be data-forward and explicit that building size, parking count, occupancy, and final residential yield are not fully aligned across sources.",
        "The residential story is supported by corridor precedent, but not yet de-risked by entitlement."
      ],
      sources: [
        { label: "CoStar summary PDF", url: "./Costar Reports/summary.pdf" },
        { label: "CompRedux workbook", url: "./CompRedux-3055-PATRICK-HENRY-DR-SANTA-CLARA-CA-95054-2026-04-08.xlsx" },
        { label: "City of Santa Clara Patrick Henry Drive page", url: "https://www.santaclaraca.gov/our-city/departments-a-f/community-development/planning-division/specific-plans/patrick-henry-drive" }
      ]
    },
    {
      id: "property",
      label: "Property positioning",
      title: "Property positioning",
      paragraphs: [
        "The existing building is older Class B / 3 Star flex-light manufacturing product in Marriott Business Park. That matters because the current improvement intensity is low relative to the scale implied by the corridor's residential planning framework and nearby mixed-use precedent.",
        "For an investor, the more useful framing is transitional covered land. The asset may offer interim utility, but the pricing story should center on site scale, corridor positioning, and the probability-adjusted value of future residential redevelopment rather than on long-term industrial hold economics."
      ],
      table: {
        columns: ["Metric", "Value", "Source notes"],
        rows: [
          ["Address", "3055 Patrick Henry Dr, Santa Clara, CA 95054", "Verified across workbook and CoStar."],
          ["APN", "104-04-136", "Verified."],
          ["Existing use", "Flex / light manufacturing / technological industry", "Terminology varies by source; use flex / light manufacturing in marketing copy."],
          ["Building area", "70,520 SF vs. 68,075 SF", "CoStar/marketing vs. ATTOM-derived workbook conflict."],
          ["Lot size", "166,399 SF / 3.82 AC", "Verified."],
          ["Year built", "1981", "Verified."],
          ["Stories", "2", "Verified."],
          ["Parking", "3.40/1,000 SF; 140 surface stalls shown in CoStar", "Conflicts with user-provided 240 stalls."],
          ["Recorded owner", "3055 Patrick Henry Development, LLC", "Verified in CoStar and workbook."],
          ["True owner", "Z & L Properties", "Shown in CoStar."],
          ["Property vacancy", "0.0%", "CoStar summary."],
          ["Active lease signal", "72,000 SF asking at $21.00 NNN", "CoStar summary creates occupancy conflict that should be called out."],
          ["Last sale", "$19,000,000 on Apr. 8, 2016", "Verified."],
          ["Construction", "Tilt-up / reinforced concrete", "Workbook + CoStar."],
          ["Clear height", "16 feet", "CoStar."],
          ["Power", "4,000a / 220-480v 3p 3w heavy", "CoStar."],
          ["Flood / seismic", "Minimal flood hazard; liquefaction zone", "Workbook + CoStar."]
        ]
      },
      notes: [
        "Do not present occupancy as fully resolved. CoStar shows both 0.0% vacancy and an asking listing reference.",
        "Do not collapse the building-size conflict. Present it as a diligence item until title, OM, or county records settle it."
      ],
      sources: [
        { label: "CoStar summary PDF", url: "./Costar Reports/summary.pdf" },
        { label: "CoStar sales PDF", url: "./Costar Reports/Sales.pdf" },
        { label: "CompRedux workbook", url: "./CompRedux-3055-PATRICK-HENRY-DR-SANTA-CLARA-CA-95054-2026-04-08.xlsx" },
        { label: "SVBJ sale reference", url: "https://www.bizjournals.com/sanjose/news/2016/04/11/hudson-sells-santa-clara-office-building-to-mixed.html" }
      ]
    },
    {
      id: "why",
      label: "Why this location works",
      title: "Why this location works for residential",
      paragraphs: [
        "This is fundamentally a jobs-and-access location case. The parcel sits inside North Santa Clara's employment belt near Mission College, Intel, Applied Materials, Levi's Stadium, and San Jose International Airport, which is the type of geography where the city's housing-supply rationale is most credible.",
        "For investors, the district matters more than any single amenity. The surrounding pattern is older office, R&D, and flex land transitioning toward larger mixed-use and residential formats, which is exactly the backdrop that makes a redevelopment thesis underwriteable."
      ],
      table: {
        columns: ["Anchor", "Distance / access", "Why it matters", "Source status"],
        rows: [
          ["Mission College", "Approx. 0.6 miles", "Education, workforce, and neighborhood demand driver.", "Verified via marketing materials."],
          ["Santa Clara University", "Approx. 5 miles", "Broader academic and workforce relevance.", "Verified via marketing materials."],
          ["San Jose International Airport", "4.7 miles / 9 min", "Regional access and employer connectivity.", "Verified in CoStar."],
          ["Intel Mission College campus area", "Nearby North Santa Clara", "Major employer concentration.", "Verified location relevance."],
          ["Applied Materials", "Nearby North Santa Clara", "Major employer concentration.", "Verified location relevance."],
          ["Levi's Stadium district", "Nearby", "District recognition and placemaking anchor.", "Verified location relevance."],
          ["Apple / Google / Meta", "TBD standardized matrix", "Important employer story but final drive times should use one mapping methodology.", "User framing only until mapped."]
        ]
      },
      charts: [
        {
          title: "Immediate area density of demand",
          subtitle: "CoStar demographic rings around the subject.",
          series: [
            { label: "1-mile population", value: 9635, display: "9,635" },
            { label: "1-mile daytime employees", value: 23129, display: "23,129" },
            { label: "3-mile population", value: 149548, display: "149,548" },
            { label: "3-mile daytime employees", value: 139198, display: "139,198" }
          ]
        }
      ],
      sources: [
        { label: "CoStar summary PDF", url: "./Costar Reports/summary.pdf" },
        { label: "Northmarq site page", url: "https://www.northmarq.com/3055-patrick-henry-drive-santa-clara-ca/" }
      ]
    },
    {
      id: "zoning",
      label: "Zoning & policy",
      title: "Zoning & policy alignment",
      paragraphs: [
        "Current parcel-level data is more supportive than the initial kickoff notes alone. The local workbook now tags the site as UC with Patrick Henry Drive as the applicable specific plan, which is a more advanced policy posture than merely saying the site sits near a future-planning area.",
        "What remains unresolved is not whether the corridor supports dense housing in principle, but exactly how much density and what entitlement path would apply to this parcel today. That distinction matters because investor yield assumptions will move much faster than the city's final project approvals."
      ],
      table: {
        columns: ["Planning item", "Current read", "Investor implication"],
        rows: [
          ["Zone designation", "UC", "Current parcel data suggests the site is already mapped into the corridor's updated framework."],
          ["Specific plan", "Patrick Henry Drive", "Verified in workbook."],
          ["Plan area size", "Approx. 74 acres", "Large district transition, not a one-off rezoning pitch."],
          ["Urban Center Residential density", "120-250 du/ac", "Supports high-density underwriting scenarios; not the same as approved yield."],
          ["Height", "5 stories / 60 feet minimum to 25 stories / 300 feet maximum", "Very wide envelope; site-specific executable height still needs confirmation."],
          ["Setbacks", "0 feet minimum / 15 feet maximum", "Urban form supports compact development pattern."],
          ["Max FAR", "8.0", "Strong indicator of high-intensity planning context."],
          ["Parking", "Subject to Chapter 18.38", "Final parking still needs parcel-specific code read and likely TDM strategy."],
          ["Affordable housing", "15% ordinance baseline", "Should be underwritten explicitly, not treated as a soft note."],
          ["Entitlement timing", "TBD", "User provided 9-12 months, but this has not been independently verified and should remain a diligence item."]
        ]
      },
      charts: [
        {
          title: "Density math on 3.82 acres",
          subtitle: "Simple capacity math for investor orientation only.",
          series: [
            { label: "120 du/ac", value: 458, display: "458 units" },
            { label: "150 du/ac", value: 573, display: "573 units" },
            { label: "200 du/ac", value: 764, display: "764 units" },
            { label: "250 du/ac", value: 955, display: "955 units" }
          ]
        }
      ],
      notes: [
        "The user-provided 345-430 unit concept is below the simple 120 du/ac math on 3.82 acres, which means it may assume net developable area loss, a partial-site concept, or a lower practical buildout than gross-site density suggests.",
        "Use 'policy-supported' language, not 'fully by-right,' until parcel-level planning confirmation is in hand."
      ],
      sources: [
        { label: "CompRedux workbook", url: "./CompRedux-3055-PATRICK-HENRY-DR-SANTA-CLARA-CA-95054-2026-04-08.xlsx" },
        { label: "City Patrick Henry Drive page", url: "https://www.santaclaraca.gov/our-city/departments-a-f/community-development/planning-division/specific-plans/patrick-henry-drive" },
        { label: "City Patrick Henry infrastructure fee page", url: "https://www.santaclaraca.gov/our-city/departments-g-z/public-works/engineering/land-property-development/patrick-henry-drive-specific-plan-infrastructure-impact-fee" },
        { label: "City search results for plan standards", url: "https://www.santaclaraca.gov/search?searchPhrase=Patrick%20Henry%20Drive%20Specific%20Plan" }
      ]
    },
    {
      id: "risks",
      label: "Risks",
      title: "Risks / watchpoints",
      table: {
        columns: ["Risk", "What is known", "Why it matters"],
        rows: [
          ["Entitlement risk", "Site is unentitled for the residential thesis.", "Value realization depends on approvals, not current by-right residential execution."],
          ["Yield risk", "Density and unit counts vary across user inputs, plan math, and marketing.", "Per-unit land basis can change materially depending on executable yield."],
          ["Current income risk", "Occupancy and current lease status are not cleanly resolved.", "Carry assumptions may be wrong if current tenancy is misunderstood."],
          ["Physical-program risk", "Parking solution, height, and massing are unresolved.", "Structured parking and vertical design can materially change residual value."],
          ["Cost / fee risk", "Affordable housing and infrastructure obligations will apply.", "These items should be underwritten early, not added late."],
          ["Data-consistency risk", "Building area and parking count conflict across sources.", "Credibility with data-oriented investors improves when conflicts are surfaced directly."],
          ["Environmental / geotechnical risk", "Liquefaction zone noted in workbook; flood risk is low.", "Foundation and site-prep cost may exceed a generic podium assumption."],
          ["FAA / airport envelope risk", "North Santa Clara height potential may still be constrained by aeronautical factors.", "Theoretical height ceilings are not automatically practical."]
        ]
      },
      notes: [
        "The report should not smooth over conflicts simply to look cleaner. A data-oriented investor will notice the gaps faster than a retail audience."
      ],
      sources: [
        { label: "CompRedux workbook", url: "./CompRedux-3055-PATRICK-HENRY-DR-SANTA-CLARA-CA-95054-2026-04-08.xlsx" },
        { label: "CoStar summary PDF", url: "./Costar Reports/summary.pdf" }
      ]
    },
    {
      id: "demographics",
      label: "Demographics",
      title: "Demographic snapshot",
      paragraphs: [
        "The immediate rings around the site are more useful than citywide averages because they better capture the North Santa Clara employment-residential interface. The 1-mile trade area is smaller but affluent; the 3-mile ring shows a deeper household base and a very large daytime employment base."
      ],
      table: {
        columns: ["Metric", "1-mile", "3-mile", "Data notes"],
        rows: [
          ["Population", "9,635", "149,548", "Immediate area is compact, but the broader trade area is deep."],
          ["Households", "3,237", "57,080", "Meaningful housing demand base within 3 miles."],
          ["Median age", "37.9", "36.7", "Prime renter / workforce age cohorts."],
          ["Median HH income", "$163,266", "$184,925", "Affluent renter and buyer profile."],
          ["Daytime employees", "23,129", "139,198", "Strong jobs base relative to local housing supply."],
          ["Pop. growth 2025-2030", "4.50%", "2.87%", "Positive near-term growth."],
          ["HH growth 2025-2030", "4.97%", "2.95%", "Household formation supports multifamily demand."]
        ]
      },
      charts: [
        {
          title: "Income and employment profile",
          subtitle: "Visual comparison of the trade areas around the subject.",
          series: [
            { label: "1-mile median HHI", value: 163266, display: "$163,266" },
            { label: "3-mile median HHI", value: 184925, display: "$184,925" },
            { label: "1-mile daytime employees", value: 23129, display: "23,129" },
            { label: "3-mile daytime employees", value: 139198, display: "139,198" }
          ]
        }
      ],
      notes: [
        "User-provided citywide figures can still be used selectively, but the trade-area numbers are stronger for investor framing."
      ],
      sources: [
        { label: "CoStar summary PDF", url: "./Costar Reports/summary.pdf" }
      ]
    },
    {
      id: "submarket",
      label: "Submarket data",
      title: "Santa Clara submarket data",
      paragraphs: [
        "There are really two submarket lenses here. The current building should be judged against North Santa Clara flex-market data; the redevelopment thesis should be judged against apartment fundamentals. The industrial side is current and verifiable from local CoStar files. The apartment side is directionally supported, but not yet fully refreshed at the Santa Clara-only level."
      ],
      table: {
        columns: ["Metric", "North Santa Clara flex (current)", "Santa Clara multifamily (latest verified)", "Data notes"],
        rows: [
          ["Vacancy", "9.0%", "4.4% in user-provided CBRE Q4 2022", "Existing flex has more vacancy than the older multifamily benchmark."],
          ["Asking rent", "$26.60/SF submarket; subject at $18.77/SF", "$3,148/unit in user-provided CBRE Q4 2022", "Current building is below submarket flex asking rents; residential still shows a stronger monetization story."],
          ["12-mo net absorption", "198K SF", "TBD current Santa Clara figure", "Flex market remains active; apartment absorption still needs a refreshed local source."],
          ["12-mo leased SF", "528K SF", "TBD", "Shows ongoing flex activity but not the best use argument."],
          ["12-mo deliveries", "255K SF", "TBD", "Industrial supply is measurable; apartment supply still needs local confirmation."],
          ["12-mo sales volume", "$136M", "TBD", "Useful for current asset context only."],
          ["Sale pricing", "$392/SF", "TBD", "Not directly relevant to residential land value but useful for exit alternatives."],
          ["Cap rate", "6.5%", "TBD", "Industrial cap rates are not the right benchmark for redevelopment land."],
          ["Concessions", "Not shown", "TBD", "Need current apartment-market source."]
        ]
      },
      charts: [
        {
          title: "Current asset market context",
          subtitle: "Verified North Santa Clara flex metrics from local CoStar export.",
          series: [
            { label: "Submarket asking rent", value: 26.6, display: "$26.60/SF" },
            { label: "Subject asking rent", value: 18.77, display: "$18.77/SF" },
            { label: "Submarket vacancy", value: 9.0, display: "9.0%" },
            { label: "12-mo absorption", value: 198000, display: "198K SF" }
          ]
        }
      ],
      notes: [
        "For the final investor version, it would be better to add one current Santa Clara apartment report rather than over-relying on the 2022 user figure."
      ],
      sources: [
        { label: "CoStar property analytics PDF", url: "./Costar Reports/Property Analytics.pdf" },
        { label: "User-provided CBRE Q4 2022 benchmark", url: "https://www.cbre.com/" }
      ]
    },
    {
      id: "metro",
      label: "Metro market",
      title: "Broader Silicon Valley multifamily market",
      paragraphs: [
        "The broader apartment market remains supportive of a long-term housing thesis even if submarket data still needs one more local refresh. Public market summaries point to sub-5% vacancy, modest positive rent growth, and still-healthy transaction volume after the capital-markets reset.",
        "That combination supports a disciplined redevelopment narrative: not 'anything will lease,' but rather 'a well-located North Santa Clara project is operating in a metro where housing fundamentals remain structurally tighter than many U.S. markets.'"
      ],
      table: {
        columns: ["Metric", "San Jose / Bay Area read", "Date", "Source"],
        rows: [
          ["Occupancy", "95.9%", "Mar. 2026", "Yardi Matrix San Jose market snapshot."],
          ["Asking rent growth", "+0.7% YoY", "Mar. 2026", "Yardi Matrix San Jose market snapshot."],
          ["Average advertised asking rent", "$2,786", "Mar. 2026", "Yardi Matrix San Jose market snapshot."],
          ["Bay Area vacancy", "4.2%", "Q4 2025", "CBRE Bay Area multifamily figures."],
          ["Quarterly net absorption", "5,368 units", "Q4 2025", "CBRE Bay Area multifamily figures."],
          ["2025 deliveries", "11,740 units", "FY 2025", "CBRE Bay Area multifamily figures."],
          ["New construction starts", "5,484 units", "FY 2025", "CBRE Bay Area multifamily figures."],
          ["San Jose multifamily sales volume", "$2.76B", "2025", "CoStar capital markets."],
          ["Market sale price / unit", "$489,183", "2025", "CoStar capital markets."],
          ["Market cap rate", "4.59%", "2025", "CoStar capital markets."],
          ["2026 Q1 sales volume", "$511.4M", "Q1 2026", "CoStar capital markets."],
          ["2026 Q1 price / unit", "$502,267", "Q1 2026", "CoStar capital markets."],
          ["2026 Q1 cap rate", "4.55%", "Q1 2026", "CoStar capital markets."]
        ]
      },
      charts: [
        {
          title: "San Jose multifamily capital markets",
          subtitle: "Selected current metrics from the local capital-markets workbook.",
          series: [
            { label: "2025 sales volume", value: 2762583040, display: "$2.76B" },
            { label: "2026 Q1 sales volume", value: 511447392, display: "$511.4M" },
            { label: "2025 price / unit", value: 489183, display: "$489,183" },
            { label: "2026 Q1 price / unit", value: 502267, display: "$502,267" }
          ]
        }
      ],
      sources: [
        { label: "Yardi Matrix San Jose multifamily page", url: "https://www.yardimatrix.com/blog/san-jose-multifamily-market-report/" },
        { label: "CBRE Bay Area multifamily figures Q4 2025", url: "https://www.cbre.com/insights/figures/bay-area-multifamily-figures-q4-2025" },
        { label: "CoStar capital markets workbook", url: "./Costar Reports/Capital Market Data Sheet - San Jose - CA.xlsx" }
      ]
    },
    {
      id: "resident",
      label: "Target demand profile",
      title: "Target demand profile",
      bullets: [
        "Likely buyer: merchant builder or multifamily developer seeking a large North Santa Clara site with policy support but still some entitlement work ahead.",
        "Likely capital profile: groups comfortable underwriting predevelopment risk in exchange for a large-scale outcome rather than a small infill execution.",
        "Likely end resident: tech, advanced-manufacturing, university-affiliated, and airport-connected households who value job access more than a traditional downtown neighborhood identity.",
        "Most relevant pricing audience: institutional rental developers first, with for-sale optionality still worth watching through condo comps and nearby buyer demand."
      ]
    },
    {
      id: "amenities",
      label: "Amenities & distances",
      title: "Amenities & distances",
      table: {
        columns: ["Category", "Anchor", "Distance / access", "Why it matters"],
        rows: [
          ["Education", "Mission College", "Approx. 0.6 miles", "Immediate institutional anchor and local demand node."],
          ["Education", "Santa Clara University", "Approx. 5 miles", "Broader academic and workforce relevance."],
          ["Airport", "San Jose International Airport", "4.7 miles / 9 minutes", "Regional access and executive / employer connectivity."],
          ["Entertainment", "Levi's Stadium district", "Nearby", "Destination anchor and district recognizability."],
          ["Retail", "Rivermark Plaza / Village", "Nearby", "Neighborhood-serving retail and daily-needs support."],
          ["Employment", "Intel / Applied Materials corridor", "Nearby North Santa Clara", "Direct support for jobs-housing narrative."],
          ["Transit", "Nearest VTA / rail stop", "TBD standardized map", "Should be finalized in a visual distance matrix."],
          ["Regional employers", "Apple / Google / Meta", "TBD standardized map", "Important for final investor map but not yet normalized."]
        ]
      },
      notes: [
        "A map-based version of this section will land better than text alone for a data-oriented client."
      ],
      sources: [
        { label: "CoStar summary PDF", url: "./Costar Reports/summary.pdf" },
        { label: "Northmarq site page", url: "https://www.northmarq.com/3055-patrick-henry-drive-santa-clara-ca/" }
      ]
    },
    {
      id: "church-housing-precedents",
      label: "Church / civic land precedents",
      title: "Church and civic land housing precedents",
      lede:
        "The saved reports document a current housing-development category: religious institutions and nonprofit schools using owned land for affordable housing under state streamlining laws, local housing-element programs, and public-funding structures.",
      paragraphs: [
        "The Laguna Beach Neighborhood Congregational Church project is the only project-specific development precedent in the saved set. It is a 100% affordable housing proposal with Related California as development partner, planned on part of an existing church campus near downtown Laguna Beach.",
        "The broader HousingWire report documents state-level policy activity in California, Florida, and Virginia for housing on religious or nonprofit-owned land, with requirements tied to affordability, objective standards, ownership, and local building and safety compliance."
      ],
      cards: [
        { key: "Current Laguna program", value: "29 units", supporting: "28 affordable apartments plus one manager unit." },
        { key: "Earlier Laguna concepts", value: "72 / 44 units", supporting: "The proposal was previously reported at 72 units and later 44 units." },
        { key: "Parking", value: "41 spaces", supporting: "One subterranean level; about 30 resident spaces, with remaining spaces for public and church use." },
        { key: "State policy examples", value: "CA / FL / VA", supporting: "HousingWire identifies California, Florida, and Virginia as active faith-land housing policy examples." }
      ],
      figures: [
        {
          src: "https://ca-times.brightspotcdn.com/dims4/default/1559192/2147483647/strip/true/crop/5053x2653+0+95/resize/1200x630!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F25%2Fce%2Fd52155254832a96d21166a28bd01%2Ftn-dpt-me-ncc-project-update-20260123-1.jpg",
          alt: "Rendering of the Neighborhood Congregational Church affordable housing proposal in Laguna Beach",
          caption: "Neighborhood Congregational Church affordable housing proposal in Laguna Beach; revised plan reported at 28 affordable units plus one manager unit.",
          source: "Los Angeles Times / Daily Pilot; rendering courtesy of Neighborhood Congregational Church."
        },
        {
          src: "https://www.housingwire.com/wp-content/uploads/2025/09/ChurchCollegeAffordableHousing.jpg",
          alt: "HousingWire article image for church and college affordable housing policy coverage",
          caption: "HousingWire policy coverage of state efforts to enable housing on church and nonprofit-owned land.",
          source: "HousingWire."
        }
      ],
      grid: [
        {
          title: "1. Site owner",
          body: "Neighborhood Congregational Church, a non-denominational church near downtown Laguna Beach."
        },
        {
          title: "2. Development partner",
          body: "Related California is identified in both saved Laguna Beach articles as the church's development partner."
        },
        {
          title: "3. Development format",
          body: "Two-story affordable apartment building over one subterranean parking level, located on the existing parking-lot portion of the church campus."
        },
        {
          title: "4. Existing uses retained",
          body: "The revised plan keeps the sanctuary and Bridge Hall and allows the long-running Montessori school to remain on site."
        }
      ],
      table: {
        columns: ["Category", "Reported facts", "Numbers / standards", "Source"],
        rows: [
          ["Laguna Beach project scope", "Neighborhood Congregational Church and Related California revised the project to 28 affordable apartments plus one manager unit. The revised plan retains the sanctuary, Bridge Hall, and Montessori school.", "29 total units; two-story building; one subterranean parking level.", "Los Angeles Times / Daily Pilot; Orange County Register."],
          ["Laguna Beach unit mix and rents", "The reports state that the revised plan includes studio, one-, two-, and three-bedroom units for qualifying seniors and families.", "Income eligibility reported from $35,550 to $125,940; rents reported from $888 to $2,640 per month.", "Los Angeles Times / Daily Pilot; Orange County Register."],
          ["Laguna Beach parking and public realm", "The plan includes subterranean parking, sidewalk widening, street widening, a community plaza, green space, and a playground.", "41 parking spaces; approximately 30 spaces for residents, with remaining spaces controlled for public and church-related use.", "Los Angeles Times / Daily Pilot; Orange County Register."],
          ["Laguna Beach approval and funding schedule", "The reports identify public assistance, city funding, low-income housing tax credits, and a Planning Commission hearing as part of the project path.", "Planning Commission hearing referenced for March 2026; 9% tax-credit application target referenced for April 2026; possible construction start by end of 2026 and completion by early 2028 if approvals and credits are secured.", "Los Angeles Times / Daily Pilot; Orange County Register."],
          ["California faith-land law", "HousingWire describes California's Affordable Housing on Faith Lands Act as allowing religious institutions and nonprofit colleges to build 100% affordable multifamily housing by right on owned land when objective standards are met.", "Terner Center estimate cited by HousingWire: up to 171,000 acres of religious and nonprofit college land statewide could be eligible.", "HousingWire."],
          ["Florida policy activity", "HousingWire states that St. Petersburg adopted a 2025 ordinance for affordable housing on religious property and that Florida later folded church-owned property into its broader housing preemption framework.", "Gainesville initiative cited with at least 10% of units designated affordable.", "HousingWire."],
          ["Virginia policy activity", "HousingWire describes Virginia legislation for qualifying religious and nonprofit property that would eliminate rezonings and special-use permits while retaining local building, safety, historic preservation, height, environmental, and utility standards.", "At least 60% income-restricted units; minimum density allowance up to 20 units per acre; effective Sept. 1, 2027 and sunset in 2031 if signed, as reported.", "HousingWire."]
        ]
      },
      charts: [
        {
          title: "Laguna Beach project scale reset",
          subtitle: "Reported evolution of the Neighborhood Congregational Church affordable housing concept.",
          series: [
            { label: "Early 2024 concept", value: 72, display: "72 units" },
            { label: "Prior submitted plan", value: 44, display: "44 units" },
            { label: "Revised plan", value: 29, display: "29 units" }
          ]
        }
      ],
      bullets: [
        "Reported development ingredients: owned land, affordable housing program, development partner, city housing-element context, public funding, tax-credit timing, parking plan, and retained community uses.",
        "Reported location attributes for the Laguna Beach site: walking distance to a supermarket, high school, beach, downtown, and other public amenities.",
        "Reported community-facing improvements: widened sidewalks, widened street segment, community plaza, green space, playground, refreshed sanctuary, refreshed hall, and retained school operations."
      ],
      sources: [
        { label: "Los Angeles Times / Daily Pilot: Laguna Beach church reworks affordable housing project", url: "./sources-supporting-docs/Development Vision Procedents/Laguna Beach church reworks, scales down affordable housing project - Los Angeles Times.html" },
        { label: "Orange County Register: Laguna Beach church revamps affordable housing project", url: "./sources-supporting-docs/Development Vision Procedents/Laguna Beach church revamps affordable housing project – Orange County Register.html" },
        { label: "HousingWire: States bet on by-right housing projects on church land", url: "./sources-supporting-docs/Development Vision Procedents/States bet on by-right housing projects on church land.html" }
      ]
    },
    {
      id: "positioning",
      label: "Residential precedent & investor positioning",
      title: "Residential precedent & investor positioning",
      paragraphs: [
        "The strongest evidence for the redevelopment thesis is the surrounding pipeline, not a generic housing shortage narrative. Santa Clara is already entertaining or approving large residential and mixed-use programs in the same broader geography, including directly on Patrick Henry Drive.",
        "That matters because 3055 Patrick Henry is not asking an investor to believe in an isolated land-use leap. It is asking the investor to evaluate whether this parcel can join a corridor that is already transitioning."
      ],
      table: {
        columns: ["Project", "Program", "Status", "Why it matters"],
        rows: [
          ["3000 Patrick Henry Drive", "284 dwelling units", "City project page", "Direct Patrick Henry corridor housing precedent."],
          ["4590 Patrick Henry Drive", "726 apartments + 122 townhomes + retail + office + park", "City project page", "Closest large-format corridor proof point."],
          ["2518 Mission College Blvd / Santa Clara Park", "1,792 units + office + hotel + retail", "City project page", "Shows city tolerance for large mixed-use housing nodes nearby."],
          ["Related Santa Clara / 5155 Stars and Stripes Dr", "1,680 units + office + retail + hotel", "City project page", "Validates scale of North Santa Clara mixed-use redevelopment."],
          ["Mission Point / 3555 Monroe St", "Up to 2,000 homes + 4.4M SF office/R&D", "City project page", "Broader district transformation benchmark."]
        ]
      },
      charts: [
        {
          title: "Nearby project scale",
          subtitle: "Residential units only where clearly stated.",
          series: [
            { label: "3000 Patrick Henry", value: 284, display: "284 units" },
            { label: "4590 Patrick Henry", value: 848, display: "848 units" },
            { label: "Santa Clara Park", value: 1792, display: "1,792 units" },
            { label: "Related Santa Clara", value: 1680, display: "1,680 units" },
            { label: "Mission Point", value: 2000, display: "2,000 homes" }
          ]
        }
      ],
      sources: [
        { label: "3000 Patrick Henry city page", url: "https://www.santaclaraca.gov/Home/Components/BusinessDirectory/BusinessDirectory/493/2495?npage=3" },
        { label: "4590 Patrick Henry city page", url: "https://www.santaclaraca.gov/Home/Components/BusinessDirectory/BusinessDirectory/216/2495" },
        { label: "Santa Clara Park city page", url: "https://www.santaclaraca.gov/Home/Components/BusinessDirectory/BusinessDirectory/334/2495?npage=2" },
        { label: "Related Santa Clara city page", url: "https://www.santaclaraca.gov/Home/Components/BusinessDirectory/BusinessDirectory/214/2495" },
        { label: "Mission Point city page", url: "https://www.santaclaraca.gov/Home/Components/BusinessDirectory/BusinessDirectory/215/2495" }
      ]
    },
    {
      id: "hold-reposition",
      label: "Hold / Reposition / Redevelop",
      title: "Hold / Reposition / Redevelop framework",
      table: {
        columns: ["Path", "What it means", "Data support today", "Key limitation"],
        rows: [
          ["Hold", "Operate the existing flex asset as is.", "Supported only if current occupancy and lease economics are stronger than public data presently shows.", "Occupancy and income profile remain unresolved."],
          ["Reposition", "Treat the property as covered land while optimizing interim utility.", "Most practical near-term strategy if redevelopment is the end goal.", "Still depends on eventual residential execution."],
          ["Redevelop", "Pursue a high-density residential project consistent with corridor direction.", "Best fit with parcel scale, corridor precedent, and policy support.", "Requires entitlement, parking, affordability, and cost discipline."]
        ]
      },
      bullets: [
        "For a data-oriented investor, reposition-to-redevelop is likely the most credible base-case narrative.",
        "The report should not imply that the hold case is equally compelling unless rent roll data improves materially."
      ]
    },
    {
      id: "neighboring",
      label: "Neighboring Projects",
      title: "Neighboring Projects — detailed comparables",
      table: {
        columns: ["Project", "Residential units", "Other program", "Status", "Relevance"],
        rows: [
          ["3000 Patrick Henry Drive", "284", "Amenity space + parking", "City project page", "Direct same-corridor housing precedent."],
          ["4590 Patrick Henry Drive", "848", "Retail + office + public park", "City project page", "Large corridor proof point for mixed-use residential scale."],
          ["2518 Mission College Blvd / Santa Clara Park", "1,792", "Office + hotel + retail + open space", "City project page", "Major nearby mixed-use benchmark."],
          ["Related Santa Clara", "1,680", "Office + retail + hotel", "City project page", "Institutional-scale nearby mixed-use redevelopment."],
          ["Mission Point", "2,000", "4.4M SF office/R&D + retail + hotel", "City project page", "Confirms city support for district-scale transformation."],
          ["Patrick Henry plan area", "TBD by parcel", "Approx. 74-acre framework", "Adopted", "Most important district-level context for the subject."]
        ]
      },
      sources: [
        { label: "City Patrick Henry Drive page", url: "https://www.santaclaraca.gov/our-city/departments-a-f/community-development/planning-division/specific-plans/patrick-henry-drive" },
        { label: "3000 Patrick Henry city page", url: "https://www.santaclaraca.gov/Home/Components/BusinessDirectory/BusinessDirectory/493/2495?npage=3" },
        { label: "4590 Patrick Henry city page", url: "https://www.santaclaraca.gov/Home/Components/BusinessDirectory/BusinessDirectory/216/2495" }
      ]
    },
    {
      id: "land-value",
      label: "Land Value Estimate",
      title: "Land Value Estimate — preliminary framing",
      paragraphs: [
        "A tight land-value opinion would be premature without a broader set of disclosed development-site transactions. The most defensible current approach is to show the subject's historical basis, reference at least one nearby development-site sale, and make clear that final value depends heavily on executable yield, affordability, parking, and timing."
      ],
      table: {
        columns: ["Comp", "Sale date", "Price", "Status", "Use in report"],
        rows: [
          ["3055 Patrick Henry Drive", "Apr. 8, 2016", "$19.0M", "Verified", "Historical basis only."],
          ["3100-3118 Patrick Henry Drive", "2025", "Price not publicly disclosed in source used", "Verified sale announcement", "Relevant nearby development-site signal, but incomplete for valuation."],
          ["Additional North Santa Clara redevelopment land comp", "TBD", "TBD", "Needed", "Required before publishing a market value range."],
          ["Additional North Santa Clara redevelopment land comp", "TBD", "TBD", "Needed", "Required before publishing a market value range."]
        ]
      },
      notes: [
        "Do not convert the 2016 sale into an implied current land value without a proper adjustment framework.",
        "The investor will likely expect at least 3-5 directly relevant land comps before taking this section as actionable."
      ],
      sources: [
        { label: "CompRedux workbook", url: "./CompRedux-3055-PATRICK-HENRY-DR-SANTA-CLARA-CA-95054-2026-04-08.xlsx" },
        { label: "Berkadia 3100-3118 Patrick Henry sale announcement", url: "https://www.berkadia.com/news/residential-development-site-santa-clara-ca-sold-by-berkadia-2025/" }
      ]
    },
    {
      id: "tax-value",
      label: "Tax-Assessed Value Analysis",
      title: "Tax-Assessed Value Analysis",
      paragraphs: [
        "The tax roll is useful here because it gives the investor a transparent look at assessed basis and current tax burden without pretending to be market value. The subject now carries a 2025-2026 assessed value of roughly $32.77 million, materially above the 2016 sale price."
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
          ["2019-2020", "$13,954,885", "$6,208,066", "$20,162,951", "$246,058.31"]
        ]
      },
      charts: [
        {
          title: "Assessed value trend",
          subtitle: "Gross assessed value by tax year.",
          series: [
            { label: "2019-20", value: 20162951, display: "$20.16M" },
            { label: "2020-21", value: 29963520, display: "$29.96M" },
            { label: "2021-22", value: 30273941, display: "$30.27M" },
            { label: "2022-23", value: 30879419, display: "$30.88M" },
            { label: "2023-24", value: 31497006, display: "$31.50M" },
            { label: "2024-25", value: 32126945, display: "$32.13M" },
            { label: "2025-26", value: 32769483, display: "$32.77M" }
          ]
        }
      ],
      sources: [
        { label: "CompRedux workbook", url: "./CompRedux-3055-PATRICK-HENRY-DR-SANTA-CLARA-CA-95054-2026-04-08.xlsx" },
        { label: "CoStar summary PDF", url: "./Costar Reports/summary.pdf" }
      ]
    },
    {
      id: "sale-comps",
      label: "Condo Sale Comparables",
      title: "Condo sale comparables",
      paragraphs: [
        "This section is retained to mirror the prior report structure, but it should be presented as a read on nearby for-sale demand rather than a direct site-valuation method. The strongest comps are newer North Santa Clara / Rivermark-area condos with recent closed sales and strong pricing per square foot."
      ],
      table: {
        columns: ["Comp", "Type", "Size", "Sale price", "Price / SF", "Sale date", "Why it matters"],
        rows: [
          ["1883 Agnew Rd #426", "2 bed / 2 bath condo", "1,148 SF", "$940,000", "$819/SF", "Aug. 29, 2025", "Recent Rivermark-area buyer demand."],
          ["1883 Agnew Rd #104", "2 bed / 2 bath condo", "1,148 SF", "$920,000", "TBD", "Nov. 14, 2025", "Same project; supports depth of demand."],
          ["3901 Lick Mill Blvd #165", "2 bed / 2.5 bath condo", "1,328 SF", "$1,130,000", "$851/SF", "Oct. 24, 2025", "Larger nearby condo comp at strong pricing."]
        ]
      },
      charts: [
        {
          title: "Observed condo pricing",
          subtitle: "Closed-sale pricing from nearby North Santa Clara condo product.",
          series: [
            { label: "1883 Agnew #426", value: 819, display: "$819/SF" },
            { label: "3901 Lick Mill #165", value: 851, display: "$851/SF" }
          ]
        }
      ],
      notes: [
        "One comp still needs a clean source for price per SF; keep that line item marked rather than inferring it."
      ],
      sources: [
        { label: "1883 Agnew #426 on Redfin", url: "https://www.redfin.com/CA/Santa-Clara/1883-Agnew-Rd-95054/unit-426/home/12179352" },
        { label: "1883 Agnew #104 on Zillow", url: "https://www.zillow.com/homedetails/1883-Agnew-Rd-UNIT-104-Santa-Clara-CA-95054/79841975_zpid/" },
        { label: "3901 Lick Mill #165 on Redfin", url: "https://www.redfin.com/CA/Santa-Clara/3901-Lick-Mill-Blvd-95054/unit-165/home/12188361" }
      ]
    },
    {
      id: "rent-comps",
      label: "Rent Comparables",
      title: "Rent comparables",
      paragraphs: [
        "The current rent-comp set supports the argument that newer institutional-quality product in the subject's broader trade area is leasing at rents well above the older 2022 Santa Clara benchmark provided at kickoff. The right investor use of this section is directional pricing support, not precise pro forma underwriting."
      ],
      table: {
        columns: ["Comp", "Product", "Current asking range", "Notes", "Source"],
        rows: [
          ["Santa Clara Square Apartment Homes", "Institutional multifamily", "$3,380-$6,457/mo", "Strong nearby Class A benchmark.", "Apartments.com"],
          ["The Lafayette", "Multifamily", "$2,830-$4,343/mo", "Useful mid-to-upper-tier local benchmark.", "Apartments.com"],
          ["The Clara", "Newer multifamily", "$3,400-$4,950/mo", "Supports stronger modern-rent positioning.", "Apartments.com"],
          ["North Park Apartment Homes", "Large nearby North San Jose community", "$2,965-$9,055/mo", "Broader nearby benchmark with wide unit mix.", "ForRent"]
        ]
      },
      charts: [
        {
          title: "Top-end asking rent comparison",
          subtitle: "Simple visual of current advertised rent ranges.",
          series: [
            { label: "Santa Clara Square", value: 6457, display: "$6,457" },
            { label: "The Lafayette", value: 4343, display: "$4,343" },
            { label: "The Clara", value: 4950, display: "$4,950" },
            { label: "North Park", value: 9055, display: "$9,055" }
          ]
        }
      ],
      notes: [
        "These are asking-rent snapshots, not effective rents. Concessions and unit-level mix still need deeper underwriting treatment."
      ],
      sources: [
        { label: "Santa Clara Square Apartment Homes", url: "https://www.apartments.com/santa-clara-square-apartment-homes-santa-clara-ca/rqgtnx3/" },
        { label: "The Lafayette", url: "https://www.apartments.com/the-lafayette-santa-clara-ca/c3enymd/" },
        { label: "The Clara", url: "https://www.apartments.com/the-clara-santa-clara-ca/6b3v70v/" },
        { label: "North Park Apartment Homes", url: "https://www.forrent.com/ca/san-jose/north-park-apartment-homes/v8rj9jf" }
      ]
    },
    {
      id: "sources",
      label: "Methodology & sources",
      title: "Methodology & sources",
      bullets: [
        "Property facts, ownership, assessment, and current asset context were cross-checked against the local CompRedux workbook and local CoStar exports dated April 8, 2026.",
        "Planning and precedent sections prioritize City of Santa Clara sources and city project pages.",
        "Metro market context uses current public Yardi Matrix and CBRE summary pages plus local CoStar capital-markets data.",
        "Rent and condo comp sections use direct property or listing pages rather than inherited assumptions from the prior report.",
        "Where sources conflict, the conflict is shown directly instead of resolved by guesswork."
      ],
      table: {
        columns: ["Open item", "Why it matters", "Current status"],
        rows: [
          ["Final building size", "Affects FAR, pricing metrics, and parking ratio.", "Open: 68,075 SF vs. 70,520 SF."],
          ["Current occupancy and rent roll", "Affects covered-land carry analysis.", "Open."],
          ["Final parking count", "Important for current operations and redevelopment assumptions.", "Open: 140 vs. 240."],
          ["Exact parcel-specific plan designation", "Affects density, height, and approval path.", "Open for final city confirmation."],
          ["Current OM / pricing guidance", "Needed for investor underwriting.", "Open."],
          ["Land-sale comp set", "Needed for credible land value range.", "Open."],
          ["Standardized distance matrix", "Needed for map-ready investor presentation.", "Open."],
          ["Current Santa Clara apartment report", "Would tighten the multifamily submarket section.", "Recommended."],
          ["FAA / height confirmation", "Important if underwriting upper-end density / height scenarios.", "Recommended."]
        ]
      },
      notes: [
        "Run `node scripts/audit-template.js` before sharing to catch any accidental carryover language."
      ],
      sources: [
        { label: "CoStar summary PDF", url: "./Costar Reports/summary.pdf" },
        { label: "CoStar property analytics PDF", url: "./Costar Reports/Property Analytics.pdf" },
        { label: "CoStar capital markets workbook", url: "./Costar Reports/Capital Market Data Sheet - San Jose - CA.xlsx" },
        { label: "CompRedux workbook", url: "./CompRedux-3055-PATRICK-HENRY-DR-SANTA-CLARA-CA-95054-2026-04-08.xlsx" },
        { label: "City of Santa Clara Patrick Henry Drive page", url: "https://www.santaclaraca.gov/our-city/departments-a-f/community-development/planning-division/specific-plans/patrick-henry-drive" }
      ]
    }
  ]
};
