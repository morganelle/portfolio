'use strict';

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax({
      type: 'GET',
      url: 'https://api.github.com/user/repos',
      headers: {
        Authorization: `token ${githubtoken}`
      }
    }).then(data => repos.all = data)
    .then(function() {
      callback();
    })
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);
