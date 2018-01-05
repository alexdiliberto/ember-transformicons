import Controller from '@ember/controller';

/* eslint-disable ember/alias-model-in-controller, no-console */
export default Controller.extend({
  hasUnreadMail: true,

  actions: {
    updateMailAction(isOpen) {
      console.info(`updateMailAction was triggered with the following arguments: isOpen=${isOpen}`);
    }
  }
});
