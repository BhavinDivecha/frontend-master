/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    protocol: 'https://',
    baseUrl: 'da56-45-118-105-22.ngrok-free.app/',
    language: 'English',
    adminUrl: 'https://admin-cair4youth.vercel.app/',
    country: 'default'
  },
}

module.exports = nextConfig
