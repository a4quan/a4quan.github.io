var main = function() {
  $('.about').click(function() {
    window.location.replace("http://a4quan.github.io/about/index.html");

  });

  $('.resume').click(function() {
    window.location.replace("http://a4quan.github.io/about/index.html");

  });

  $('.contact').click(function() {
    window.location.replace("http://a4quan.github.io/about/index.html");

  });

  $('.about').css( 'cursor', 'pointer' );
  $('.resume').css( 'cursor', 'pointer' );
  $('.control').css( 'cursor', 'pointer' );
};

$(document).ready(main);