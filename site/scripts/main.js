$(document).on('ready', function() {
  $('.main-wrapper').on('scroll', function() {
    var header = $('header'),
        nav = $('.scroll-nav'),
        mobileNav = $('.mobile-nav');
    if ($(this).scrollTop() >= header.height()) {
      nav.addClass('slide-out');
      mobileNav.addClass('alt-nav-bg');
    } else {
      nav.removeClass('slide-out');
      mobileNav.removeClass('alt-nav-bg');
    }
  });

  var navToggle = $('.nav-toggle'),
      siteWrapper = $('.site-wrapper');

  navToggle.on('click', function() {
    siteWrapper.toggleClass('nav-reveal');
  });

  $('.main-nav a:not(.brand), .mobile-nav a, .cta').on('click', function(e) {
    e.preventDefault();
  });

  $('.mobile-nav li a').on('click', function() {
    if (siteWrapper.hasClass('nav-reveal')) {
      siteWrapper.removeClass('nav-reveal');
    };
  });

  $('.main-nav a[href=#projects]').on('click', function() {
    $.smoothScroll({
      scrollElement: $('.main-wrapper'),
      scrollTarget: $('#projects'),
      speed: 800
    });
  })

  $('.main-nav a[href=#contact]').on('click', function() {
    $.smoothScroll({
      scrollElement: $('.main-wrapper'),
      scrollTarget: $('#contact'),
      speed: 800
    });
  })

  $('.main-nav a[href=#about]').on('click', function() {
    $.smoothScroll({
      scrollElement: $('.main-wrapper'),
      scrollTarget: $('#about'),
      speed: 800
    });
  })

  $('.cta[href=#projects]').on('click', function() {
    $.smoothScroll({
      scrollElement: $('.main-wrapper'),
      scrollTarget: $('#projects'),
      speed: 800
    });
  })

  $('.cta[href=#contact]').on('click', function() {
    $.smoothScroll({
      scrollElement: $('.main-wrapper'),
      scrollTarget: $('#contact'),
      speed: 800
    });
  })
});