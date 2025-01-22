import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains : ['www.w3schools.com' , "img.daisyui.com"]
  },
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
