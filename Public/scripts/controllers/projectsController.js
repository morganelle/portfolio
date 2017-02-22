'use strict';

(function(module) {
  const projectsController = {};

  projectsController.display = function() {
    console.log('projectcontroller is running');
    Project.getData(); // need to make the function below a callback
    Project.all.forEach((project) => $('#projects').append(project.populateTemplate()));
    $('#page-content section').hide();
    $('#page-content section#projects').show().siblings();
  }
  module.projectsController = projectsController;
})(window);
