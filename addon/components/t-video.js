import Ember from 'ember';
import BaseTransformicon from './base-transformicon';

var get                = Ember.get;
var computed           = Ember.computed;
var alias              = computed.alias;

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
  @extends BaseTransformiconComponent
*/
export default BaseTransformicon.extend({
  role: alias('type'),
  'aria-label': 'play video',

  classNames: ['tcon-vid--play'],
  classNameBindings: ['isPlaying'],
  /**
    Get the classname representing the `playing` toggled state for the video icon. This classname is stored in the `BaseTransformiconComponent`.

    @property isPlaying
    @type String|Boolean
  */
  isPlaying: computed('is-playing', function() {
    return get(this, 'is-playing') ? get(this, 'transformClass') : false;
  }),

  initialState: 'is-playing',

  /**
    PUBLIC COMPONENT PROPERTIES
   */
  'is-playing': false
});
