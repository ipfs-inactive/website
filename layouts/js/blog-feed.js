var $ = require('jquery')
var xmlhttp = new window.XMLHttpRequest()
var url = window.BLOG_URL + '/index.json'

xmlhttp.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    var data = JSON.parse(this.responseText)
    console.log(data)
    renderPosts(data.posts)
  }
}
xmlhttp.open('GET', url, true)
xmlhttp.send()

function renderPosts (posts) {
  var $container = $('#latest-list')
  posts.slice(0, 4).forEach(function (post) {
    var $el = $('<li><span class="date">' + post.date + '</span> <a href="' + post.url + '">' + post.title + '</a></li>')
    $container.append($el)
  })
}
