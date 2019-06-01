const path = require('path')
const cryptoJS = require('crypto-js')
const envVariables = require('./EnvVariables.js')
const assert = require('assert')
const wd = envVariables.wd
const wd_LoginSteps = require('../customSteps/wd_LoginSteps.js')(wd)
const wd_waitTimeout = require('../customSteps/wd_waitTimeout.js')(wd)
const desiredCapabilities = require('./DesiredCapabilities.js')
const browser = envVariables.browser

const driver =
   wd.promiseChainRemote({
      host: 'localhost',
      port: 3456,
    })
    

let passed = true


function beforeEachSuite(testfile,desc) {
  driver.configureHttp({
    timeout: 600000,
  })

  let caps =
     desiredCapabilities.localCaps
     

  caps = Object.assign(caps, {
    name: `${testfile}: ${desc}`,
    browserName: envVariables.browser,
  })
  

  return driver.init(caps)
}

function afterEachSuite(testfile, passed, done, desc) {

    driver.quit()

      .then(function () {
        done()
      })
  }


function makeSuite(testfile,desc, testExecution) {
  describe(testfile, function () {
    describe(desc, function () {
    this.timeout(6 * 60 * 1000)
    before(() => beforeEachSuite(testfile,desc)
  )
    testExecution(driver)
    after(done => afterEachSuite(testfile, passed, done, desc,this))
    })
  })
}
function hasEachTestPassed(it) {
  passed = passed && it.currentTest.state === 'passed'
}

module.exports = {
  wd,
  driver,
  makeSuite,
  hasEachTestPassed
}
