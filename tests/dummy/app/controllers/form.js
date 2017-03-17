import Ember from 'ember';

const {
  Controller,
  Logger
} = Ember;

export default Controller.extend({
  isSearching: false,

  actions: {
    updateFormAction(isSearching) {
      Logger.info(`updateFormAction was triggered with the following arguments: isSearching=${isSearching}`);
    }
  }
});
