import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';

/* eslint-disable ember/alias-model-in-controller, no-console */
export default class TransformiconsFormController extends Controller {
  isSearching = false;

  @action
  updateFormAction(isSearching) {
    console.info(`updateFormAction was triggered with the following arguments: isSearching=${isSearching}`);
  }
}
