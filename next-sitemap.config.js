/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: 'https://www.polytechdevelopment.com',
	generateRobotsTxt: true, // Automatically generates robots.txt as well
	sitemapSize: 7000,       // Define the max entries per sitemap file
	changefreq: 'daily',     // Frequency of updates (e.g., daily, weekly)
	priority: 0.7,           // Priority for search engine indexing
  };
  