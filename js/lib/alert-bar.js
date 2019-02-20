var $ = require('jquery')
var callData = require('./communityCall.json')

function callTime () {
  var now = new Date().getUTCHours()
  var startTime = parseInt(callData.time, 10)
  var dayOfWeek = new Date().getUTCDay()
  var reminder = $('.alert-bar')
  var announcement = $('.lh-title').append('<span>The IPFS community call will start at ' + callData.time + '. Join us <a href=' + callData.zoomLink + '>here</a></span>')
  if ((startTime - now <= 2 && startTime - now >= 0.5) && (dayOfWeek === callData.day)) {
    announcement()
  } else {
    reminder.css('display', 'none')
  }
}
callTime()
