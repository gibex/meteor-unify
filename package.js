Package.describe({
  summary: "Unify theme",
  version: "1.0.0",
  git: ""
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2.2');
  api.use('templating', 'client');

  api.addFiles('unify.html', 'client');
  api.addFiles('unify.js', 'client');
  api.addFiles('unify_body.html', 'client');
  api.addFiles('unify_body.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
});
