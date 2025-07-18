const nextConfig = {
  transpilePackages: ["framer-motion"],
  output: "standalone",
  images: {
    domains: [],
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
};

export default nextConfig;
