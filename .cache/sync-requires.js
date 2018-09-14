// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/nikolasspendik/Documents/Gatsby/gatsby-site/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/nikolasspendik/Documents/Gatsby/gatsby-site/src/pages/404.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/nikolasspendik/Documents/Gatsby/gatsby-site/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/nikolasspendik/Documents/Gatsby/gatsby-site/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/nikolasspendik/Documents/Gatsby/gatsby-site/src/pages/page-2.js")),
  "component---src-pages-page-3-js": preferDefault(require("/Users/nikolasspendik/Documents/Gatsby/gatsby-site/src/pages/page-3.js"))
}

exports.json = {
  "layout-index.json": require("/Users/nikolasspendik/Documents/Gatsby/gatsby-site/.cache/json/layout-index.json"),
  "404.json": require("/Users/nikolasspendik/Documents/Gatsby/gatsby-site/.cache/json/404.json"),
  "layout-index.json": require("/Users/nikolasspendik/Documents/Gatsby/gatsby-site/.cache/json/layout-index.json"),
  "contact.json": require("/Users/nikolasspendik/Documents/Gatsby/gatsby-site/.cache/json/contact.json"),
  "layout-index.json": require("/Users/nikolasspendik/Documents/Gatsby/gatsby-site/.cache/json/layout-index.json"),
  "index.json": require("/Users/nikolasspendik/Documents/Gatsby/gatsby-site/.cache/json/index.json"),
  "layout-index.json": require("/Users/nikolasspendik/Documents/Gatsby/gatsby-site/.cache/json/layout-index.json"),
  "page-2.json": require("/Users/nikolasspendik/Documents/Gatsby/gatsby-site/.cache/json/page-2.json"),
  "layout-index.json": require("/Users/nikolasspendik/Documents/Gatsby/gatsby-site/.cache/json/layout-index.json"),
  "page-3.json": require("/Users/nikolasspendik/Documents/Gatsby/gatsby-site/.cache/json/page-3.json"),
  "layout-index.json": require("/Users/nikolasspendik/Documents/Gatsby/gatsby-site/.cache/json/layout-index.json"),
  "404-html.json": require("/Users/nikolasspendik/Documents/Gatsby/gatsby-site/.cache/json/404-html.json")
}