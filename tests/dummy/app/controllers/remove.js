import Ember from 'ember';

const {
  Controller
} = Ember;

export default Controller.extend({
  isRemoved: false,

  actions: {
    updateRemoveControllerProperty(isRemoved) {
      this.set('isRemoved', isRemoved);
    }
  }
});
