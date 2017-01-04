import Ember from 'ember';

const {
  Controller
} = Ember;

export default Controller.extend({
  isVideoPlaying: false,

  actions: {
    updateVideoControllerProperty(isPlaying) {
      this.set('isVideoPlaying', isPlaying);
    }
  }
});
