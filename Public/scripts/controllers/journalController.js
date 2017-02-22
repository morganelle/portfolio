'use strict';

(function(module) {
  const journalController = {};

  journalController.display = function() {
    console.log('journalcontroller is running');
    // updates nav appearance
    $('#page-nav li').removeClass('active-nav-item');
    $('#page-nav li.journal').addClass('active-nav-item');
    // loads and appends projects
    BlogContent.getBlogPosts();
    // displays content
    $('#page-content section').hide();
    $('#blog').show().siblings();
  }
  module.journalController = journalController;
})(window);
