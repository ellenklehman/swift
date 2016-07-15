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

  $("form#comment-form").submit(function(event) {
    var comment = $("input#comment").val();
    $("ul#comment-list").prepend("<li>" + comment + "</li>");
    $("input#comment").val("");

    $("ul#comment-list").children("li").first().click(function() {
      $(this).remove();
    });
    event.preventDefault();
  });

});