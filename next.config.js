/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true
})

const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['api.lorem.space','www.mobit.ir','placeimg.com','dummyjson.com','upload.wikimedia.org']
  },
})

module.exports = nextConfig
