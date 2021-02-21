/* eslint-env node */
'use strict';

module.exports = {
  allowedVersions: {
    // NOTE: Necessary until we can upgrade all dependencies in the tree relying on these packages
    'ember-test-waiters': '*',
    'ember-truth-helpers': '*',
  },
};
