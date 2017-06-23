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
    console.log('hello');
    $('#nav').show()
  });
  $('#close-nav').on('click', function(){
    $('#nav').hide()
  });
});
