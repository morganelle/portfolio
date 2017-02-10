'use strict';

// global variables
var projects = [];

// project constructor
function Project(options) {
  this.image = options.image; // need to set up image folder structure first
  this.title = options.title;
  this.clientName = options.clientName;
  this.role = options.role;
  this.category = options.category; // need to decide if this should be an array
  this.summary = options.summary;
  this.link = options.link;
}

// method to create new project article from template
Project.prototype.populateTemplate = function() {
  var $newProject = $('article.template').clone();
  $newProject.removeClass('template');
  $newProject.find('h2').html(this.title);
  $newProject.find('.client span').text(this.clientName);
  $newProject.find('.role span').html(this.role);
  $newProject.find('p.summary').html(this.summary);
  $newProject.append('<a href="' + this.link + '">' + this.link + '</a>');
  return $newProject;
}

projectData.forEach(function(projectDatum) {
  projects.push(new Project(projectDatum));
});

projects.forEach(function(p) {
  $('#projects').append(p.populateTemplate());
})
