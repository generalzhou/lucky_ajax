  // PSEUDO-CODE:
  //   1- intercept the form submission event using jQuery
  //   2- prevent the default action for that event from happening
  //   3- generate a random number between 1 and 6 using JavaScript
  //   4- use jQuery to submit an AJAX post to the form's action
  //   5- when the AJAX post is done, replace the contents of the "#die" DIV in the DOM using jQuery

$(document).ready( function() {
  $('form').submit( function(event) {
    event.preventDefault();
    var action = $(this).attr("action");
    var rand_num = 1 + Math.floor(Math.random() * 6);
    $.post(action, {"value": rand_num}, function(img_name) {
      $('img').remove();
      $('#die').append("<img src='/" + img_name + ".png' title='" + img_name + "' alt='the roll'>");
    });
  });
});
