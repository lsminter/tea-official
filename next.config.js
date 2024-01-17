/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'www.dropbox.com' },
    ],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
