import Ember from 'ember';

const {
  Controller,
  Logger
} = Ember;

export default Controller.extend({
  isMenuOpen: false,

  actions: {
    updateMenuAction(isMenuOpen) {
      Logger.info(`updateMenuAction was triggered with the following arguments: isMenuOpen=${isMenuOpen}`);
    }
  }
});
