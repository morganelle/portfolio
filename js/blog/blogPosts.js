'use strict';

console.log('blog posts has loaded');

// Array of blog post objects
var blogPosts = [];

// Constructor
function BlogContent(opts) {
  this.title = opts.title;
  this.publishedDate = (new Date(opts.publishedDate)).toDateString();
  this.author = opts.author;
  this.postContent = opts.postContent;
  this.category = opts.category;
}

// Gets the Handlebar template and makes a function out of it
BlogContent.prototype.populateTemplate = function() {
  var source = $('#blog-template').html();
  var template = Handlebars.compile(source);
  return template(this);
}

// Sorts blog posts by date
blogData.sort(function(a,b) {
  return (new Date(b.publishedDate)) - (new Date(a.publishedDate));
});

// Makes a new BlogContent object and pushes it to the blogPosts array
blogData.forEach(function(post) {
  blogPosts.push(new BlogContent(post));
})

// Runs the populateTemplate method on all items and appends them to the blog section
blogPosts.forEach(function(item) {
  $('#blog').append(item.populateTemplate());
})
