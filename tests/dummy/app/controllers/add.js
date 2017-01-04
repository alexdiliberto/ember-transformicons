import Ember from 'ember';

const {
  Controller
} = Ember;

export default Controller.extend({
  isAdded: false,

  actions: {
    updateAddControllerProperty(isAdded) {
      this.set('isAdded', isAdded);
    }
  }
});
