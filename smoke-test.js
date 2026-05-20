const fs = require("fs");

const html = fs.readFileSync("index.html", "utf8");
const css = fs.readFileSync("styles.css", "utf8");
const js = fs.readFileSync("app.js", "utf8");
const manifest = fs.readFileSync("manifest.webmanifest", "utf8");

const requiredHtmlIds = [
  "missionProgress",
  "remainingTime",
  "streakDays",
  "missionChips",
  "sessionTitle",
  "expressionCard",
  "expressionMain",
  "completeMission",
  "coachPrompt",
  "reviewList",
  "installApp",
  "micButton"
];

const requiredJsTokens = [
  "const dailyMissions",
  "Sensor Check",
  "Wiring Check",
  "Handover Ready",
  "Ask Maintenance",
  "Detroit Daily",
  "function completeMission",
  "serviceWorker",
  "beforeinstallprompt"
];

const requiredCssTokens = [
  ".input-dock",
  ".tab-bar",
  ".expression-card",
  ".complete-button",
  "overflow-y: auto"
];

function assertIncludes(source, token, label) {
  if (!source.includes(token)) {
    throw new Error(`${label} is missing: ${token}`);
  }
}

for (const id of requiredHtmlIds) {
  assertIncludes(html, `id="${id}"`, "HTML");
}

for (const token of requiredJsTokens) {
  assertIncludes(js, token, "JS");
}

for (const token of requiredCssTokens) {
  assertIncludes(css, token, "CSS");
}

const parsedManifest = JSON.parse(manifest);
if (parsedManifest.display !== "standalone") {
  throw new Error("Manifest display must be standalone");
}

console.log("Smoke test passed: app shell, mission loop, PWA manifest, and scroll layout are wired.");
