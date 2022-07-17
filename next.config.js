/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/3cards' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/3cards' : '',
}

module.exports = nextConfig
