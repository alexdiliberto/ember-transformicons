import Ember from 'ember';

var get       = Ember.get;
var computed  = Ember.computed;
var Component = Ember.Component;

var defaultType = 'butterfly';
var menuTypeTable = {
  'butterfly': 'tcon-menu--xbutterfly',
  'minus': 'tcon-menu--minus',
  'x-cross': 'tcon-menu--xcross',
  'arrow-up': 'tcon-menu--arrow tcon-menu--arrowup',
  'arrow-360-left': 'tcon-menu--arrow tcon-menu--arrow360left',
  'arrow-left': 'tcon-menu--arrow tcon-menu--arrowleft'
};

/**
  Transformicon Menu component.

  Available types:
    * butterfly
    * minus
    * x-cross
    * arrow-up
    * arrow-360-left
    * arrow-left

  Examples:

    ```hbs
      {{t-menu}}
      {{t-menu type='minus'}}
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
  classNameBindings: ['menuType'],
  menuType: computed('type', function() {
    return menuTypeTable[get(this, 'type')] || menuTypeTable[defaultType];
  })
});
