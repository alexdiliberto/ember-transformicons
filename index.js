/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-transformicons',

  included: function(app) {
    this._super.included.apply(this, arguments);

    if (!process.env.EMBER_CLI_FASTBOOT) {
      // see: https://github.com/ember-cli/ember-cli/issues/3718
      if (typeof app.import !== 'function' && app.app) {
        app = app.app;
      }

      app.import('vendor/transformicons/transformicons.css');
    }
  },

  isDevelopingAddon: function() {
    return true;
  }
};
