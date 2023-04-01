/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    protocol: 'https://',
    baseUrl: 'backend-master.vercel.app/',
    language: 'English',
  },
}

module.exports = nextConfig
