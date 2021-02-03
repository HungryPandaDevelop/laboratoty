$(document).ready(function () {

  let sliderTabs = $('.slider-tabs a');
  let sliderSection  = $('.slider-section');
  sliderSection.removeClass('active').eq(0).addClass('active');
  sliderTabs.on('click',function(event){
    event.preventDefault();
    sliderTabs.removeClass('active').eq($(this).data('index')).addClass('active');
    sliderSection.removeClass('active').eq($(this).data('index')).addClass('active');
    
  });

  var owlSlider = $(".slider-owl");

  owlSlider.owlCarousel({
    items: 1,
    nav: true,
    dots: false
  });

  var owlSliderItems = $(".slider-items");

  owlSliderItems.owlCarousel({
    items: 4,
    nav: true,
    dots: false,
    margin: 20
  });

  var newsSlider = $(".slider-news");

  newsSlider.owlCarousel({
    items: 1,
    nav: false,
    dots: true
  });



  var newsDetailSlider = $(".news-detail-slider");

  newsDetailSlider.owlCarousel({
    items: 1,
    nav: true,
    dots: false
  });
});