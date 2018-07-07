import { computed, get } from '@ember/object';
import { reads } from '@ember/object/computed';
import layout from '../templates/components/t-video';
import BaseTransformicon from './-private/base';

/**
  Transformicon Video component.

  PUBLIC - Optional parameters:
    * `is-playing` boolean - Set initial playing state.
    * `onclick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isPlaying`, which is a boolean type indicating if the current state is playing or stopped.

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

  classNames: ['tcon-vid--play'],
  classNameBindings: ['isPlaying'],

  label: 'play video',
  initialState: 'is-playing',

  /*
    PUBLIC COMPONENT API
  */
  'is-playing': false,

  ariaRole: reads('type'),

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
  })
});
