var assert = require('assert')
var shouldShowBanner = require('./alert-bar').shouldShowBanner

describe('shouldShowBanner', function () {
  it('should return false if the time is more than 2.5 hours before the call', function () {
    var wednesday = new Date('2019-03-13T18:33:05.629Z')
    assert.equal(shouldShowBanner(wednesday, '17:00 UTC', 1), false)
  })

  it('should return if the time is within 2.5 hours before the call', function () {
    var monday = new Date('2019-03-11T16:33:05.629Z')
    assert.equal(shouldShowBanner(monday, '17:00 UTC', 1), true)
  })

  it('should return true if the time is during the call', function () {
    var monday = new Date('2019-03-11T17:29:05.629Z')
    assert.equal(shouldShowBanner(monday, '17:00 UTC', 1), true)
  })
})
