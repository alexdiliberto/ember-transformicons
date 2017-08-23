import Controller from '@ember/controller';

export default Controller.extend({
  isRemoved: false,

  actions: {
    updateRemoveAction(isRemoved) {
      console.info(`updateRemoveAction was triggered with the following arguments: isRemoved=${isRemoved}`);
    }
  }
});
