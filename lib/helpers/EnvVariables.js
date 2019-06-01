let browser = process.env.browser || 'chrome'
const wd = require('macaca-wd')
browser = browser.toLowerCase()
const EnvEndPoint = `https://www.amazon.com/`

module.exports = {
  wd,
  browser,
  EnvEndPoint
}
