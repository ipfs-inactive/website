var $ = require('jquery')

module.exports = function () {
  var ctx = '.option-blocks'
  var lastOption = null

  function trackLinkClick (event) {
    if (!window.ga) return
    window.ga('send', 'event', {
      eventCategory: 'link',
      eventAction: 'click',
      eventLabel: event.target.href
    })
  }
  function trackOptionClick (el) {
    if (!window.ga) return
    var title = $(el).closest('.option-block').find('h4').text().toLowerCase()
    window.ga('send', 'event', {
      eventCategory: el.checked ? 'open option' : 'close option',
      eventAction: 'click',
      eventLabel: title
    })
  }

  $(document).ready(function () {
    // setup link tracking for all of the homepage
    $('a').on('click', function (event) {
      trackLinkClick(event)
    })
    // setup click action on option section
    $('input[type=checkbox]', ctx).on('click', function () {
      lastOption = this
      trackOptionClick(lastOption)
      // close all other option options
      $('input[type=checkbox]:checked', ctx).each(function () {
        if (this !== lastOption) $(this).prop('checked', false)
      })
    })
  })
}
