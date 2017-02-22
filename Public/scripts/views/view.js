'use strict';

$('.top-nav:first-child').on('click', 'li', function() {
  $('#page-nav li').removeClass('active-nav-item'); // removes active designation from top nav li
  $(this).addClass('active-nav-item'); // adds active designation to clicked nav li
  // $('#page-content section').hide(); // hides all sections on click
  // $('#' + $(this).data('section')).show(); // shows the section that matches the data-section value
  // $('#' + $(this).data('section')).children().not('.template').show(); // works if there are nested sections?
});
