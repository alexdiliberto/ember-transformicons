import Ember from 'ember';
import layout from '../templates/components/t-video';
import BaseTransformicon from './base-transformicon';

const {
  get,
  computed,
  computed: { alias }
} = Ember;

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
  @public
*/
export default BaseTransformicon.extend({
  layout,

  role: alias('type'),
  'aria-label': 'play video',

  classNames: ['tcon-vid--play'],
  classNameBindings: ['isPlaying'],
  /**
    Get the classname representing the `playing` toggled state for the video icon. This classname is stored in the `BaseTransformiconComponent`.

    @property isPlaying
    @type String|Boolean
    @public
  */
  isPlaying: computed('is-playing', {
    get() {
      return get(this, 'is-playing') ? get(this, 'transformClass') : false;
    }
  }),

  initialState: 'is-playing',

  /**
    PUBLIC COMPONENT PROPERTIES

    @public
   */
  'is-playing': false
});
