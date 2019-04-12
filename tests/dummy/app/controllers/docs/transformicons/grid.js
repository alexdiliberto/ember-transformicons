import Controller from '@ember/controller';
import { action } from '@ember/object';

/* eslint-disable ember/alias-model-in-controller, no-console */
export default class TransformiconsGridController extends Controller {
  isGridOpen = false;

  @action
  updateGridAction(isOpen) {
    console.info(`updateGridAction was triggered with the following arguments: isOpen=${isOpen}`);
  }
}
