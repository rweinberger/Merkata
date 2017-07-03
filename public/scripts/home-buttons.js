function toggleNav(a) {
  $('#open-nav').fadeTo(400, a);
  $('#nav').toggle('slide', { direction: "left" });
};

function toggleMap(a) {
  if (a == 1) {
    $('#welcome').fadeOut();
    $('#overlay').delay(400).fadeIn();
    $('#map-pop').delay(400).fadeIn();
  } else {
    $('#welcome').delay(400).fadeIn();
    $('#overlay').fadeOut();
    $('#map-pop').fadeOut();
  }
}

$(window).on('load', function() {
  // MAP
  $('.openmap').on('click', function(){
    toggleMap(1)
  });
  $('#closemap').on('click', function(){
    toggleMap(0)
  });
  $("#dot").hover(
  function() {
    $('#dot-info').show();
  }, function() {
    $('#dot-info').hide();
  });
  // NAV
  $('#open-nav').on('click', function(){
    toggleNav(0)
  });
  $('#close-nav').on('click', function(){
    toggleNav(1)
  });
  $('#map-nav').on('click', function(){
    toggleNav(1)
  })
});
