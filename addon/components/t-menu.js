import Ember from 'ember';

var get                = Ember.get;
var computed           = Ember.computed;
var alias              = computed.alias;
var Component          = Ember.Component;
var transformClass     = 'tcon-transform';
var defaultAnimation   = 'butterfly';
var animationTypeTable = Ember.Object.create({
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
    * `action` string - The name of your controller/route action to handle an icon click. Returned with 1 parameter `isOpen`, which is a boolean type indication wether the current state is open or closed.

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
  @extends Ember.Component
*/
export default Component.extend({
  tagName: 'button',

  attributeBindings: ['type', 'aria-label'],
  type: 'button',
  'aria-label': 'toggle menu',

  classNames: ['tcon'],
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
