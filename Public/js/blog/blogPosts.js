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
    this.category = opts.category.join(', ');
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

  // trying get with postgres
  // BlogContent.getBlogPosts = function() {
  //   $.get('/blogposts')
  //   .then(function(results) {
  //     console.log('results:', results);
  //     if (results.length) {
  //       console.log(results.length);
  //       BlogContent.load(results);
  //     }
  //     else {
  //       $.getJSON('./data/blogContent.json')
  //       .then(function(jsonData) {
  //         jsonData.forEach(function(item) {
  //           let blogpost = new BlogContent(item);
  //           blogpost.insertRecord(); // Add each record to the DB
  //         })
  //       })
  //     }
  //   });
  // }
  //
  // BlogContent.prototype.insertRecord = function(callback) {
  //   $.post('/blogcontent', {title: this.title, author: this.author, postContent: this.postContent, category: this.category, publishedDate: this.publishedDate})
  //   .then(function(data) {
  //     console.log(data);
  //     if (callback) callback();
  //   })
  // };

  // gets etag from HEAD and compares it with etag set in localStorage
  $.ajax({
    type: 'HEAD',
    async: true,
    url: '../data/blogContent.json',
    success: function(data, message, xhr) {
      let etag = xhr.getResponseHeader('ETag');
      if (etag !== localStorage.storageETag) { // if the etags don't match, populate blog content from JSON
        console.log('etags do not match, loading from JSON file');
        $.getJSON('../data/blogContent.json', function(data) {
          BlogContent.load(data);
          BlogContent.toHtml(blogPosts);
          localStorage.setItem('blogcontent', JSON.stringify(data));
        });
      }
      else { // otherwise, get the blog content from localStorage
        console.log('etags match, loading from local storage');
        BlogContent.load(JSON.parse(localStorage.blogcontent));
        BlogContent.toHtml(blogPosts);
      }
      localStorage.setItem('storageETag', etag);
    },
    fail: function() {
      console.log('fail'); // wondering: should the fail condition just grab content from the JSON file?
    }
  });
  module.BlogContent = BlogContent;
})(window);
