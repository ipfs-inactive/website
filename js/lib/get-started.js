var $ = require('jquery')

module.exports = function() {
  $(document).ready(function() {
    var ctx = '.option-blocks'
    $('input[type=checkbox]', ctx).on('click', function() {
      var selected = this
      $('input[type=checkbox]:checked', ctx).each(function() {
        if (this !== selected) $(this).prop('checked', false)
      })
    })
  })
}
