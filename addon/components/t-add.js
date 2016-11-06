import Ember from 'ember';
import layout from '../templates/components/t-add';
import BaseTransformicon from './base-transformicon';

const {
  get,
  computed,
  computed: { alias }
} = Ember;
const defaultAnimation   = 'minus';
const animationTypeTable = Ember.Object.create({
  'minus': 'tcon-plus--minus',
  'check': 'tcon-plus--check'
});

/**
  Transformicon Add component.

  PUBLIC - Optional parameters:
    * `animation` string - Set the add animation type.
    * `a` string - Shorthand alias for `animation`.
    * `is-added` boolean - Set initial open added state.
    * `action` string - The name of your controller/route action to handle an icon click. Returned with 1 parameter `isAdded`, which is a boolean type indicating if the current state is pending add.

  Available `animation` types:
    * minus
    * check

  Examples:

    ```hbs
      {{! These are functionally equivalent}}

      {{t-add}}
      {{t-add a='minus'}}
      {{t-add animation='minus'}}
      {{t-add is-added=false animation='minus'}}
    ```

  @class TAddComponent
  @extends BaseTransformiconComponent
*/
export default BaseTransformicon.extend({
  layout,

  'aria-label': 'add item',

  classNames: ['tcon-plus'],
  classNameBindings: ['animationType', 'isAdded'],
  /**
    Get the CSS classname corresponding to the component's current animation type.

    @property animationType
    @type String
  */
  animationType: computed('animation', function() {
    const anim = get(this, 'animation');
    return animationTypeTable.get(anim) || animationTypeTable.get(defaultAnimation);
  }),
  /**
    Get the classname representing the `added` toggled state for the add icon. This classname is stored in the `BaseTransformiconComponent`.

    @property isAdded
    @type String|Boolean
  */
  isAdded: computed('is-added', function() {
    return get(this, 'is-added') ? get(this, 'transformClass') : false;
  }),

  initialState: 'is-added',

  /**
    PUBLIC COMPONENT PROPERTIES
   */
  animation: defaultAnimation,
  a: alias('animation'),
  'is-added': false
});
