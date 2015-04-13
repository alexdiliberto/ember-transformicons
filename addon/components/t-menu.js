import Ember from 'ember';
import BaseTransformicon from './base-transformicon';

const {
  get,
  computed,
  computed: { alias }
} = Ember;
const defaultAnimation   = 'butterfly';
const animationTypeTable = Ember.Object.create({
  'butterfly':      'tcon-menu--xbutterfly',
  'minus':          'tcon-menu--minus',
  'x-cross':        'tcon-menu--xcross',
  'arrow-up':       'tcon-menu--arrow tcon-menu--arrowup',
  'arrow-360-left': 'tcon-menu--arrow tcon-menu--arrow360left',
  'arrow-left':     'tcon-menu--arrow tcon-menu--arrowleft'
});

/**
  Transformicon Menu component.

  PUBLIC - Optional parameters:
    * `animation` string - Set the menu animation type.
    * `a` string - Shorthand alias for `animation`.
    * `is-open` boolean - Set initial open menu state.
    * `action` string - The name of your controller/route action to handle an icon click. Returned with 1 parameter `isOpen`, which is a boolean type indicating if the current state is open or closed.

  Available `animation` types:
    * butterfly
    * minus
    * x-cross
    * arrow-up
    * arrow-360-left
    * arrow-left

  Examples:

    ```hbs
      {{! These are functionally equivalent}}

      {{t-menu}}
      {{t-menu a='butterfly'}}
      {{t-menu animation='butterfly'}}
      {{t-menu is-open=false animation='butterfly'}}
    ```

  @class TMenuComponent
  @extends BaseTransformiconComponent
*/
export default BaseTransformicon.extend({
  'aria-label': 'toggle menu',

  classNameBindings: ['animationType', 'isOpen'],
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
    Get the classname representing the `open` toggled state for the menu icon. This classname is stored in the `BaseTransformiconComponent`.

    @property isOpen
    @type String|Boolean
  */
  isOpen: computed('is-open', function() {
    return get(this, 'is-open') ? get(this, 'transformClass') : false;
  }),

  /**
    PUBLIC COMPONENT PROPERTIES
   */
  animation: defaultAnimation,
  a: alias('animation'),
  'is-open': false
});
