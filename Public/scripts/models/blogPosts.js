'use strict';

(function(module) {
  // Array of blog post objects
  let blogPosts = [];

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
    let template = Handlebars.compile($('#blog-template').html());
    return template(this);
  }

  BlogContent.load = function(newData) {
    newData.sort((a,b) => (new Date(b.publishedDate)) - (new Date(a.publishedDate)));
    blogPosts = newData.map((post) => new BlogContent(post));
  }

  BlogContent.toHtml = function(blogs) {
    blogs.forEach(function(item) {
      $('#blog').append(item.populateTemplate());
    })
  }

  // Creating call to blogposts route and getting/storing posts in postgres
  BlogContent.getBlogPosts = function() {
    $.get('/blogposts')
    .then(function(results) {
      if (results.length) {
        console.log('journal posts loading from database');
        BlogContent.load(results);
        BlogContent.toHtml(blogPosts);
      } else {
        console.log('journal posts loading from JSON');
        $.getJSON('../../data/blogContent.json')
        .then(function(jsonData) {
          jsonData.forEach(function(item) {
            let blogpost = new BlogContent(item);
            blogpost.insertRecord(); // Add each record to the DB
          })
          BlogContent.toHtml(blogPosts);
        })
        .then(function(){
          BlogContent.getBlogPosts();
        })
      }
    })
    .catch(function(error) {
      console.log('getBlogPosts error:---------->', error);
    })
  }

  BlogContent.prototype.insertRecord = function(callback) {
    $.post('/blogposts', {title: this.title, author: this.author, postContent: this.postContent, category: this.category, publishedDate: this.publishedDate})
    .then(function(data) {
      console.log(data);
      if (callback) callback();
    })
  };
  module.BlogContent = BlogContent;
})(window);
