Package.describe({
  summary: "Unify theme",
  version: "1.0.0",
  git: ""
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2.2');
  api.use('templating', 'client');
  api.addFiles('gad:meteor-unify.js');

  api.addFiles('unify.html', 'client');
  api.addFiles('unify.js', 'client');
  api.addFiles('unify_body.html', 'client');
  api.addFiles('unify_body.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('gad:meteor-unify');
  api.addFiles('gad:meteor-unify-tests.js');
});
