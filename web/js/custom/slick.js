


// FOR PORTFOLIO SECTION SLIDER
$('.port-slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: true,
    speed: 1000,
    prevArrow: '<i class="fas fa-long-arrow-alt-right dandik"></i>',
    nextArrow: '<i class="fas fa-long-arrow-alt-left bamdik"></i>',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
          arrows: false,
        }
      }
    ]
});


  // FOR TESTIMONIAL SLIDER
  $('.testi-slider').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: true,
    fade: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<i class="fas fa-long-arrow-alt-right dandik"></i>',
    nextArrow: '<i class="fas fa-long-arrow-alt-left bamdik"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
});


// FOR FEATURE SECTION SLIDER
$('.feature-slider').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    fade: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '<i class="fas fa-long-arrow-alt-right dandik"></i>',
    nextArrow: '<i class="fas fa-long-arrow-alt-left bamdik"></i>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
          arrows: false,
        }
      }
    ]
});


// FOR BLOG SUGGEST SLIDER
$('.suggest-slider').slick({
  dots: false,
  infinite: true,
  adaptiveHeight: false,
  variableWidth: true,
  speed: 800,
  autoplay: true,
  arrows: true,
  fade: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<i class="fas fa-long-arrow-alt-right dandik"></i>',
  nextArrow: '<i class="fas fa-long-arrow-alt-left bamdik"></i>',
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }
  ]
});


// FOR DEMO THEME SLIDER
$('.theme-slider').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  fade: false,
  autoplay: true,
  arrows: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: '<i class="fas fa-chevron-right dandik"></i>',
  nextArrow: '<i class="fas fa-chevron-left bamdik"></i>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }
  ]
});











