import Ember from 'ember';

var get       = Ember.get;
var computed  = Ember.computed;
var Component = Ember.Component;

var defaultType = 'rearrange';
var gridTypeTable = {
  'rearrange': 'tcon-grid--rearrange',
  'collapse': 'tcon-grid--collapse'
};

/**
  Transformicon Grid component.

  Available types:
    * rearrange
    * collapse

  Examples:

    ```hbs
      {{t-grid}}
      {{t-grid type='collapse'}}
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
  classNameBindings: ['gridType'],
  gridType: computed('type', function() {
    return gridTypeTable[get(this, 'type')] || gridTypeTable[defaultType];
  })
});
