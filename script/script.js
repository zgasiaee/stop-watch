$(document).ready(function () {
  var miliSecond = 000
  var second = 00
  var minute = 00
  var hour = 00
  var timer = null

  //start
  $('.start').click(function () {
    if (timer != null) {
      clearInterval(timer)
    }
    timer = setInterval(displayTime, 10)
  })

  //reset
  $('.reset').click(function () {
    clearInterval(timer)
    miliSecond = 000
    second = 00
    minute = 00
    hour = 00
    $('.time').html('00:00:00:000')
  })

  //stop
  $('.stop').click(function () {
    clearInterval(timer)
  })

  function displayTime() {
    miliSecond += 10
    if (miliSecond == 1000) {
      miliSecond = 0
      second++
      if (second == 60) {
        second = 0
        minute++
        if (minute == 60) {
          minute = 0
          hour++
        }
      }
    }

    var h = hour < 10 ? `0${hour}` : hour
    var m = minute < 10 ? `0${minute}` : minute
    var s = second < 10 ? `0${second}` : second
    var ms =
      miliSecond < 10
        ? `00${miliSecond}`
        : miliSecond < 100
        ? `0${miliSecond}`
        : miliSecond

    $('.time').html(`${h}:${m}:${s}:${ms}`)
  }
})
