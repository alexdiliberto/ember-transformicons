import Ember from 'ember';

const {
  Controller,
  Logger
} = Ember;

export default Controller.extend({
  isAdded: false,

  actions: {
    updateAddAction(isAdded) {
      Logger.info(`updateAddAction was triggered with the following arguments: isAdded=${isAdded}`);
    }
  }
});
