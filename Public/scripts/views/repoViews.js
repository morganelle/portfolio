'use strict';

(function(module) {
  const repoView = {};

  // const ui = function() {
  //   let $about = $('#about'); // Best practice: Cache the DOM query if it's used more than once.
  //
  //   $about.find('ul').empty();
  //   $about.show().siblings().hide();
  // };

  let template = Handlebars.compile($('#repo-template').html());

  repoView.display = function() {
    // ui();
    console.log('repoView display begins');
    $('#projects ul').append(
      repos.with('name').map(template)
    );
  };

  module.repoView = repoView;
})(window);
