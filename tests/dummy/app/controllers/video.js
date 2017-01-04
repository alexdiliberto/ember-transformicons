import Ember from 'ember';

const {
  Controller,
  set
} = Ember;

export default Controller.extend({
  isVideoPlaying: false,

  actions: {
    updateVideoControllerProperty(isPlaying) {
      set(this, 'isVideoPlaying', isPlaying);
    }
  }
});
