'use strict';

(function(module) {
  // clear function to remove previously appended projects
  const clear = function() {
    $('#projects').find('article.project').remove();
  };
  const projectView = {};

  projectView.display = function() {
    clear();
    Project.all.forEach(project => $('#projects').append(project.populateTemplate()));
  }
  // expose projectView object to global space
  module.projectView = projectView;
})(window);
