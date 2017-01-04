import Ember from 'ember';

const {
  Controller,
  set
} = Ember;

export default Controller.extend({
  isGridOpen: false,

  actions: {
    updateGridControllerProperty(isOpen) {
      set(this, 'isGridOpen', isOpen);
    }
  }
});
