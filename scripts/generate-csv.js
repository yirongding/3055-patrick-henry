#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const data = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../data/rent-comps.json"), "utf8")
);

function q(val) {
  if (val === null || val === undefined) return "";
  return `"${String(val).replace(/"/g, '""')}"`;
}

// ── Sheet 1: Summary by bedroom type ─────────────────────────────────────────
const summaryRows = [
  ["Property", "Address", "Year Built", "Total Units",
   "Layout", "Sqft Min", "Sqft Max", "Rent Min", "Rent Max",
   "Units Available", "Parking $/mo", "Pet Policy", "Move-in Special"].join(",")
];

for (const p of data) {
  for (const u of p.unit_types || []) {
    summaryRows.push([
      q(p.property_name),
      q(`${p.address}, ${p.city_state_zip}`),
      p.year_built || "",
      p.total_units || "",
      q(u.layout),
      u.sq_ft_min || "",
      u.sq_ft_max || "",
      u.rent_min || "",
      u.rent_max || "",
      u.units_available ?? "",
      p.parking?.cost_per_month ?? "",
      q(p.pet_policy?.fees || ""),
      q((p.notes || "").split(".")[0]),
    ].join(","));
  }
}

// ── Sheet 2: Plan-level detail ────────────────────────────────────────────────
const detailRows = [
  ["Property", "Layout", "Plan", "Sqft", "Rent Range", "Units Available", "Availability Date"].join(",")
];

for (const p of data) {
  for (const u of p.unit_types || []) {
    const plans = u.plan_breakdown || [];
    if (plans.length === 0) {
      detailRows.push([
        q(p.property_name),
        q(u.layout),
        "",
        `${u.sq_ft_min || ""}${u.sq_ft_max && u.sq_ft_max !== u.sq_ft_min ? "–" + u.sq_ft_max : ""}`,
        "",
        u.units_available ?? "",
        q(u.availability_date || ""),
      ].join(","));
    } else {
      for (const pl of plans) {
        detailRows.push([
          q(p.property_name),
          q(u.layout),
          q(pl.plan || ""),
          q(String(pl.sqft || "")),
          q(pl.rent || ""),
          pl.available ?? "",
          q(pl.availability_date || u.availability_date || ""),
        ].join(","));
      }
    }
  }
}

// ── Sheet 3: Rent per sqft (midpoints) ───────────────────────────────────────
const psfRows = [
  ["Property", "Layout", "Sqft Midpoint", "Rent Midpoint", "$/Sqft"].join(",")
];

for (const p of data) {
  for (const u of p.unit_types || []) {
    if (!u.rent_min || !u.rent_max || !u.sq_ft_min || !u.sq_ft_max) continue;
    const sqftMid = Math.round((u.sq_ft_min + u.sq_ft_max) / 2);
    const rentMid = Math.round((u.rent_min + u.rent_max) / 2);
    const psf = (rentMid / sqftMid).toFixed(2);
    psfRows.push([
      q(p.property_name),
      q(u.layout),
      sqftMid,
      rentMid,
      psf,
    ].join(","));
  }
}

// ── Write files ───────────────────────────────────────────────────────────────
const outDir = path.join(__dirname, "../data");

fs.writeFileSync(path.join(outDir, "rent-comps.csv"), summaryRows.join("\n"));
fs.writeFileSync(path.join(outDir, "rent-comps-by-plan.csv"), detailRows.join("\n"));
fs.writeFileSync(path.join(outDir, "rent-comps-psf.csv"), psfRows.join("\n"));

console.log("✓ rent-comps.csv          — summary by bedroom type");
console.log("✓ rent-comps-by-plan.csv  — detail by floor plan");
console.log("✓ rent-comps-psf.csv      — rent per sqft midpoints");
