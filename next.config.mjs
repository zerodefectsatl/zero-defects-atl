/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 90, 95],
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
