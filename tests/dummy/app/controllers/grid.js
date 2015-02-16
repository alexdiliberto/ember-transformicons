import Ember from 'ember';

export default Ember.Controller.extend({
  isGridOpen: false,

  actions: {
    updateGridControllerProperty: function(isOpen) {
      this.set('isGridOpen', isOpen);
    }
  }
});
