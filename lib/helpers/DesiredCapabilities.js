  let buildInit = typeof process.env.JOB_NAME === 'undefined' ? 'localMachine'
  : process.env.JOB_NAME
  let buildid = typeof process.env.BUILD_ID === 'undefined' ? ''
  : process.env.BUILD_ID

  module.exports = {
  localCaps: {
    platformName: 'desktop',
    version: process.env.version,
    idleTimeout: 75,
  },
}
