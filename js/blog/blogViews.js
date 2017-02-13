'use strict';

// Hides for preview section by default
$('#preview').hide();

// Registers event on blog-fields form
$('#blog-fields').on('change', function() {
  console.log('blog fields change');
  $('#preview').show();
  $('article.blog-post').remove();
  blogPreview();
});

// Get information from form
function blogPreview() {
  // instantiate new blog object
  var blog = new BlogContent({
    title: $('#post-title').val(),
    publishedDate: (new Date($('#post-date').val())).toDateString(),
    author: $('#post-author').val(),
    postContent: $('#post-content').val(),
    category: ['category']
  });
  console.log(blog);
  // Append blog content to preview section
  $('#preview').append(blog.populateTemplate());
  $('#blog-json').val(JSON.stringify(blog) + ',');
}
