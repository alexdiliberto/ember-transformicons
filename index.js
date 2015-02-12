/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-cli-transformicons',

  included: function included(app) {
    this._super.included(app);

    app.import('vendor/transformicons/transformicons.js');
    app.import('vendor/transformicons/transformicons.css');
  },
  isDevelopingAddon: function isDevelopingAddon() {
    return true;
  }
};
