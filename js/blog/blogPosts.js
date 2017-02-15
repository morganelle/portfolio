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

// Gets the Handlebar template and makes a function
BlogContent.prototype.populateTemplate = function() {
  var source = $('#blog-template').html();
  var template = Handlebars.compile(source);
  return template(this);
}

BlogContent.load = function(newData) {
  console.log('BlogContent method is running');
  newData.sort(function(a,b) {
    return (new Date(b.publishedDate)) - (new Date(a.publishedDate));
  });
  newData.forEach(function(post) {
    blogPosts.push(new BlogContent(post));
  })
}

BlogContent.toHtml = function(blogs) {
  blogs.forEach(function(item) {
    $('#blog').append(item.populateTemplate());
  })
}

function chooseSource() {
  if (localStorage.blogcontent) {
    console.log('loading from local storage');
    BlogContent.load(JSON.parse(localStorage.blogcontent));
    BlogContent.toHtml(blogPosts);
  }
  else {
    console.log('loading from json file');
    $.getJSON('../data/blogContent.json', function(data) {
      localStorage.setItem('blogcontent', JSON.stringify(data));
      BlogContent.load(data);
      BlogContent.toHtml(blogPosts);
    });
  }
}

chooseSource();
