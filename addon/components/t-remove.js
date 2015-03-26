import Ember from 'ember';
import BaseTransformicon from './base-transformicon';

var get                = Ember.get;
var computed           = Ember.computed;

/**
  Transformicon Remove component.

  PUBLIC - Optional parameters:
    * `is-removed` boolean - Set initial open removed state.
    * `action` string - The name of your controller/route action to handle an icon click. Returned with 1 parameter `isRemoved`, which is a boolean type indicating if the current state is pending remove.

  Examples:

    ```hbs
      {{! These are functionally equivalent}}

      {{t-remove}}
      {{t-remove is-removed=false}}
    ```

  @class TRemoveComponent
  @extends BaseTransformiconComponent
*/
export default BaseTransformicon.extend({
  'aria-label': 'remove item',

  classNames: ['tcon-remove', 'tcon-remove--check'],
  classNameBindings: ['isRemoved'],
  /**
    Get the classname representing the `remove` toggled state for the remove icon. This classname is stored in the `BaseTransformiconComponent`.

    @property isRemoved
    @type String|Boolean
  */
  isRemoved: computed('is-removed', function() {
    return get(this, 'is-removed') ? get(this, 'transformClass') : false;
  }),

  initialState: 'is-removed',

  /**
    PUBLIC COMPONENT PROPERTIES
   */
  'is-removed': false
});
