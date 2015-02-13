import Ember from 'ember';

var get                = Ember.get;
var computed           = Ember.computed;
var alias              = computed.alias;
var Component          = Ember.Component;
var transformClass     = 'tcon-transform';
var defaultAnimation   = 'rearrange';
var animationTypeTable = Ember.Object.create({
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
  @extends Ember.Component
*/
export default Component.extend({
  tagName: 'button',

  attributeBindings: ['type', 'aria-label'],
  type: 'button',
  'aria-label': 'toggle grid',

  classNames: ['tcon', 'tcon-grid'],
  classNameBindings: ['animationType', 'isOpen'],
  animationType: computed('animation', function() {
    var anim = get(this, 'animation');
    return animationTypeTable.get(anim) || animationTypeTable.get(defaultAnimation);
  }),
  isOpen: computed('is-open', function() {
    return get(this, 'is-open') ? transformClass : false;
  }),

  click: function() {
    this.toggleProperty('is-open');
    this.sendAction('action', get(this, 'is-open'));
  },

  /**
    PUBLIC
   */
  animation: defaultAnimation,
  a: alias('animation'),
  'is-open': false
});
