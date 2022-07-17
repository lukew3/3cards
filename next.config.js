/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/create": { page: "/create" },
      "/set": { page: "/set" },
      "/sets": { page: "/sets" },
    };
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "/3cards" : "",
  basePath: process.env.NODE_ENV === "production" ? "/3cards" : "",
  images: { loader: 'custom' },
}

module.exports = nextConfig
