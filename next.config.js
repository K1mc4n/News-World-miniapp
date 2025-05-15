/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['ichef.bbci.co.uk', 'cdn.cnn.com', 'cdn.vox-cdn.com', 'images.unsplash.com'], // sesuaikan domain gambar berita
  },
}

module.exports = nextConfig;
