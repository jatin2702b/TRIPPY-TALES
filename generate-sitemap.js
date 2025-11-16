import fs from "fs";
import path from "path";

const baseUrl = "https://www.tripyytales.com";

const routes = [
  "/",                 // homepage
  "/about",
  "/packages",
  "/contact",

  // Add your extra pages here:
  // "/packages/jim-corbett",
  // "/packages/nainital",
  // "/treks/chopta",
  // "/treks/nag-tibba",
];

function generateSitemap() {
  const urls = routes
    .map((route) => {
      return `
        <url>
          <loc>${baseUrl}${route}</loc>
          <changefreq>weekly</changefreq>
          <priority>${route === "/" ? "1.0" : "0.8"}</priority>
        </url>
      `;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`;

  // Write directly into public/ (SAFE)
  fs.writeFileSync(path.resolve("public", "sitemap.xml"), xml);

  console.log("✅ sitemap.xml created inside /public");
}

generateSitemap();
