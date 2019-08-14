var $ = require("jquery")

module.exports = function() {
  $(document).ready(function() {
    console.log("running")
    $(".option-blocks input[type=checkbox]").on("click", function() {
      console.log(this.checked)
    })
  })
}
