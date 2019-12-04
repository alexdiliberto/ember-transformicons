'use strict';

module.exports = {
  name: require('./package').name,

  included(app) {
    this._super.included.apply(this, arguments);

    app = this._findApp(this);

    app.import('vendor/transformicons/transformicons.css');
  },

  isDevelopingAddon() {
    return false;
  },

  _findApp(addon) {
    let current = addon;
    let app;

    // Keep iterating upward until we don't have a grandparent.
    // Has to do this grandparent check because at some point we hit the project.
    do {
      app = current.app || app;
    } while (current.parent.parent && (current = current.parent));

    return app;
  }
};
