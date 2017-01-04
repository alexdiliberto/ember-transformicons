import Ember from 'ember';

const {
  Controller
} = Ember;

export default Controller.extend({
  hasUnreadMail: true,

  actions: {
    updateMailControllerProperty(isOpen) {
      this.set('hasUnreadMail', isOpen);
    }
  }
});
