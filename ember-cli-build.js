'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
const UnwatchedDir = require('broccoli-source').UnwatchedDir;
const MergeTrees = require('broccoli-merge-trees');
const Funnel = require('broccoli-funnel');

// NOTE: https://github.com/ember-learn/ember-cli-addon-docs/blob/v0.5.3/index.js#L253-L278
function generateDefaultProject() {
  // We need to be very careful to avoid triggering a watch on the addon root here
  // because of https://github.com/nodejs/node/issues/15683
  let packageDetails = new Funnel(new UnwatchedDir('.'), {
    include: ['package.json', 'README.md']
  });

  let addonFiles = new Funnel('addon', {
    exclude: ['**/-private/**']
  });

  return new MergeTrees([packageDetails, addonFiles]);
}

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    // Add options here
    'ember-cli-addon-docs': {
      projects: {
        main: generateDefaultProject()
      }
    }
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};