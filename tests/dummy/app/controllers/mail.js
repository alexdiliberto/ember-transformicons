import Controller from '@ember/controller';

export default Controller.extend({
  hasUnreadMail: true,

  actions: {
    updateMailAction(isOpen) {
      console.info(`updateMailAction was triggered with the following arguments: isOpen=${isOpen}`);
    }
  }
});
