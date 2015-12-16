$( document ).ready(function() {

  // Create custom greeting
  var hash = window.location.hash;
  var name = hash.match(/[^#]+/g)[0];

  var greeting = 'Dear ' + name;
  $('#greeting').html(greeting);

});
