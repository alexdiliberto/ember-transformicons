import { alias } from '@ember/object/computed';
import EmberObject, { computed, get } from '@ember/object';
import layout from '../templates/components/t-grid';
import BaseTransformicon from './-private/base';

const defaultAnimation = 'rearrange';
const animationTypeTable = EmberObject.create({
  'rearrange': 'tcon-grid--rearrange',
  'collapse': 'tcon-grid--collapse'
});

/**
  Transformicon Grid component.

  PUBLIC - Optional parameters:
    * `animation` string - Set the grid animation type.
    * `a` string - Shorthand alias for `animation`.
    * `is-open` boolean - Set initial open grid state.
    * `onclick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isOpen`, which is a boolean type indicating if the current state is open or closed.

  Available `animation` types:
    * rearrange
    * collapse

  Examples:

    ```hbs
      {{! These are functionally equivalent}}

      {{t-grid}}
      {{t-grid a='rearrange'}}
      {{t-grid animation='rearrange'}}
      {{t-grid is-open=false animation='rearrange'}}
    ```

  @class TGridComponent
  @extends BaseTransformiconComponent
  @public
*/
export default BaseTransformicon.extend({
  layout,

  classNames: ['tcon-grid'],
  classNameBindings: ['animationType', 'isOpen'],

  label: 'toggle grid',

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
    Get the classname representing the `open` toggled state for the grid icon. This classname is stored in the `BaseTransformiconComponent`.

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
