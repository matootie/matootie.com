module.exports = {
  siteUrl: "https://www.matootie.com",
  changefreq: "never",
  priority: 0.1,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  robotsTxtOptions: {},
  transform: async (config, path) => {
    if (/^\/$/.test(path)) {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 0.8,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      }
    } else {
      return {
        loc: path,
        changefreq: config.changefreq,
        priority: config.priority,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      }
    }
  },
}
