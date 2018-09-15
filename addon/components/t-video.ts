import BaseTransformiconComponent from './-private/base';
import { get } from '@ember/object';
import { className, classNames, layout } from '@ember-decorators/component';
import { computed } from '@ember-decorators/object';
import { reads } from '@ember-decorators/object/computed';
import _defaultTo from 'lodash.defaultto';
// NOTE: https://github.com/typed-ember/ember-cli-typescript/issues/242
// @ts-ignore: Ignore import of compiled template
import template from '../templates/components/t-video';

type InitialState = 'is-open'|'is-added'|'is-searching'|'is-removed'|'is-playing';

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
  initialState: InitialState = 'is-playing';

  /**
   * Flag to indicate the state of this transformicon
   */
  // 'is-playing' = _defaultTo(this['is-playing'], false);
  'is-playing': boolean;

  @reads('type') ariaRole!: string;

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
   */
  @className
  @computed('is-playing')
  get isPlaying(): string|boolean {
    return get(this, 'is-playing') ? get(this, 'transformClass') : false;
  }
}
