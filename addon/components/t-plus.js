import Ember from 'ember';
import BaseTransformicon from './base-transformicon';

var get                = Ember.get;
var computed           = Ember.computed;
var alias              = computed.alias;
var defaultAnimation   = 'minus';
var animationTypeTable = Ember.Object.create({
  'minus': 'tcon-plus tcon-plus--minus',
  'check': 'tcon-plus tcon-plus--check',
  'minus-fold': 'tcon-plus--minusfold',
  'circle': 'tcon-plus--circle'
});

/**
  Transformicon Add/Remove component.

  PUBLIC - Optional parameters:
    * `animation` string - Set the add/remove animation type.
    * `a` string - Shorthand alias for `animation`.
    * `is-added` boolean - Set initial open add/remove state.
    * `action` string - The name of your controller/route action to handle an icon click. Returned with 1 parameter `isAdded`, which is a boolean type indicating if the current state is pending add or pending remove.

  Available `animation` types:
    * minus
    * check
    * minus-fold
    * circle

  Examples:

    ```hbs
      {{! These are functionally equivalent}}

      {{t-plus}}
      {{t-plus a='minus'}}
      {{t-plus animation='minus'}}
      {{t-plus is-added=false animation='minus'}}
    ```

  @class TPlusComponent
  @extends BaseTransformiconComponent
*/
export default BaseTransformicon.extend({
  'aria-label': 'add item',

  classNameBindings: ['animationType', 'isOpen'],
  animationType: computed('animation', function() {
    var anim = get(this, 'animation');
    return animationTypeTable.get(anim) || animationTypeTable.get(defaultAnimation);
  }),
  isOpen: computed('is-added', function() {
    return get(this, 'is-added') ? get(this, 'transformClass') : false;
  }),

  initialState: 'is-added',

  /**
    PUBLIC
   */
  animation: defaultAnimation,
  a: alias('animation'),
  'is-added': false
});
