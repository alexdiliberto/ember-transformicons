import Controller from '@ember/controller';

/* eslint-disable ember/alias-model-in-controller, no-console */
export default Controller.extend({
  isRemoved: false,

  actions: {
    updateRemoveAction(isRemoved) {
      console.info(`updateRemoveAction was triggered with the following arguments: isRemoved=${isRemoved}`);
    }
  }
});
