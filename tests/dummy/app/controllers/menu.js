import Ember from 'ember';

export default Ember.Controller.extend({
  isMenuOpen: false,

  actions: {
    updateMenuControllerProperty: function(isOpen) {
      this.set('isMenuOpen', isOpen);
    }
  }
});
