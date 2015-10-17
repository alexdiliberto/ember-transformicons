import Ember from 'ember';
import BaseTransformicon from './base-transformicon';

const {
  get,
  computed
} = Ember;
const {
  alias
} = computed;
const defaultAnimation   = 'check';
const animationTypeTable = Ember.Object.create({
  'check':         'tcon-remove--check',
  'chevron-left':  'tcon-remove--chevron-left',
  'chevron-right': 'tcon-remove--chevron-right',
  'chevron-down':  'tcon-remove--chevron-down',
  'chevron-up':    'tcon-remove--chevron-up'
});

/**
  Transformicon Remove component.

  PUBLIC - Optional parameters:
    * `animation` string - Set the menu animation type.
    * `a` string - Shorthand alias for `animation`.
    * `is-removed` boolean - Set initial open removed state.
    * `action` string - The name of your controller/route action to handle an icon click. Returned with 1 parameter `isRemoved`, which is a boolean type indicating if the current state is pending remove.

  Available `animation` types:
    * check
    * chevron-left
    * chevron-right
    * chevron-down
    * chevron-up

  Examples:

    ```hbs
      {{! These are functionally equivalent}}

      {{t-remove}}
      {{t-remove a='check'}}
      {{t-remove animation='check'}}
      {{t-remove is-removed=false animation='check'}}
    ```

  @class TRemoveComponent
  @extends BaseTransformiconComponent
*/
export default BaseTransformicon.extend({
  'aria-label': 'remove item',

  classNames: ['tcon-remove'],
  classNameBindings: ['animationType', 'isRemoved'],
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
  animation: defaultAnimation,
  a: alias('animation'),
  'is-removed': false
});
