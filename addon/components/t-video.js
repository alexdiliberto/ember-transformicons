import BaseTransformiconComponent from './-private/base';
import { computed, get } from '@ember/object';
import { className, classNames, layout } from '@ember-decorators/component';
import { reads } from '@ember/object/computed';
import _defaultTo from 'lodash.defaultto';
import template from '../templates/components/t-video';

/**
  Video Transformicon

  PUBLIC
    * `is-playing` boolean - Set initial playing state.
    * `onclick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isPlaying`, which is a boolean type indicating if the current state is playing or stopped.

  ```hbs
    {{! These are functionally equivalent}}
    <TVideo />
    <TVideo @is-playing={{false}} />
  ```
*/
@layout(template)
@classNames('tcon-vid--play')
export default class TVideoComponent extends BaseTransformiconComponent {
  label = 'play video';
  initialState = 'is-playing';

  /**
   * Flag to indicate the state of this transformicon
   * @type {boolean}
   */
  // 'is-playing' = _defaultTo(this['is-playing'], false);

  @reads('type') ariaRole;

  constructor() {
    super(...arguments);

    // NOTE: ESDoc does not currently support parsing a quoted and dasherized class field. Adding
    // here from the constructor as a temporary workaround.
    // https://github.com/esdoc/esdoc/issues/519#issuecomment-417895936
    this['is-playing'] = _defaultTo(this['is-playing'], false);
  }

  /**
   * Get the {@link transformClass} CSS classname representing the `is-playing` toggled state
   * for this transformicon
   * @type {string|boolean}
   */
  @className
  @computed('is-playing')
  get isPlaying() {
    return get(this, 'is-playing') ? get(this, 'transformClass') : false;
  }
}
