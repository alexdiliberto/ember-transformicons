import Ember from 'ember';

var get       = Ember.get;
var computed  = Ember.computed;
var Component = Ember.Component;

var defaultType = 'minus';
var plusTypeTable = {
  'minus': 'tcon-plus tcon-plus--minus',
  'check': 'tcon-plus tcon-plus--check',
  'minus-fold': 'tcon-plus--minusfold',
  'circle': 'tcon-plus--circle'
};

/**
  Transformicon Add/Remove component.

  Available types:
    * minus
    * check
    * minus-fold
    * circle

  Examples:

    ```hbs
      {{t-plus}}
      {{t-plus type='check'}}
    ```

  @class TPlusComponent
  @extends Ember.Component
*/
export default Component.extend({
  tagName: 'button',

  attributeBindings: ['type', 'aria-label'],
  type: 'button',
  'aria-label': 'add item',

  classNames: ['tcon'],
  classNameBindings: ['plusType'],
  plusType: computed('type', function() {
    return plusTypeTable[get(this, 'type')] || plusTypeTable[defaultType];
  })
});
