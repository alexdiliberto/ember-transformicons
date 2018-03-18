import Controller from '@ember/controller';

/* eslint-disable ember/alias-model-in-controller, no-console */
export default Controller.extend({
  isVideoPlaying: false,

  actions: {
    updateVideoAction(isPlaying) {
      console.info(`updateVideoAction was triggered with the following arguments: isPlaying=${isPlaying}`);
    }
  }
});
