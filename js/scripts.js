$(document).ready(function() {
  $("img").click(function() {
    $("#image-description").toggle();
  });

  $("button#green").click(function() {
    $("body").addClass("green-background");
  });

  $("button#none").click(function() {
    $("body").removeClass("green-background");
  });

});