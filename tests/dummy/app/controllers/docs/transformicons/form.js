import Controller from '@ember/controller';

/* eslint-disable ember/alias-model-in-controller, no-console */
export default Controller.extend({
  isSearching: false,

  actions: {
    updateFormAction(isSearching) {
      console.info(`updateFormAction was triggered with the following arguments: isSearching=${isSearching}`);
    }
  }
});
