
const envVariables = require('../helpers/EnvVariables.js')
const assert = require('assert')
//Load the pageobjects
const pageObjects = require('../helpers/ModuleLoader.js')
  .pageObjects
const testdata = require('../helpers/ModuleLoader.js')
  .testdata
module.exports = wd => {
  wd.addPromiseChainMethod('loadAmazonHomePage', function() {
    return this
      .get(`${envVariables.EnvEndPoint}`)
      .waitForElementByCssSelector(pageObjects.homePage.searchBar, 15000, 1000)
  })
}
