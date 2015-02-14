import Ember from 'ember';
import BaseTransformicon from './base-transformicon';

var get                = Ember.get;
var computed           = Ember.computed;
var alias              = computed.alias;

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
  isOpen: computed('is-open', function() {
    return get(this, 'is-open') ? false : get(this, 'transformClass');
  }),

  /**
    PUBLIC
   */
  'is-open': true
});
