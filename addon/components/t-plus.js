import Ember from 'ember';

var get       = Ember.get;
var computed  = Ember.computed;
var Component = Ember.Component;

var defaultType = 'minus';
var plusTypeTable = {
  'minus': 'tcon-plus tcon-plus--minus', //TODO
  'check': 'tcon-plus tcon-plus--check', //TODO
  'minus-fold': 'tcon-plus--minusfold',
  'circle': 'tcon-plus--circle' //TODO
};

export default Component.extend({
  /**
    Public: Optionally passed in parameter
  */
  type: null,

  plusType: computed('type', function() {
    return plusTypeTable[get(this, 'type')] || plusTypeTable[defaultType];
  })
});
