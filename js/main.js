// Make it rain!!!
console.log("Hello!");
$('.grid-wrapper-expresso, .grid-wrapper-tea').hide();

//$(window).on('scroll',function(){
//$('header nav').addClass('nav_scroll_color');
//})


$('.Expresso-Classics').on('click',function(event){
  event.preventDefault();
  $('.grid-wrapper-coffee, .grid-wrapper-tea').hide();
  $('.grid-wrapper-expresso').fadeIn(350);
})

$('.Tea').on('click',function(event){
  event.preventDefault();
  $('.grid-wrapper-expresso, .grid-wrapper-coffee').hide();
  $('.grid-wrapper-tea').fadeIn(350);
})

$('.Coffee-Menu').on('click',function(event){
  event.preventDefault();
  $('.grid-wrapper-expresso, .grid-wrapper-tea').hide();
  $('.grid-wrapper-coffee').fadeIn(350);
})


$(window).on('scroll', function(){
  var distanceScrolled = $(window).scrollTop();
  console.log(distanceScrolled);

  if (distanceScrolled> 624){
    $('header nav').addClass('scrolled');
  }
  else {
    $('header nav').removeClass('scrolled');
  }

});



$('.gallery').slick({
  dots: false,
  infinite: true,
  speed: 300,
  autoplay: true
});


//if (distanceScrolled> 542){
//  $('header nav').addClass('scrolled-menu');
//  }
//else(distanceScrolled> 542){
