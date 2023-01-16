/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
});

const nextConfig = withPWA({
  swcMinify: true,
  images: {
    domains: [
      "api.lorem.space",
      "www.mobit.ir",
      "placeimg.com",
      "dummyjson.com",
      "upload.wikimedia.org",
    ],
  },
});

module.exports = nextConfig;
