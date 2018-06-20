'use strict';

const fs = require('fs');
const {
  assert
} = require('chai');
const {
  opn
} = require('macaca-utils');
const path = require('path');
const wd = require('macaca-wd');

const pkg = require('../package');

require('./wd-extend')(wd, false);

const diffImage = require('./utils.js').diffImage;

var browser = 'chrome';
browser = browser.toLowerCase();
const opts = {
  platformName: 'desktop',
    version: process.env.version || '66.0',
    browserName:'chrome'
};
describe('macaca-test/desktop-browser-sample.test.js', function() {
  this.timeout(5 * 60 * 1000);
  if (process.env.SAUCELABS_USERNAME == undefined || process.env.SAUCELABS_ACCESS_KEY == undefined) {
    console.error('********** Sauce username and password is not defined! **************')
    process.exit(1)
  }
  var driver = wd.promiseChainRemote(
    'ondemand.saucelabs.com',
    80,
    process.env.SAUCELABS_USERNAME,
    process.env.SAUCELABS_ACCESS_KEY
  )
  driver.configureHttp({
    timeout: 600000,
  })

  before(() => {
    return driver
      .init(opts)
  });
after(()=>{
  driver.quit()
})
  describe('macaca desktop sample', function() {

    it('mocha-parallel-tests and mochawesome should be ok with macaca test framework in remote execution', function() {
      return driver
        .waitForElementByCss('wrongCss')
    });   
  });
});
