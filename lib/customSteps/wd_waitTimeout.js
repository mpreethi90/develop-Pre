module.exports = wd => {
  wd.addPromiseChainMethod('waitForPageLoad', function(optionalWaitTime) {
    if (!optionalWaitTime) {
      return this.sleep(5000)
    }
    return this.sleep(optionalWaitTime)
  })
}
