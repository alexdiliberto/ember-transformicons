import Ember from 'ember';
import layout from '../templates/components/t-grid';
import BaseTransformicon from './base-transformicon';

const {
  get,
  computed,
  computed: { alias },
  Object: EmberObject
} = Ember;
const defaultAnimation   = 'rearrange';
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
    * `action` string - The name of your controller/route action to handle an icon click. Returned with 1 parameter `isOpen`, which is a boolean type indicating if the current state is open or closed.

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

  'aria-label': 'toggle grid',

  classNames: ['tcon-grid'],
  classNameBindings: ['animationType', 'isOpen'],
  /**
    Get the CSS classname corresponding to the component's current animation type.

    @property animationType
    @type String
    @public
  */
  animationType: computed('animation', {
    get() {
      let anim = get(this, 'animation');
      return animationTypeTable.get(anim) || animationTypeTable.get(defaultAnimation);
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
  }),

  /**
    PUBLIC COMPONENT PROPERTIES

    @public
   */
  animation: defaultAnimation,
  a: alias('animation'),
  'is-open': false
});
