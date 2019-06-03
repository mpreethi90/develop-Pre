const driverGearUp = require('../../lib/helpers/DriverGearUp.js')
const hasEachTestPassed = require('../../lib/helpers/DriverGearUp.js')
  .hasEachTestPassed
const {
  assert
} = require('chai')
const path = require('path')
let selectedBrandFilterName

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

  it('Verify select/clear filter', () => {
    return driver
      .loadAmazonHomePage()
      .searchForAProduct(testdata.homePage.search.kickScooter)
      .waitForElementByCss(pageObjects.searchListPage.searchResultItem)
      .waitForElementByCss(pageObjects.searchListPage.brandFiltercss)
      .click()
      .waitForElementByCss(pageObjects.searchListPage.selectedBrandFilterNameCss)
      .text()
      .then(selectedBrand => {
        selectedBrandFilterName = selectedBrand;
      })
      .waitForPageLoad(1000)
      .title()
      .then(pageUrlAfterFilter => {
        assert.include(pageUrlAfterFilter, selectedBrandFilterName, "FAIL: Adding a filter does not apply to products list properly")
      })
      .waitForElementByCss(pageObjects.searchListPage.brandFilterClearCss)
      .click()
      .waitForElementByCss(pageObjects.searchListPage.searchResultItem)
      .waitForPageLoad(1000)
      .title()
      .then(pageTitleAfterClearingFilter => {
        assert.equal(pageTitleAfterClearingFilter, testdata.homePage.search.kickScooterPageTitle, "FAIL: Clearing a filter does not clear things and load page properly")
      })
  })
})
