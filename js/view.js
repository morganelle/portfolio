'use strict';

$('ul#page-nav').on('click', 'li', function() {
  $('#page-content section').hide();
  $('#' + $(this).data('section')).show();
  $('#' + $(this).data('section')).children().show(); // works if there are nested sections?
});
