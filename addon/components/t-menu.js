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

//TODO: Update component tagName wrapper
export default Component.extend({
  /**
    Public: Optionally passed in parameter
  */
  type: null,

  menuType: computed('type', function() {
    return menuTypeTable[get(this, 'type')] || menuTypeTable[defaultType];
  })
});

// export default Ember.Component.extend({
//   tagName: 'button',

//   classNames: ['poop'],
//   classNameBindings: ['option'],
//   option: function() {
//     return 'tcon-menu--xbutterfly';
//     //type
//     //return isMenuType[type] || 'tcon-menu--xbutterfly';
//   }.property(),

//   attributeBindings: ['type', 'aria-label'],
//   type: 'button',
//   'aria-label': 'toggle menu'
// });
