/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      's3.us-west-1.amazonaws.com',
      'images.squarespace-cdn.com',
      'images.squarespace.cdn.com',
      'i.pravatar.cc',
      'images.unsplash.com'
    ],
  },
};

module.exports = nextConfig;
