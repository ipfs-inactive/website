var $ = require('jquery')
var callData = require('./communityCall.json')

function callTime () {
  var now = new Date().getHours()
  var startTime = parseInt(callData.time, 10)
  var dayOfWeek = new Date().getDay()
  var reminder = $('.alert-bar')
  var announcement = $('.lh-title').append('<span>The IPFS community call will start in ' + callData.time + '. Join us <a href=' + callData.zoomLink + '>here</a></span>')
  if ((startTime - now <= 2 && startTime - now >= 0) && (dayOfWeek === 1)) {
    announcement()
  } else {
    reminder.hide()
  }
}
callTime()
