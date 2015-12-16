$( document ).ready(function() {

  var words = ["Lorem ", "ipsum ", "delor", "sit", "amet", "consect", "adipisci", "elit,", "sed.", "Eiusmod", "tempor", "a", "enim", "minim", "season", "nulla", "dolore", "sint", "id", "est", "laboris", "ut.", "aute", "laborum", "toe"];

  var message = "";

  // Create custom greeting
  var hash = window.location.hash;
  var name = hash.match(/[^#]+/g)[0];
  $('#greeting').html(name);

  // function to reveal message
  var cardReveal = function() {
    $("#message").text(message).show();
  }   
    // Loop through each calendar window
    $("li").each( function( index ) {
      var adventwindow = index + 1;
      var item = $(this);


      // Add words so far to message variable

      var word = words[index];
      $(this).append('<div class="revealed">' + word + '</div>');
      message = message + " " + word;
      
      // On clicking a window, toggle it open/closed and
      // handle other things such as removing jiggle and 25th
      $(this).on("click", function() {
        $(this).children(".door").toggleClass("open");
      });

    });

});
