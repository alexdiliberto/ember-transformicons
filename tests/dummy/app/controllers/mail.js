import Ember from 'ember';

export default Ember.Controller.extend({
  hasUnreadMail: true,

  actions: {
    updateMailControllerProperty: function(isOpen) {
      this.set('hasUnreadMail', isOpen);
    }
  }
});
