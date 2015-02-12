import Ember from 'ember';

var get       = Ember.get;
var computed  = Ember.computed;
var Component = Ember.Component;

var defaultType = 'rearrange';
var gridTypeTable = {
  'rearrange': 'tcon-grid--rearrange',
  'collapse': 'tcon-grid--collapse'
};

export default Component.extend({
  /**
    Public: Optionally passed in parameter
  */
  type: null,

  gridType: computed('type', function() {
    return gridTypeTable[get(this, 'type')] || gridTypeTable[defaultType];
  })
});
