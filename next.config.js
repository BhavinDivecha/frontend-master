/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    protocol: 'https://',
    baseUrl: 'backend-master-production-28e2.up.railway.app/',
    language: 'English',
    adminUrl: 'https://admin-cair4youth.vercel.app/',
  },
}

module.exports = nextConfig
