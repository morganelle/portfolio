'use strict';

(function(module) {
  const projectsController = {};

  projectsController.display = function() {
    console.log('projectcontroller is running');
    // updates nav appearance
    $('#page-nav li').removeClass('active-nav-item');
    $('#page-nav li.projects').addClass('active-nav-item');
    // loads and appends github data
    repos.requestRepos(repoView.display);
    // loads and appends projects
    Project.getData(projectView.display);
    // displays content
    $('#page-content section').hide();
    $('#page-content section#projects').show().siblings();
  }
  module.projectsController = projectsController;
})(window);
