/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    protocol: 'http://',
    baseUrl: 'backend-master-production-28e2.up.railway.app/',
    language: 'English',
  },
}

module.exports = nextConfig
