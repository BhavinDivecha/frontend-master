/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    protocol: 'https://',
    baseUrl: 'backend-master-production-28e2.up.railway.app/',
    language: 'English',
  },
}

module.exports = nextConfig
