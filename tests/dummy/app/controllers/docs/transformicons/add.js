import Controller from '@ember/controller';

/* eslint-disable ember/alias-model-in-controller, no-console */
export default Controller.extend({
  isAdded: false,

  actions: {
    updateAddAction(isAdded) {
      console.info(`updateAddAction was triggered with the following arguments: isAdded=${isAdded}`);
    }
  }
});
