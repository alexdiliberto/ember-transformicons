import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';

/* eslint-disable ember/alias-model-in-controller, no-console */
export default class TransformiconsMenuController extends Controller {
  isMenuOpen = false;

  @action
  updateMenuAction(isMenuOpen) {
    console.info(`updateMenuAction was triggered with the following arguments: isMenuOpen=${isMenuOpen}`);
  }
}
