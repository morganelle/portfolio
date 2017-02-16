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
  var source = $('#article-template').html();
  var template = Handlebars.compile(source);
  console.log(template);
  return template(this);
}

projectData.forEach(function(projectDatum) {
  projects.push(new Project(projectDatum));
});

projects.forEach(function(project) {
  $('#projects').append(project.populateTemplate());
})
