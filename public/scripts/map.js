$(window).on('load', function() {
  $('#mapicon').on('click', function(){
    $('#welcome').fadeOut();
    $('#overlay').fadeIn();
    $('#map-pop').fadeIn();
  });
  $('#closemap').on('click', function(){
    $('#overlay').fadeOut();
    $('#map-pop').fadeOut();
    $('#welcome').delay(400).fadeIn();
  });
});
