$(window).on('load', function() {
  // MAP
  $('#mapicon').on('click', function(){
    $('#welcome').fadeOut();
    $('#overlay').delay(400).fadeIn();
    $('#map-pop').delay(400).fadeIn();
  });
  $('#closemap').on('click', function(){
    $('#overlay').fadeOut();
    $('#map-pop').fadeOut();
    $('#welcome').delay(400).fadeIn();
  });
  $("#dot").hover(
  function() {
    $('#dot-info').show();
  }, function() {
    $('#dot-info').hide();
  });
  // NAV
  $('#open-nav').on('click', function(){
    $('#nav').toggle('slide', { direction: "left" });
    $('#open-nav').fadeTo(400, 0);
    $('#mapicon').fadeTo(400, 0);
  });
  $('#close-nav').on('click', function(){
    $('#nav').toggle('slide', { direction: "left" });
    $('#open-nav').fadeTo(400, 1);
    $('#mapicon').fadeTo(400, 1);
  });
});
