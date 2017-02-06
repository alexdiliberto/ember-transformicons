var FASTBOOT_DEPS = {
  'ember-cli-fastboot': '~1.0.0-beta.15'
};

function addFastbootDeps(app) {
  // runs synchronously
  app.editPackageJSON(function(pkg) {
    Object.keys(FASTBOOT_DEPS).forEach(function(key) {
      pkg['devDependencies'][key] = FASTBOOT_DEPS[key];
    });

  });
  return app.run('npm', 'install');
}

module.exports = addFastbootDeps;
