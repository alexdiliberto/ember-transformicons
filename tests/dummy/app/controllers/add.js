import Ember from 'ember';

const {
  Controller,
  set
} = Ember;

export default Controller.extend({
  isAdded: false,

  actions: {
    updateAddControllerProperty(isAdded) {
      set(this, 'isAdded', isAdded);
    }
  }
});
