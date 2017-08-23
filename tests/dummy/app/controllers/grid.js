import Controller from '@ember/controller';

export default Controller.extend({
  isGridOpen: false,

  actions: {
    updateGridAction(isOpen) {
      console.info(`updateGridAction was triggered with the following arguments: isOpen=${isOpen}`);
    }
  }
});
