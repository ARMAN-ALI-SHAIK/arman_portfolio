import { join } from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allow static file serving from public
  staticPageGenerationTimeout: 60,
};

export default nextConfig;
