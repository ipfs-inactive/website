var $ = require('jquery')
var callData = require('./communityCall.json')

// function meetingCountDown() {
//     var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");			
//     endTime = (Date.parse(endTime) / 1000);

//     var now = new Date();
//     now = (Date.parse(now) / 1000);

//     var timeLeft = endTime - now;

//     var days = Math.floor(timeLeft / 86400); 
//     var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
//     var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
//     var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

//     if (hours < "10") { hours = "0" + hours; }
//     if (minutes < "10") { minutes = "0" + minutes; }
//     if (seconds < "10") { seconds = "0" + seconds; }

//     $("#hours").html(hours + "<span>Hours</span>");
//     $("#minutes").html(minutes + "<span>Minutes</span>");
//     $("#seconds").html(seconds + "<span>Seconds</span>");
    
//     countingDown = $()

// }

function callTime() {
    // var countDown = meetingCountDown()
    var alertBar = $(".alert-bar")
    var announcement = $(".lh-title")
        .append('<span>The IPFS community call will start in ' + callData.time + '. Join us <a href=' + callData.zoomLink + '>here</a></span>')
    if (now - startTime <= 2){
        announcement.show()
    } else {
        alertBar.hide()
    }
}
callTime()

// var date = new Date(99, 06, 11, 12, 32, 23, 23)
// date.toUTCString()
// date.toDateString()
// var date = new Date("2015-04-12T01:34:12Z")
// var date = new Date("05/12/2015") This is a short date
// var date = new Date("Mar 15 2015")