import Ember from 'ember';

export default Ember.Controller.extend({
  isOpen: false,
  actions: {
    updateControllerProperty: function(isOpen) {
      this.set('isOpen', isOpen);
    }
  }
});
