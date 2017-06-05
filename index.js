/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-cli-transformicons',

  included(app) {
    this._super(...arguments);

    // see: https://github.com/ember-cli/ember-cli/issues/3718
    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    app.import('vendor/transformicons/transformicons.css');
  },

  isDevelopingAddon() {
    return false;
  }
};
