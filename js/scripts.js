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


  $("button#add-order").click(function() {
    var age = parseInt(prompt("What is your age?"));
    if (age >= 18) {
      $(".form").append('<form id="order-form">' +
        '<div class="form-group">' +
          '<label for="name">Name:</label>' +
          '<input class="form-control" id="name" type="text" placeholder="Joe Smith">' +
        '</div>' +
        '<div class="form-group">' +
          '<label for="email">Email:</label>' +
          '<input class="form-control" type="email" id="email" placeholder="joe.smith@mail.com">' +
        '</div>' +
        '<div class="checkbox">' +
          '<label>' +
            '<input type="checkbox" name="pastry" value="Cherry pie">' + 'Washington\'s Cherry Pie' +
          '</label>' +
        '</div>' +
        '<div class="checkbox">' +
          '<label>' +
            '<input type="checkbox" name="pastry" value="Chocolate cake"> Let Them Eat Chocolate Cake' +
          '</label>' +
        '</div>' +
        '<div class="checkbox">' +
          '<label>' +
            '<input type="checkbox" name="pastry" value="Rice Crispy"> Paul Revere\'s Midnight Rice Crispy' +
          '</label>' +
        '</div>' +
        '<button type="submit" id="order-btn" class="btn">Place order!</button>' +
      '</form>');
    } else {
      alert("Sorry you are not old enough to buy our baked goods!");
    }
  });

  $("form#order-form").submit(function(event){
    alert("hi");
    var name = $("input#name").val();
    var email = $("input#email").val();
    var pastries = [];
    $("input:checkbox[name=pastry]:checked").each(function(){
      var individualPastry = $(this).val();
      pastries.push(individualPastry);
    });
    // $(".receipt-name").append(name);
    // $(".receipt-email").append(email);
    // pastries.forEach(function(pastry) {
    //   $(".receipt-pastries").append("<li>"+ pastry + "</li>");
    // });
    $("#receipt").show();

    event.preventDefault();
  });



  $("form#comment-form").submit(function(event){
    var comment = $("input#comment").val();
    $("ul#comment-list").prepend("<li>" + comment + "</li>");
    $("input#comment").val("");

    $("ul#comment-list").children("li").first().click(function() {
      $(this).remove();
    });
    event.preventDefault();
  });

});
