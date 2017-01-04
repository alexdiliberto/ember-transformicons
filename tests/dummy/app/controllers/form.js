import Ember from 'ember';

const {
  Controller,
  set
} = Ember;

export default Controller.extend({
  isSearching: false,

  actions: {
    updateFormControllerProperty(isSearching) {
      set(this, 'isSearching', isSearching);
    }
  }
});
