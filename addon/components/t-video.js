import BaseTransformiconComponent from './-private/base';
import { get } from '@ember/object';
import { className, classNames, layout } from '@ember-decorators/component';
import { computed } from '@ember-decorators/object';
import { reads } from '@ember-decorators/object/computed';
import _defaultTo from 'lodash.defaultto';
import template from '../templates/components/t-video';

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
@layout(template)
@classNames('tcon-vid--play')
export default class TVideoComponent extends BaseTransformiconComponent {
  @className isPlaying;

  label = 'play video';
  initialState = 'is-playing';

  /*
    PUBLIC COMPONENT API
  */
  'is-playing' = _defaultTo(this['is-playing'], false);

  @reads('type') ariaRole;

  /**
    Get the classname representing the `playing` toggled state for the video icon. This classname is stored in the `BaseTransformiconComponent`.

    @property isPlaying
    @type String|Boolean
    @public
  */
  @computed('is-playing')
  get isPlaying() {
    return get(this, 'is-playing') ? get(this, 'transformClass') : false;
  }
}
