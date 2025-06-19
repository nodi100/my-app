/** @type {import('next').NextConfig} */
const nextConfig: import("next").NextConfig = {
  images: {
    domains: ["api.remailer.eu"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
