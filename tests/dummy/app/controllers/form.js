import Ember from 'ember';

export default Ember.Controller.extend({
  isSearching: false,

  actions: {
    updateFormControllerProperty: function(isSearching) {
      this.set('isSearching', isSearching);
    }
  }
});
