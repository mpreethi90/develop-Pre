module.exports = {
  pageObjects: {
    homePage: require('../pageobjects/homePage.js'),
    searchListPage: require('../pageobjects/searchList.js'),
    productDetailPage: require('../pageobjects/productDetail.js'),
    cartInfoPage: require('../pageobjects/cartInfo.js'),
    cartPage: require('../pageobjects/cart.js'),
  },
  testdata: {
    homePage: require('../testdata/homePage.json'),
    productDetail: require('../testdata/productDetail.json'),
    customKeys: require('../testdata/customKeys.json'),
    cart: require('../testdata/cart.json')
  },
}
