/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["rickandmortyapi.com"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.ftl/,
      type: 'asset/source',
    });
    return config;
  },
};

module.exports = nextConfig;
