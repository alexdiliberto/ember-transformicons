import Ember from 'ember';

export default Ember.Controller.extend({
  isAdded: false,

  actions: {
    updateAddControllerProperty: function(isAdded) {
      this.set('isAdded', isAdded);
    }
  }
});
