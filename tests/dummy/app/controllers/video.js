import Ember from 'ember';

export default Ember.Controller.extend({
  isVideoPlaying: false,

  actions: {
    updateVideoControllerProperty: function(isPlaying) {
      this.set('isVideoPlaying', isPlaying);
    }
  }
});
