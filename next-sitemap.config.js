/** @type {import('next-sitemap').IConfig} */
const config = {
	siteUrl: 'https://polytechdevelopment.com', // Replace with your site's URL
	generateRobotsTxt: true, // Generates a robots.txt file
	changefreq: 'daily',
	priority: 0.7,
  	
	outDir: 'public',         // Directory where the sitemap.xml will be saved
};
  
  module.exports = config;
  