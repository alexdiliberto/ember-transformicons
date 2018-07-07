import { alias } from '@ember/object/computed';
import EmberObject, { computed, get } from '@ember/object';
import layout from '../templates/components/t-remove';
import BaseTransformicon from './-private/base';

const defaultAnimation = 'check';
const animationTypeTable = EmberObject.create({
  'check': 'tcon-remove--check',
  'chevron-left': 'tcon-remove--chevron-left',
  'chevron-right': 'tcon-remove--chevron-right',
  'chevron-down': 'tcon-remove--chevron-down',
  'chevron-up': 'tcon-remove--chevron-up'
});

/**
  Transformicon Remove component.

  PUBLIC - Optional parameters:
    * `animation` string - Set the menu animation type.
    * `a` string - Shorthand alias for `animation`.
    * `is-removed` boolean - Set initial open removed state.
    * `onclick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isRemoved`, which is a boolean type indicating if the current state is pending remove.

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
  @public
*/
export default BaseTransformicon.extend({
  layout,

  classNames: ['tcon-remove'],
  classNameBindings: ['animationType', 'isRemoved'],

  label: 'remove item',
  initialState: 'is-removed',

  /*
    PUBLIC COMPONENT API
  */
  animation: defaultAnimation,
  'is-removed': false,
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
    Get the classname representing the `remove` toggled state for the remove icon. This classname is stored in the `BaseTransformiconComponent`.

    @property isRemoved
    @type String|Boolean
    @public
  */
  isRemoved: computed('is-removed', {
    get() {
      return get(this, 'is-removed') ? get(this, 'transformClass') : false;
    }
  })
});
