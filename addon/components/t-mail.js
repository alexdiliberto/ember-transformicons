import Ember from 'ember';
import BaseTransformicon from './base-transformicon';

const {
  get,
  computed,
  computed: { alias }
} = Ember;

/**
  Transformicon Mail component.

  PUBLIC - Optional parameters:
    * `is-open` boolean - Set initial open mail state.
    * `action` string - The name of your controller/route action to handle an icon click. Returned with 1 parameter `isOpen`, which is a boolean type indicating if the current state is open or closed.

  Examples:

    ```hbs
      {{! These are functionally equivalent}}

      {{t-mail}}
      {{t-mail is-open=true}}
    ```

  @class TMailComponent
  @extends BaseTransformiconComponent
*/
export default BaseTransformicon.extend({
  role: alias('type'),
  'aria-label': 'open mailbox',

  classNames: ['tcon-mail--envelope'],
  classNameBindings: ['isOpen'],
  /**
    Get the classname representing the `open` toggled state for the mail icon. This classname is stored in the `BaseTransformiconComponent`.

    @property isOpen
    @type String|Boolean
  */
  isOpen: computed('is-open', function() {
    return get(this, 'is-open') ? false : get(this, 'transformClass');
  }),

  /**
    PUBLIC COMPONENT PROPERTIES
   */
  'is-open': true
});
