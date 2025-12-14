export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/"], // Block these if needed
      },
    ],
    sitemap: "https://rethynkinnovation.com/sitemap.xml",
  };
}
