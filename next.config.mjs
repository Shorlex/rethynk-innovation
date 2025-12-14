/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better error detection
  reactStrictMode: true,

  // Image optimization
  images: {
    domains: ["rethynkinnovation.com"], // Add your domain
    formats: ["image/avif", "image/webp"],
  },

  // Compress HTML, CSS, and JS
  compress: true,

  // Generate standalone output for better performance
  output: "standalone",

  // Trailing slash configuration (choose one)
  trailingSlash: false, // or true, be consistent

  // Headers for security and SEO
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },

  // Redirects (if you need to redirect old URLs)
  async redirects() {
    return [
      // Example: redirect old service URLs
      // {
      //   source: '/old-service-url',
      //   destination: '/services/new-service-url',
      //   permanent: true, // 301 redirect
      // },
    ];
  },
};

export default nextConfig;
