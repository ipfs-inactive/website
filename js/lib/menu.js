var $ = require('jquery')

module.exports = function () {
  $(document).ready(function () {
    // enable tab selection on burger menu
    $('.menu-toggle-acc').on('keypress', function (event) {
      if (event.which === 13) {
        $('.menu-toggle').click()
      }
    })
  })
}
