import Ember from 'ember';

const {
  Controller,
  set
} = Ember;

export default Controller.extend({
  isMenuOpen: false,

  actions: {
    updateMenuControllerProperty(isOpen) {
      set(this, 'isMenuOpen', isOpen);
    }
  }
});
