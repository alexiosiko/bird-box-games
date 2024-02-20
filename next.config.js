/** @type {import('next').NextConfig} */
// next.config.js
const nextConfig = {
	experimental: {
	  serverActions: {
		allowedOrigins: '*',
	  },
	},
};
  

module.exports = nextConfig;
