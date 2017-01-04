import Ember from 'ember';

const {
  Controller
} = Ember;

export default Controller.extend({
  isMenuOpen: false,

  actions: {
    updateMenuControllerProperty(isOpen) {
      this.set('isMenuOpen', isOpen);
    }
  }
});
