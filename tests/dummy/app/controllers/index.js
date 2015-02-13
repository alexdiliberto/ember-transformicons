import Ember from 'ember';

export default Ember.Controller.extend({
  isMenuOpen: false,
  isGridOpen: false,
  isAdded: false,
  hasUnreadMail: true,
  actions: {
    updateMenuControllerProperty: function(isOpen) {
      this.set('isMenuOpen', isOpen);
    },
    updateGridControllerProperty: function(isOpen) {
      this.set('isGridOpen', isOpen);
    },
    updateAddRemoveControllerProperty: function(isAdded) {
      this.set('isAdded', isAdded);
    },
    updateMailControllerProperty: function(isOpen) {
      this.set('hasUnreadMail', isOpen);
    }
  }
});
