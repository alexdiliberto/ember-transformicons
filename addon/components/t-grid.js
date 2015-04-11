import Ember from 'ember';
import BaseTransformicon from './base-transformicon';

const get                = Ember.get;
const computed           = Ember.computed;
const alias              = computed.alias;
const defaultAnimation   = 'rearrange';
const animationTypeTable = Ember.Object.create({
  'rearrange': 'tcon-grid--rearrange',
  'collapse':  'tcon-grid--collapse'
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
*/
export default BaseTransformicon.extend({
  'aria-label': 'toggle grid',

  classNames: ['tcon-grid'],
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
    Get the classname representing the `open` toggled state for the grid icon. This classname is stored in the `BaseTransformiconComponent`.

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
