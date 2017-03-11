$(window).on('load', function() {
  $('#mapicon').on('click', function(){
    $('#overlay').fadeIn();
    $('#map-pop').fadeIn()
  });
  $('#closemap').on('click', function(){
    $('#overlay').fadeOut();
    $('#map-pop').fadeOut()
  });
});
