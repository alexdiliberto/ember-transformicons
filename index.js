'use strict';

module.exports = {
  name: 'ember-transformicons',

  included(app) {
    // Old syntax necessary to support Node v4 Ember apps
    // SEE: https://github.com/ember-cli/ember-cli/commit/1c1a2159c02e8e2c467f5f62f86db57c519261af
    /* eslint-disable prefer-spread */
    this._super.apply(this, arguments);

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
