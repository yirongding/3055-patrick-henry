#!/usr/bin/env node

const { execSync } = require("node:child_process");

const legacyTerms = [
  "950 Van Ness",
  "van-ness",
  "Van Ness",
  "San Francisco",
  "Civic Center",
  "Tenderloin",
  "Academy of Art",
  "Powell Street BART",
  "RC-4",
  "O'Farrell",
  "Olive"
];

function run(command) {
  try {
    return execSync(command, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
  } catch (error) {
    return error.stdout ? String(error.stdout).trim() : "";
  }
}

const scanGlobs = [
  "index.html",
  "styles.css",
  "app.js",
  "data"
];

const fileMatches = run("find index.html styles.css app.js data -type f 2>/dev/null | sort");
const contentMatches = legacyTerms
  .map((term) => ({
    term,
    output: run(
      `rg -n ${JSON.stringify(term)} ${scanGlobs.map((glob) => JSON.stringify(glob)).join(" ")}`
    )
  }))
  .filter((entry) => entry.output);

const nameMatches = fileMatches
  .split("\n")
  .filter(Boolean)
  .filter((file) => legacyTerms.some((term) => file.toLowerCase().includes(term.toLowerCase())));

if (!contentMatches.length && !nameMatches.length) {
  console.log("Audit passed: no legacy 950 Van Ness references found.");
  process.exit(0);
}

console.log("Legacy reference audit failed.\n");

if (nameMatches.length) {
  console.log("Matching filenames:");
  nameMatches.forEach((file) => console.log(`- ${file}`));
  console.log("");
}

if (contentMatches.length) {
  console.log("Matching content:");
  contentMatches.forEach(({ term, output }) => {
    console.log(`- ${term}`);
    console.log(output);
    console.log("");
  });
}

process.exit(1);
