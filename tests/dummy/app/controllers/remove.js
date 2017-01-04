import Ember from 'ember';

const {
  Controller,
  set
} = Ember;

export default Controller.extend({
  isRemoved: false,

  actions: {
    updateRemoveControllerProperty(isRemoved) {
      set(this, 'isRemoved', isRemoved);
    }
  }
});
