import Ember from 'ember';

const {
  Controller,
  Logger
} = Ember;

export default Controller.extend({
  hasUnreadMail: true,

  actions: {
    updateMailAction(isOpen) {
      Logger.info(`updateMailAction was triggered with the following arguments: isOpen=${isOpen}`);
    }
  }
});
