import Ember from 'ember';

const {
  Controller,
  Logger
} = Ember;

export default Controller.extend({
  isGridOpen: false,

  actions: {
    updateGridAction(isOpen) {
      Logger.info(`updateGridAction was triggered with the following arguments: isOpen=${isOpen}`);
    }
  }
});
