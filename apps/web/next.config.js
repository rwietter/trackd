/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['ui']);
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    domains: ['images.pexels.com', 'i.postimg.cc'],
  },
};

module.exports = withTM(nextConfig);