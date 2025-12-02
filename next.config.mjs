/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: false,
    remotePatterns: [],
  },
  // Optimize for production
  swcMinify: true,
  // Allow static file serving from public
  staticPageGenerationTimeout: 60,
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
