import { alias } from '@ember/object/computed';
import EmberObject, { computed, get } from '@ember/object';
import layout from '../templates/components/t-menu';
import BaseTransformicon from './-private/base';

const defaultAnimation = 'butterfly';
const animationTypeTable = EmberObject.create({
  'butterfly': 'tcon-menu--xbutterfly',
  'minus': 'tcon-menu--minus',
  'x-cross': 'tcon-menu--xcross',
  'arrow-up': 'tcon-menu--arrow tcon-menu--arrowup',
  'arrow-360-left': 'tcon-menu--arrow tcon-menu--arrow360left',
  'arrow-left': 'tcon-menu--arrow tcon-menu--arrowleft'
});

/**
  Transformicon Menu component.

  PUBLIC - Optional parameters:
    * `animation` string - Set the menu animation type.
    * `a` string - Shorthand alias for `animation`.
    * `is-open` boolean - Set initial open menu state.
    * `onclick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isOpen`, which is a boolean type indicating if the current state is open or closed.

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
  @public
*/
export default BaseTransformicon.extend({
  layout,

  classNameBindings: ['animationType', 'isOpen'],

  label: 'toggle menu',

  /*
    PUBLIC COMPONENT API
  */
  animation: defaultAnimation,
  'is-open': false,
  a: alias('animation'),

  /**
    Get the CSS classname corresponding to the component's current animation type.

    @property animationType
    @type String
    @public
  */
  animationType: computed('animation', {
    get() {
      let anim = get(this, 'animation');
      return get(animationTypeTable, anim) || get(animationTypeTable, defaultAnimation);
    }
  }),
  /**
    Get the classname representing the `open` toggled state for the menu icon. This classname is stored in the `BaseTransformiconComponent`.

    @property isOpen
    @type String|Boolean
    @public
  */
  isOpen: computed('is-open', {
    get() {
      return get(this, 'is-open') ? get(this, 'transformClass') : false;
    }
  })
});
