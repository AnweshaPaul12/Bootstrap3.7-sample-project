$( document ).ready(function() {
  var window_top = $(window).scrollTop();
var div_top = $('.action-container-block').offset().top;

$(window).scroll(function(){
var sticky = $('.right-action-sidebar'),
scroll = $(window).scrollTop();

if (scroll >= top){
setTop = 0;
sticky.addClass('sticky');
sticky.css('top', setTop);
sticky.css('width', width);
}else{
sticky.removeClass('sticky');
}
});
});
