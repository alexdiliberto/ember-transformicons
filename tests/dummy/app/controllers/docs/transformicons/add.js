import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';

/* eslint-disable ember/alias-model-in-controller, no-console */
export default class TransformiconsAddController extends Controller {
  isAdded = false;

  @action
  updateAddAction(isAdded) {
    console.info(`updateAddAction was triggered with the following arguments: isAdded=${isAdded}`);
  }
}
