'use strict';
(function(module) {
  // global variables
  Project.all = [];

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
    let template = Handlebars.compile($('#article-template').html());
    return template(this);
  }

  Project.getData = function() {
    $.getJSON('../../data/projectContent.json')
    .then(data => Project.all = data.map(datum => new Project(datum)));
  }

  Project.all.forEach((project) => $('#projects').append(project.populateTemplate()));
  module.Project = Project;
})(window);
