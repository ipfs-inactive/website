var $ = require('jquery')

function renderPosts (data) {
  var $container = $('#latest-list')
  $container.empty()
  data.posts.slice(0, 4).forEach(function (post) {
    var $el = $('<li><span class="date">' + post.date + '</span> <a href="/blog' + post.url + '">' + post.title + '</a></li>')
    $container.append($el)
  })
}

module.exports = function () {
  var rssLink = $('link[type="application/rss+xml"]')
  if (!rssLink) throw new Error('No RSS link in page')

  var url = rssLink.attr('href').replace('xml', 'json')
  $.getJSON(url)
    .done(renderPosts)
}
