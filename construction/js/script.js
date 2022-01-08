

//fvスライド
function slideSwitch() {
  var $active = $('#slideshow img.active');

  if ( $active.length == 0 ) $active = $('#slideshow img:last');

  var $next =  $active.next().length ? $active.next()
     : $('#slideshow img:first');

  $active.addClass('last-active');

  $next.css({opacity: 0.0})
     .addClass('active')
     .animate({opacity: 1.0}, 1000, function() {
          $active.removeClass('active last-active');
     });
}
$(function() {
  setInterval( "slideSwitch()", 4000 );
});

//construct slider
$('.slider-con').slick({
  autoplay:true,
  autoplaySpeed:5000,
  dots:true,
  slidesToShow:1,
  slidesToScroll:1,
  arrows:false,
  asNavFor:'.thumb',
});

$('.thumb').slick({
  asNavFor:'.slider-con',
  focusOnSelect: true,
  slidesToShow:4,
  slidesToScroll:1
});

//ハンバーガーメニュー
$(function() {
  $('.menu-btn').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.gnavi__sp-style').addClass('active');
      } else {
          $('.gnavi__sp-style').removeClass('active');
      }
  });
});
