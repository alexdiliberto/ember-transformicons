import Controller from '@ember/controller';

export default Controller.extend({
  isMenuOpen: false,

  actions: {
    updateMenuAction(isMenuOpen) {
      console.info(`updateMenuAction was triggered with the following arguments: isMenuOpen=${isMenuOpen}`);
    }
  }
});
