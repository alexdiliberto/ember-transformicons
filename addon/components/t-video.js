import Ember from 'ember';

var get                = Ember.get;
var computed           = Ember.computed;
var Component          = Ember.Component;
var transformClass     = 'tcon-transform';

/**
  Transformicon Video component.

  PUBLIC - Optional parameters:
    * `is-playing` boolean - Set initial playing state.
    * `action` string - The name of your controller/route action to handle an icon click. Returned with 1 parameter `isPlaying`, which is a boolean type indicating if the current state is playing or stopped.

  Examples:

    ```hbs
      {{! These are functionally equivalent}}

      {{t-video}}
      {{t-video is-playing=false}}
    ```

  @class TVideoComponent
  @extends Ember.Component
*/
export default Component.extend({
  tagName: 'button',

  attributeBindings: ['type', 'role', 'aria-label'],
  type: 'button',
  role: 'button',
  'aria-label': 'play video',

  classNames: ['tcon', 'tcon-vid--play'],
  classNameBindings: ['isPlaying'],
  isPlaying: computed('is-playing', function() {
    return get(this, 'is-playing') ? transformClass : false;
  }),

  click: function() {
    this.toggleProperty('is-playing');
    this.sendAction('action', get(this, 'is-playing'));
  },

  /**
    PUBLIC
   */
  'is-playing': false
});
