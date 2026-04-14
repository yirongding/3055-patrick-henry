#!/usr/bin/env node

const FirecrawlApp = require("@mendable/firecrawl-js").default;
const fs = require("fs");
const path = require("path");

const API_KEY = process.env.FIRECRAWL_API_KEY || "fc-b6c5789b091a4770aa6c17c8e09affed";

const URLS = [
  "https://www.apartments.com/the-clara-santa-clara-ca/6b3v70v/",
  "https://www.apartments.com/ave-santa-clara-santa-clara-ca/z3k89nx/",
  "https://www.apartments.com/the-lafayette-santa-clara-ca/c3enymd/",
  "https://www.apartments.com/passero-santa-clara-ca/vbeyz4d/",
  "https://www.apartments.com/mainline-north-apartments-santa-clara-ca-santa-clara-ca/gr4pthz/",
];

const EXTRACT_PROMPT = `
Extract all rental comp data from this apartment listing page. Return:
- property_name: full name of the apartment complex
- address: full street address
- city_state_zip
- total_units: total number of units in the building (if listed)
- year_built: year the building was built (if listed)
- amenities: list of key building amenities (pool, gym, parking, concierge, etc.)
- parking: parking details (type, cost per month if listed)
- pet_policy: whether pets allowed, any fees
- unit_types: array of unit type objects, each containing:
    - layout: e.g. "Studio", "1 Bed/1 Bath", "2 Bed/2 Bath"
    - sq_ft_min: minimum square footage for this layout
    - sq_ft_max: maximum square footage for this layout
    - rent_min: minimum monthly rent for this layout (number, no $ sign)
    - rent_max: maximum monthly rent for this layout (number, no $ sign)
    - units_available: number of units currently available for this layout
    - availability_date: earliest move-in date if listed
- notes: any other relevant details (concessions, specials, income restrictions, etc.)
`;

async function scrapeProperty(app, url) {
  console.log(`\nScraping: ${url}`);
  try {
    const result = await app.v1.scrapeUrl(url, {
      formats: ["extract"],
      extract: {
        prompt: EXTRACT_PROMPT,
      },
    });

    if (result.extract) {
      console.log(`  ✓ ${result.extract.property_name || "Unknown"}`);
      return result.extract;
    } else {
      console.log(`  ✗ No extract data returned`);
      return { url, error: "No extract data" };
    }
  } catch (err) {
    console.log(`  ✗ Error: ${err.message}`);
    return { url, error: err.message };
  }
}

function toCsv(properties) {
  const rows = [];
  rows.push([
    "Property",
    "Address",
    "Layout",
    "Sq Ft Min",
    "Sq Ft Max",
    "Rent Min",
    "Rent Max",
    "Units Available",
    "Availability Date",
    "Total Units",
    "Year Built",
    "Parking",
    "Pets",
    "Amenities",
    "Notes",
  ].join(","));

  for (const p of properties) {
    if (p.error) {
      rows.push(`"${p.url}","ERROR: ${p.error}",,,,,,,,,,,,,,`);
      continue;
    }
    const units = p.unit_types || [];
    if (units.length === 0) {
      rows.push([
        `"${p.property_name || ""}"`,
        `"${p.address || ""}"`,
        "", "", "", "", "", "", "",
        p.total_units || "",
        p.year_built || "",
        `"${p.parking || ""}"`,
        `"${p.pet_policy || ""}"`,
        `"${(p.amenities || []).join("; ")}"`,
        `"${p.notes || ""}"`,
      ].join(","));
    } else {
      for (const u of units) {
        rows.push([
          `"${p.property_name || ""}"`,
          `"${p.address || ""}"`,
          `"${u.layout || ""}"`,
          u.sq_ft_min || "",
          u.sq_ft_max || "",
          u.rent_min || "",
          u.rent_max || "",
          u.units_available || "",
          `"${u.availability_date || ""}"`,
          p.total_units || "",
          p.year_built || "",
          `"${p.parking || ""}"`,
          `"${p.pet_policy || ""}"`,
          `"${(p.amenities || []).join("; ")}"`,
          `"${p.notes || ""}"`,
        ].join(","));
      }
    }
  }
  return rows.join("\n");
}

async function main() {
  const app = new FirecrawlApp({ apiKey: API_KEY });
  const results = [];

  for (const url of URLS) {
    const data = await scrapeProperty(app, url);
    results.push(data);
    // Small delay between requests to be polite
    await new Promise((r) => setTimeout(r, 1500));
  }

  const outDir = path.join(__dirname, "../data");
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const jsonPath = path.join(outDir, "rent-comps.json");
  const csvPath = path.join(outDir, "rent-comps.csv");

  fs.writeFileSync(jsonPath, JSON.stringify(results, null, 2));
  fs.writeFileSync(csvPath, toCsv(results));

  console.log(`\n✓ Saved JSON: ${jsonPath}`);
  console.log(`✓ Saved CSV:  ${csvPath}`);

  // Print summary table
  console.log("\n=== RENT COMPS SUMMARY ===\n");
  for (const p of results) {
    if (p.error) {
      console.log(`[ERROR] ${p.url}: ${p.error}`);
      continue;
    }
    console.log(`${p.property_name} | ${p.address}`);
    console.log(`  Year Built: ${p.year_built || "N/A"} | Total Units: ${p.total_units || "N/A"}`);
    if (p.unit_types) {
      for (const u of p.unit_types) {
        const sqft = u.sq_ft_min === u.sq_ft_max
          ? `${u.sq_ft_min} sqft`
          : `${u.sq_ft_min}–${u.sq_ft_max} sqft`;
        const rent = u.rent_min === u.rent_max
          ? `$${u.rent_min}`
          : `$${u.rent_min}–$${u.rent_max}`;
        console.log(`  ${u.layout}: ${rent} | ${sqft} | ${u.units_available ?? "?"} avail`);
      }
    }
    console.log();
  }
}

main().catch(console.error);
