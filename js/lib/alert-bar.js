var $ = require('jquery')
var callData = require('./communityCall.json')

function callTime () {
  var now = new Date().getUTCHours()
  var startTime = parseInt(callData.time, 10)
  var dayOfWeek = new Date().getUTCDay()
  var reminder = $('.alert-bar')
  if ((startTime - now <= 2 && startTime - now >= 0.5) && (dayOfWeek === callData.day)) {
    $('.alert-bar-message').append('<span>The IPFS community call will start at ' + callData.time + '. Join us <a href=' + callData.callPage + '>here</a></span>')
    reminder.show()
  } else {
    reminder.hide()
  }
}
callTime()
