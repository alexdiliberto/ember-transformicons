import Ember from 'ember';

const {
  Controller
} = Ember;

export default Controller.extend({
  isSearching: false,

  actions: {
    updateFormControllerProperty(isSearching) {
      this.set('isSearching', isSearching);
    }
  }
});
