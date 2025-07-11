import lighthouse from "lighthouse";
import * as chromeLauncher from "chrome-launcher";
import fs from "fs";

async function runLighthouse() {
  const chrome = await chromeLauncher.launch({
    chromeFlags: ["--headless", "--no-sandbox", "--disable-dev-shm-usage"],
  });

  const options = {
    logLevel: "info",
    output: "json",
    onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
    port: chrome.port,
    emulatedFormFactor: "mobile",
    throttling: {
      rttMs: 40,
      throughputKbps: 10240,
      cpuSlowdownMultiplier: 1,
      requestLatencyMs: 0,
      downloadThroughputKbps: 10240,
      uploadThroughputKbps: 1024,
    },
  };

  const runnerResult = await lighthouse("http://localhost:8000", options);

  // Save the report to a file
  const reportJson = runnerResult.report;
  fs.writeFileSync("lighthouse-report.json", reportJson);

  console.log("Lighthouse audit complete!");
  console.log("Report saved to lighthouse-report.json");

  // Display performance score
  const results = JSON.parse(reportJson);
  const performanceScore = Math.round(
    results.categories.performance.score * 100
  );
  const accessibilityScore = Math.round(
    results.categories.accessibility.score * 100
  );
  const bestPracticesScore = Math.round(
    results.categories["best-practices"].score * 100
  );
  const seoScore = Math.round(results.categories.seo.score * 100);

  console.log("\n=== Lighthouse Scores ===");
  console.log(`Performance: ${performanceScore}/100`);
  console.log(`Accessibility: ${accessibilityScore}/100`);
  console.log(`Best Practices: ${bestPracticesScore}/100`);
  console.log(`SEO: ${seoScore}/100`);
  console.log("========================\n");

  if (performanceScore >= 90) {
    console.log("✅ Performance target achieved! (90+ required)");
  } else {
    console.log(
      `❌ Performance target not met. Current: ${performanceScore}, Required: 90+`
    );
  }

  await chrome.kill();
}

runLighthouse().catch((error) => {
  console.error("Error running Lighthouse:", error);
  process.exit(1);
});
