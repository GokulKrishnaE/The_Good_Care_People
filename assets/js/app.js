$(document).ready(function(){
    
// include html
  let includes = $('[data-include]')
  jQuery.each(includes, function(){
    let html = '/' + $(this).data('include') + '.html'
    $(this).load(html)
  })
  $('[data-bs-toggle="tooltip"]').tooltip()

  $('.product-thumbnail').slick({
    dots: true,
    prevArrow: false,
    nextArrow: false,
    infinite: true,
  });
  $('.hero-slider').slick({
    dots: false,
    autoPlay:true,
    infinite: true,
    slidesToShow: 1,
    prevArrow: "<button class='slick-arrow-button left-arrow'><i class='bx bx-chevron-left'></i></button>",
    nextArrow: "<button class='slick-arrow-button right-arrow'><i class='bx bx-chevron-right'></i></button>",   
  });

  $('.match-height').matchHeight()

  $('input[name="billingAddress"]').change(function(){
    if($(this).val() === 'sameAddress'){
      $('.newBillingAddress').hide()
    }
    else{
      $('.newBillingAddress').show()
    }
  })

})

$(document).ajaxStop(function(){
  $('.match-height').matchHeight()
  $('.card-content .card-top').matchHeight()
  $('[data-bs-toggle="tooltip"]').tooltip()

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
       $('header').addClass('header-sticky');
    } else {
       $('header').removeClass('header-sticky');
    }
    if ($(this).scrollTop() > 400) {
       $('#scrollToTop').addClass('active')
    } else {
       $('#scrollToTop').removeClass('active')
    }
 });

 $('#scrollToTop').click(function(e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, 600); // 600ms for smooth scroll
  return false;
});

$('.navbar-toggler').click(function(){
  $('body').toggleClass('overflow-hidden')
})



    
})