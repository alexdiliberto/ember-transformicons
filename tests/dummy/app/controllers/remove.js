import Ember from 'ember';

export default Ember.Controller.extend({
  isRemoved: false,

  actions: {
    updateRemoveControllerProperty: function(isRemoved) {
      this.set('isRemoved', isRemoved);
    }
  }
});
