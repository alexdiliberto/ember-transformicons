/* eslint-env node */
'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    // Add options here
    nodeAssets: {
      'bootstrap': {
        vendor: {
          srcDir: 'dist',
          destDir: 'bootstrap',
          include: [
            'css/bootstrap.css',
            'css/bootstrap.css.map',
            'fonts/glyphicons-halflings-regular.eot',
            'fonts/glyphicons-halflings-regular.svg',
            'fonts/glyphicons-halflings-regular.ttf',
            'fonts/glyphicons-halflings-regular.woff',
            'fonts/glyphicons-halflings-regular.woff2'
          ]
        }
      }
    }
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */
  app.import('vendor/bootstrap/css/bootstrap.css');
  app.import('vendor/bootstrap/css/bootstrap.css.map', { destDir: 'assets' });
  app.import('vendor/bootstrap/fonts/glyphicons-halflings-regular.eot', { destDir: 'fonts' });
  app.import('vendor/bootstrap/fonts/glyphicons-halflings-regular.svg', { destDir: 'fonts' });
  app.import('vendor/bootstrap/fonts/glyphicons-halflings-regular.ttf', { destDir: 'fonts' });
  app.import('vendor/bootstrap/fonts/glyphicons-halflings-regular.woff', { destDir: 'fonts' });
  app.import('vendor/bootstrap/fonts/glyphicons-halflings-regular.woff2', { destDir: 'fonts' });

  return app.toTree();
};
