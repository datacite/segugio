function banner() {
  var banner = $("<div>").attr("id", "banner").text("This service is for testing only.");
  $("body").prepend(banner);
}

$(document).ready(banner);
