import Controller from '@ember/controller';
import { action } from '@ember/object';

/* eslint-disable ember/alias-model-in-controller, no-console */
export default class TransformiconsMailController extends Controller {
  hasUnreadMail = true;

  @action
  updateMailAction(isOpen) {
    console.info(`updateMailAction was triggered with the following arguments: isOpen=${isOpen}`);
  }
}
