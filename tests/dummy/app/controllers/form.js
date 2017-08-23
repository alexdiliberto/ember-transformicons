import Controller from '@ember/controller';

export default Controller.extend({
  isSearching: false,

  actions: {
    updateFormAction(isSearching) {
      console.info(`updateFormAction was triggered with the following arguments: isSearching=${isSearching}`);
    }
  }
});
