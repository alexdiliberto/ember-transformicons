import Ember from 'ember';

var get                = Ember.get;
var Component          = Ember.Component;

/**
  Transformicon Base component.

  @class BaseTransformiconComponent
  @extends Ember.Component
*/
export default Component.extend({
  tagName: 'button',

  attributeBindings: ['type', 'role', 'aria-label'],
  type: 'button',
  role: undefined,
  'aria-label': undefined,

  classNames: ['tcon'],

  transformClass: 'tcon-transform',

  initialState: 'is-open',
  click: function() {
    var initState = get(this, 'initialState');
    this.toggleProperty(initState);
    this.sendAction('action', !!initState);
  },
});
