import BaseTransformiconComponent from './-private/base';
import { get } from '@ember/object';
import { className, classNames, layout } from '@ember-decorators/component';
import { computed } from '@ember-decorators/object';
import { alias } from '@ember-decorators/object/computed';
import _defaultTo from 'lodash.defaultto';
import template from '../templates/components/t-remove';

const DEFAULT_ANIMATION = 'check';

/**
  Remove Transformicon

  PUBLIC
    * `animation` string - Set the menu animation type  (alias: `a`).
      * types - `check` | `chevron-left` | `chevron-right` | `chevron-down` | `chevron-up`
    * `is-removed` boolean - Set initial open removed state.
    * `onclick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isRemoved`, which is a boolean type indicating if the current state is pending remove.

  ```hbs
    {{! These are functionally equivalent}}
    <TRemove />
    <TRemove @a='check' />
    <TRemove @animation='check' />
    <TRemove @is-removed={{false}} @animation='check' />
  ```
*/
@layout(template)
@classNames('tcon-remove')
export default class TRemoveComponent extends BaseTransformiconComponent {
  label = 'remove item';
  initialState = 'is-removed';

  /**
   * Animation CSS classname lookup table for the Remove transformicon
   */
  _animationTypeTable = {
    'check': 'tcon-remove--check',
    'chevron-left': 'tcon-remove--chevron-left',
    'chevron-right': 'tcon-remove--chevron-right',
    'chevron-down': 'tcon-remove--chevron-down',
    'chevron-up': 'tcon-remove--chevron-up'
  }

  /**
   * Get the component's current animation type. This is used to lookup the CSS classname for the
   * animation
   * @type {string}
   */
  animation = _defaultTo(this.animation, DEFAULT_ANIMATION);

  /**
   * Flag to indicate the state of this transformicon
   * @type {boolean}
   */
  // 'is-removed' = _defaultTo(this['is-removed'], false);

  /**
   * Alias for {@link animation}
   * @type {string}
   */
  @alias('animation') a;

  constructor() {
    super(...arguments);

    // NOTE: ESDoc does not currently support parsing a quoted and dasherized class field. Adding
    // here from the constructor as a temporary workaround.
    // https://github.com/esdoc/esdoc/issues/519#issuecomment-417895936
    this['is-removed'] = _defaultTo(this['is-removed'], false);
  }

  /**
   * Get the CSS classname corresponding to the component's current {@link animation} type
   * @type {string}
   */
  @className
  @computed('animation')
  get animationType() {
    let anim = get(this, 'animation');
    return get(this._animationTypeTable, anim);
  }

  /**
   * Get the {@link transformClass} CSS classname representing the `is-removed` toggled state
   * for this transformicon
   * @type {string|boolean}
   */
  @className
  @computed('is-removed')
  get isRemoved() {
    return get(this, 'is-removed') ? get(this, 'transformClass') : false;
  }
}
