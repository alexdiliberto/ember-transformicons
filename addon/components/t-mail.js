import Ember from 'ember';

var get                = Ember.get;
var computed           = Ember.computed;
var Component          = Ember.Component;
var transformClass     = 'tcon-transform';

/**
  Transformicon Mail component.

  PUBLIC - Optional parameters:
    * `is-open` boolean - Set initial open mail state.
    * `action` string - The name of your controller/route action to handle an icon click. Returned with 1 parameter `isOpen`, which is a boolean type indication wether the current state is open or closed.

  Examples:

    ```hbs
      {{! These are functionally equivalent}}

      {{t-mail}}
      {{t-mail is-open=true}}
    ```

  @class TMailComponent
  @extends Ember.Component
*/
export default Component.extend({
  tagName: 'button',

  attributeBindings: ['type', 'role', 'aria-label'],
  type: 'button',
  role: 'button',
  'aria-label': 'open mailbox',

  classNames: ['tcon', 'tcon-mail--envelope'],
  classNameBindings: ['isOpen'],
  isOpen: computed('is-open', function() {
    return get(this, 'is-open') ? false : transformClass;
  }),

  click: function() {
    this.toggleProperty('is-open');
    this.sendAction('action', get(this, 'is-open'));
  },

  /**
    PUBLIC
   */
  'is-open': true
});
