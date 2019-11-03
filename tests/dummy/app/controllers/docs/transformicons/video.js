import Controller from '@ember/controller';
import { action } from '@ember/object';

/* eslint-disable ember/alias-model-in-controller, no-console */
export default class TransformiconsVideoController extends Controller {
  isVideoPlaying = false;

  @action
  updateVideoAction(isPlaying) {
    console.info(
      `updateVideoAction was triggered with the following arguments: isPlaying=${isPlaying}`
    );
  }
}
