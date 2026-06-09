import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: path.join(__dirname),
  },
  // framer-motion / lenis are barrel-style packages imported across many client
  // components. Rewriting them to direct submodule imports shrinks the module
  // graph Turbopack has to traverse on every compile/HMR, cutting CPU + heat.
  experimental: {
    optimizePackageImports: ["framer-motion", "lenis"],
  },
};

export default nextConfig;
