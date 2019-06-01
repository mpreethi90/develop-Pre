const driverGearUp = require('../../lib/helpers/DriverGearUp.js')
const hasEachTestPassed = require('../../lib/helpers/DriverGearUp.js')
  .hasEachTestPassed
const {
  assert
} = require('chai')
const path = require('path')

//Load the pageobjects and testdata
const pageObjects = require('../../lib/helpers/ModuleLoader.js')
  .pageObjects
const testdata = require('../../lib/helpers/ModuleLoader.js')
  .testdata

driverGearUp.makeSuite(path.basename(__filename), 'SearchBar test suite', driver => {
  afterEach(function () {
    console.log("**** Runs after each test in this suite ****")
    hasEachTestPassed(this)
  })

  it('Search for a product. Verify the list', () => {
    return driver
      .loadAmazonHomePage()
      .elementByCss(pageObjects.homePage.searchBar)
      .click()
      .keys('preee')
  })
})
