/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["image.tmdb.org","rb.gy","cdn.pixabay.com"]
  }
}

module.exports = nextConfig
