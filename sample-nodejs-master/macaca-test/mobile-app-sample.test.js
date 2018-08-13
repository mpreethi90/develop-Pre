'use strict';

const path = require('path');
const _ = require('macaca-utils');
const KEY_MAP = require('webdriver-keycode');

const {
  assert
} = require('chai');

const iosApp = require('ios-app-bootstrap');
const androidApp = require('android-app-bootstrap');


const {
  opn
} = _;

var platform = process.env.platform || 'iOS';
platform = platform.toLowerCase();

const pkg = require('../package');

// see: https://macacajs.github.io/desired-caps



var androidOpts = {
  platformName: 'Android',
  app: process.env.appLocation,
  deviceName: process.env.deviceName,
  platformVersion: process.env.platformVersion,
  reuse: 0,
  name: 'android beta test',
  idleTimeout: 180,
};
// var iosopts = {
//   deviceName: 'iPhone 7 Simulator',
//   deviceOrientation: 'portrait',
//   browserName:'',
//   platformVersion:'11.3',
//   platformName:'iOS',
//   app: 'sauce-storage:kawo-staging.zip'
// };

const wd = require('macaca-wd');

// override custom wd
require('./wd-extend')(wd);

describe('macaca-test/mobile-app-sample.test.js', function() {
  this.timeout(10 * 60 * 1000);

  var driver = wd.promiseChainRemote(
    'ondemand.saucelabs.com',
    80,
    process.env.SAUCELABS_USERNAME,
    process.env.SAUCELABS_ACCESS_KEY
  )
  driver.configureHttp({
    timeout: 600 * 1000
  });

  before(function() {
    return driver
      .init(androidOpts)
      .sleep(10 * 1000);
  });

  // after(() => {
  //   return driver
  //     .sleep(1000)
  //     .quit()
  //     .sleep(1000)
  //     .then(() => {
  //       opn(path.join(__dirname, '..', 'reports', 'index.html#image'));
  //     });
  // });

  // beforeEach(() => {
  //   return driver
  //     /*
  //       .title()
  //       .then(data => {
  //         console.log(`current focus ${isIOS ? 'viewController' : 'activity'}: ${data}`);
  //       })
  //       */
  //     .getWindowSize()
  //     .then(size => {
  //       console.log(`current window size ${JSON.stringify(size)}`);
  //     })
  //     .appLogin('中文+Test+12345678', '111111');
  // });

  // afterEach(function() {
  //   return driver
  //     .customSaveScreenshot(this)
  //     .changeToNativeContext()
  //     .waitForElementByName('PERSONAL')
  //     .click()
  //     .sleep(1000)
  //     .waitForElementByName('Logout')
  //     .click()
  //     .sleep(1000);
  // });

  describe('home page test', function() {
    it('should display home', function() {
      return driver
      .sleep(5000000)
    });

  //   it('should goto tableview', function() {
  //     return driver
  //       .testGetProperty()
  //       .waitForElementByName('HOME')
  //       .click()
  //       .sleep(1000)
  //       .waitForElementByName('list')
  //       .click()
  //       .sleep(1000)
  //       .waitForElementByName('Alert')
  //       .click()
  //       .sleep(5000)
  //       .acceptAlert()
  //       .sleep(1000)
  //       .customback()
  //       .waitForElementByName('Gesture')
  //       .click()
  //       .sleep(5000)
  //       .then(() => {
  //         return driver
  //           .touch('tap', {
  //             x: 100,
  //             y: 100
  //           })
  //           .sleep(1000)
  //           .elementByXPath(infoBoardXPath)
  //           .text()
  //           .then(text => {
  //             assert.include(JSON.stringify(text), 'singleTap');
  //           });
  //       })
  //       .then(() => {
  //         return driver
  //           .touch('press', {
  //             x: 100,
  //             y: 100,
  //             duration: 2
  //           })
  //           .sleep(1000);
  //       })
  //       .then(() => {
  //         return driver
  //           .waitForElementByXPath(infoBoardXPath)
  //           .touch('pinch', {
  //             scale: 2,      // only for iOS
  //             velocity: 1,   // only for iOS
  //             direction: 'in',// only for Android
  //             percent: 0.2,  // only for Android
  //             steps: 200     // only for Android
  //           })
  //           .sleep(1000);
  //       })
  //       /*
  //       // TODO Android rotate
  //       .then(() => {
  //         return driver
  //           .touch('rotate', {
  //           })
  //           .sleep(1000);
  //       })*/
  //       .customback()
  //       .then(() => {
  //         return driver
  //           .touch('drag', {
  //             fromX: 100,
  //             fromY: 600,
  //             toX: 100,
  //             toY: 100,
  //             duration: 3
  //           })
  //           .sleep(500);
  //       })
  //       .customback();
  //   });
  // });

  // describe('webview page test', function() {
  //   it('should go into webview', function() {
  //     return driver
  //       .elementByXPath(webviewButtonXPath)
  //       .click()
  //       .sleep(3000)
  //       .changeToWebviewContext()
  //       .elementById('pushView')
  //       .click()
  //       .changeToWebviewContext()
  //       .waitForElementById('popView')
  //       .click()
  //       .sleep(5000);
  //   });

  //   it('should open remote url', function() {
  //     return driver
  //       .waitForElementByName('Baidu')
  //       .click()
  //       .sleep(5000)
  //       .changeToWebviewContext()
  //       .title()
  //       .then(title => {
  //         console.log(`title: ${title}`);
  //       })
  //       .url()
  //       .then(url => {
  //         console.log(`url: ${url}`);
  //       })
  //       .elementById('index-kw')
  //       .getProperty('name')
  //       .then(info => {
  //         console.log(`get web attribute name: ${JSON.stringify(info)}`);
  //       })
  //       .waitForElementById('index-kw')
  //       .sendKeys('中文+Macaca')
  //       .elementById('index-bn')
  //       .click()
  //       .sleep(5000)
  //       .source()
  //       .then(html => {
  //         assert.include(html, 'Macaca');
  //       })
  //       .sleep(3000);
  //   });
  });
});
