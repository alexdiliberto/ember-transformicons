import Controller from '@ember/controller';
import { action } from '@ember/object';

/* eslint-disable ember/alias-model-in-controller, no-console */
export default class TransformiconsRemoveController extends Controller {
  isRemoved = false;

  @action
  updateRemoveAction(isRemoved) {
    console.info(`updateRemoveAction was triggered with the following arguments: isRemoved=${isRemoved}`);
  }
}
