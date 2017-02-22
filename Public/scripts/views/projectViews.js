'use strict';

(function(module) {
  console.log('project views running');
  const projectView = {};
  projectView.display = function() {
    Project.all.forEach(project => $('#projects').append(project.populateTemplate()));
  }
  module.projectView = projectView;
})(window);
