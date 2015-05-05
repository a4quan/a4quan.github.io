var main = function() {
  $('.about').click(function() {
    window.location.replace("http://a4quan.github.io/about");

  });

  $('.resume').click(function() {
    window.location.replace("http://a4quan.github.io/resume");

  });

  $('.contact').click(function() {
    window.location.replace("http://a4quan.github.io/contact");

  });

  $('.about').css( 'cursor', 'pointer' );
  $('.resume').css( 'cursor', 'pointer' );
  $('.contact').css( 'cursor', 'pointer' );
};

$(document).ready(main);