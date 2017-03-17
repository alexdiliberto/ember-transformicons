import Ember from 'ember';

const {
  Controller,
  Logger
} = Ember;

export default Controller.extend({
  isRemoved: false,

  actions: {
    updateRemoveAction(isRemoved) {
      Logger.info(`updateRemoveAction was triggered with the following arguments: isRemoved=${isRemoved}`);
    }
  }
});
