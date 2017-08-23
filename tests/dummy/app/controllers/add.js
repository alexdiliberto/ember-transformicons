import Controller from '@ember/controller';

export default Controller.extend({
  isAdded: false,

  actions: {
    updateAddAction(isAdded) {
      console.info(`updateAddAction was triggered with the following arguments: isAdded=${isAdded}`);
    }
  }
});
