'use strict';

(function(module) {
  const journalController = {};

  journalController.display = function() {
    console.log('journalcontroller is running');
    $('#page-content section').hide();
    $('#blog').show().siblings();
  }
  module.journalController = journalController;
})(window);
