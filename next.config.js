/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/create": { page: "/create" },
      "/set": { page: "/set" },
      "/sets": { page: "/sets" },
    };
  },
  assetPrefix: '.',
  images: { loader: 'custom' },
}

module.exports = nextConfig
