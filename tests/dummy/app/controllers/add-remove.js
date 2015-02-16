import Ember from 'ember';

export default Ember.Controller.extend({
  isAdded: false,

  actions: {
    updateAddRemoveControllerProperty: function(isAdded) {
      this.set('isAdded', isAdded);
    }
  }
});
