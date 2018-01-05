import Controller from '@ember/controller';

/* eslint-disable ember/alias-model-in-controller, no-console */
export default Controller.extend({
  isMenuOpen: false,

  actions: {
    updateMenuAction(isMenuOpen) {
      console.info(`updateMenuAction was triggered with the following arguments: isMenuOpen=${isMenuOpen}`);
    }
  }
});
