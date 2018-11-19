$(document).ready(function() {
  'use strict'; // Start of use strict
  /* Initializing variables */

  $('.sidenav').sidenav();
  /* materialbox pops up the image */
  $('.materialboxed').materialbox();
  /* Enables modal pop-up */
  $('.modal').modal();

  $('.scrollspy').scrollSpy();

  // collapsible skills menu
  $(document).ready(function() {
    $('.collapsible').collapsible();
  });

   // Scroll to top button appear
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#scroll').fadeIn();
    } else {
      $('#scroll').fadeOut();
    }
  });
  $('#scroll').click(function () {
    $("html, body").animate({scrollTop: 0}, 600);
    return false;
  });


  // change text using ternary operator
  /* See Reference here:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator */
  $('#parent-text').click(function() {
    $('#child-text').fadeOut(function() {
      $('#child-text')
        .text($('#child-text').text() == 'add' ? 'clear' : 'add')
        .fadeIn();
    });
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      let target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate(
          {
            scrollTop: target.offset().top - 70
          },
          1000,
          'easeInOutExpo'
        );
        return false;
      }
    }
  });
  $.widget.bridge('uitooltip', $.ui.tooltip);
    /* Initializes the hover */
  $('.tooltipped').tooltip();

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.sidenav').sidenav('close');
  });
});
