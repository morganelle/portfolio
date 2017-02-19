'use strict';

(function(module) {
  // Array of blog post objects
  var blogPosts = [];

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
    var source = $('#blog-template').html();
    var template = Handlebars.compile(source);
    return template(this);
  }

  BlogContent.load = function(newData) {
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
