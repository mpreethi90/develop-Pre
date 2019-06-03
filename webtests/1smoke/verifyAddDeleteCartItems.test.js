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

  it('Verify add/delete/update cart items', () => {
    return driver
      .loadAmazonHomePage()
      .searchForAProduct(testdata.homePage.search.kickScooter)
      .waitForElementByCss(pageObjects.searchListPage.searchResultItem)
      .click()
      .waitForElementByCss(pageObjects.productDetailPage.productTitleCss)
      .waitForElementByCss(pageObjects.productDetailPage.addToCartButtonCss)
      .click()
      .waitForElementByCss(pageObjects.cartInfoPage.cartButtonCss)
      .click()
      .waitForElementByCss(pageObjects.cartPage.noOfItemsInCartCss)
      .text()
      .then(noOfItemsInCart => {
        assert.include(noOfItemsInCart, ' (1 item', "FAIL: Adding an item deos not show the cart items number properly")
      })
      .waitForElementByCss(pageObjects.cartPage.quantityDropDownCss)
      .click()
      .waitForElementByCss(pageObjects.cartPage.selectSixInQuantityDropDownCss)
      .click()
      .waitForPageLoad()
      .waitForElementByCss(pageObjects.cartPage.noOfItemsInCartCss)
      .text()
      .then(noOfItemsInCart => {
        assert.include(noOfItemsInCart,' (6', "FAIL: Adding 6 items deos not update the cart items number properly")
      })
      .waitForElementByCss(pageObjects.cartPage.deleteCartCss)
      .click()
      .waitForElementByCss(pageObjects.cartPage.titleCss)
      .text()
      .then(emptyCartTitle => {
        assert.equal(emptyCartTitle, testdata.cart.titleText, "FAIL: Delete does not empty the shopping cart")
      })
  })
})
