// jQuery(function($) {
$(document).ready( function() {
    $('.nav').stickUp();
    $("#owl-demo").owlCarousel({

      autoPlay: 3000, //Set AutoPlay to 3 seconds

      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]

  });
  $("#iphone").owlCarousel({
    autoPlay: 3000,
    items: 1,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,3]
  });
  $("#pop").on("click", function() {
    $('#imagepreview').attr('src', $('#imageresource').attr('src'));
    $('#imagemodal').modal('show');

  });
});
// });
