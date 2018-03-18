import Controller from '@ember/controller';

/* eslint-disable ember/alias-model-in-controller, no-console */
export default Controller.extend({
  isGridOpen: false,

  actions: {
    updateGridAction(isOpen) {
      console.info(`updateGridAction was triggered with the following arguments: isOpen=${isOpen}`);
    }
  }
});
