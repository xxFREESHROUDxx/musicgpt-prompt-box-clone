const nextConfig = {
  transpilePackages: ["framer-motion"],
  output: "standalone",
  experimental: {
    appDir: true,
  },
  images: {
    domains: [],
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
};

export default nextConfig;
