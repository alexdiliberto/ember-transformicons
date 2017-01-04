import Ember from 'ember';

const {
  Controller
} = Ember;

export default Controller.extend({
  isGridOpen: false,

  actions: {
    updateGridControllerProperty(isOpen) {
      this.set('isGridOpen', isOpen);
    }
  }
});
