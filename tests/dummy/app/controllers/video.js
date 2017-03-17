import Ember from 'ember';

const {
  Controller,
  Logger
} = Ember;

export default Controller.extend({
  isVideoPlaying: false,

  actions: {
    updateVideoAction(isPlaying) {
      Logger.info(`updateVideoAction was triggered with the following arguments: isPlaying=${isPlaying}`);
    }
  }
});
