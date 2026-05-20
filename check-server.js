async function main() {
  const manifest = await fetch("http://127.0.0.1:4173/manifest.webmanifest").then((response) => response.json());
  const serviceWorker = await fetch("http://127.0.0.1:4173/sw.js").then((response) => response.text());
  const html = await fetch("http://127.0.0.1:4173/").then((response) => response.text());

  if (manifest.short_name !== "FieldSpeak" || manifest.display !== "standalone") {
    throw new Error("Manifest response is invalid");
  }
  if (!serviceWorker.includes("CACHE_NAME")) {
    throw new Error("Service worker response is invalid");
  }
  if (!html.includes("FieldSpeak") || !html.includes("app.js")) {
    throw new Error("HTML response is invalid");
  }

  console.log("Server check passed: HTML, manifest, and service worker are served.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
