'use strict';

(function(module) {
  const projectsController = {};

  projectsController.display = function() {
    console.log('projectcontroller is running');
    // updates nav appearance
    $('#page-nav li').removeClass('active-nav-item');
    $('#page-nav li.projects').addClass('active-nav-item');
    Project.getData();
      // .then(
      //   Project.all.forEach((project) => $('#projects').append(project.populateTemplate()))
      // );
    // Project.all.forEach((project) => $('#projects').append(project.populateTemplate()));
    // displays content
    $('#page-content section').hide();
    $('#page-content section#projects').show().siblings();
  }
  module.projectsController = projectsController;
})(window);
