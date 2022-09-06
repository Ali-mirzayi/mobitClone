/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['api.lorem.space','www.mobit.ir','placeimg.com','dummyjson.com']
  },
}

module.exports = nextConfig
