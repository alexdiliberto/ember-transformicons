import Controller from '@ember/controller';

export default Controller.extend({
  isVideoPlaying: false,

  actions: {
    updateVideoAction(isPlaying) {
      console.info(`updateVideoAction was triggered with the following arguments: isPlaying=${isPlaying}`);
    }
  }
});
