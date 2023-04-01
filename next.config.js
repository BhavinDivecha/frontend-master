/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    protocol: 'http://',
    baseUrl: 'localhost:3001/',
    language: 'English',
  },
}

module.exports = nextConfig
