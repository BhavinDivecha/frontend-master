/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    protocol: "https://",
    baseUrl: "api.bestmicrogardens.eu/",
    language: "English",
    adminUrl: "https://admin.bestmicrogardens.eu/",
    country: "bestmicrogardens",
  },
};

module.exports = nextConfig;
