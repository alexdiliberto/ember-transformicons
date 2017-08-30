import { alias } from '@ember/object/computed';
import EmberObject, { computed, get } from '@ember/object';
import layout from '../templates/components/t-add';
import BaseTransformicon from './-private/base';

const defaultAnimation = 'minus';
const animationTypeTable = EmberObject.create({
  'minus': 'tcon-plus--minus',
  'check': 'tcon-plus--check'
});

/**
  Transformicon Add component.

  PUBLIC - Optional parameters:
    * `animation` string - Set the add animation type.
    * `a` string - Shorthand alias for `animation`.
    * `is-added` boolean - Set initial open added state.
    * `onclick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isAdded`, which is a boolean type indicating if the current state is pending add.

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
  @public
*/
export default BaseTransformicon.extend({
  layout,

  classNames: ['tcon-plus'],
  classNameBindings: ['animationType', 'isAdded'],

  label: 'add item',
  initialState: 'is-added',

  /**
    PUBLIC COMPONENT API

    @public
   */
  animation: defaultAnimation,
  'is-added': false,
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
    Get the classname representing the `added` toggled state for the add icon. This classname is stored in the `BaseTransformiconComponent`.

    @property isAdded
    @type String|Boolean
    @public
  */
  isAdded: computed('is-added', {
    get() {
      return get(this, 'is-added') ? get(this, 'transformClass') : false;
    }
  })
});
