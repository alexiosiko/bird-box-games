import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	eslint: {
		ignoreDuringBuilds: true, // Disables ESLint during builds
	  },
  /* config options here */
};

export default nextConfig;
