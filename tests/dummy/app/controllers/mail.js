import Ember from 'ember';

const {
  Controller,
  set
} = Ember;

export default Controller.extend({
  hasUnreadMail: true,

  actions: {
    updateMailControllerProperty(isOpen) {
      set(this, 'hasUnreadMail', isOpen);
    }
  }
});
