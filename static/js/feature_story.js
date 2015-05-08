/* Feature Stories - rotating files/images 
 * Adding touch support (swipe left or right)
 * Depends on JQuery Mobile
 */
jQuery(document).ready(function($) {
  
  $("#osu-feature-story").swiperight(function() {
    $("#osu-feature-story").carousel('prev');
  });
  
  $("#osu-feature-story").swipeleft(function() {
    $("#osu-feature-story").carousel('next');
  });
  
  /* Auto Rotates bootstrap carousel */
  $('#osu-feature-story').carousel({
      interval: 5000
  });

});
