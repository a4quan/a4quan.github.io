var main = function() {
  $('.about').click(function() {
    window.location.replace("../about/index.html");

  });

  $('.resume').click(function() {
    window.location.replace("../resume/index.html");

  });

  $('.contact').click(function() {
    window.location.replace("../contact/index.html");

  });

  $('.about').css( 'cursor', 'pointer' );
  $('.resume').css( 'cursor', 'pointer' );
  $('.contact').css( 'cursor', 'pointer' );
};

$(document).ready(main);