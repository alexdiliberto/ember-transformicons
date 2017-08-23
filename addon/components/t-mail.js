import { computed, get } from '@ember/object';
import { reads } from '@ember/object/computed';
import layout from '../templates/components/t-mail';
import BaseTransformicon from './base-transformicon';

/**
  Transformicon Mail component.

  PUBLIC - Optional parameters:
    * `is-open` boolean - Set initial open mail state.
    * `onclick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isOpen`, which is a boolean type indicating if the current state is open or closed.

  Examples:

    ```hbs
      {{! These are functionally equivalent}}

      {{t-mail}}
      {{t-mail is-open=true}}
    ```

  @class TMailComponent
  @extends BaseTransformiconComponent
  @public
*/
export default BaseTransformicon.extend({
  layout,

  classNames: ['tcon-mail--envelope'],
  classNameBindings: ['isOpen'],

  label: 'open mailbox',

  /**
    PUBLIC COMPONENT API

    @public
   */
  'is-open': true,

  ariaRole: reads('type'),

  /**
    Get the classname representing the `open` toggled state for the mail icon. This classname is stored in the `BaseTransformiconComponent`.

    @property isOpen
    @type String|Boolean
    @public
  */
  isOpen: computed('is-open', {
    get() {
      return get(this, 'is-open') ? false : get(this, 'transformClass');
    }
  })
});
