/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    protocol: 'https://',
    baseUrl: 'c4y.popaya.co.in:3001/',
    language: 'English',
    adminUrl: 'https://admin-cair4youth.vercel.app/',
    country: 'default'
  },
}

module.exports = nextConfig
