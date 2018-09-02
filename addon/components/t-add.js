import BaseTransformiconComponent from './-private/base';
import { get } from '@ember/object';
import { className, classNames, layout } from '@ember-decorators/component';
import { computed } from '@ember-decorators/object';
import { alias } from '@ember-decorators/object/computed';
import _defaultTo from 'lodash.defaultto';
import template from '../templates/components/t-add';

const DEFAULT_ANIMATION = 'minus';

/**
  Transformicon Add component.

  PUBLIC - Optional parameters:
    * `animation` string - Set the add animation type.
    * `a` string - Shorthand alias for `animation`.
    * `is-added` boolean - Set initial open added state.
    * `onclick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isAdded`, which is a boolean type indicating if the current state is pending add.

  Available `animation` types:
    * minus
    * check

  ```hbs
  {{! These are functionally equivalent}}

  {{t-add}}
  {{t-add a='minus'}}
  {{t-add animation='minus'}}
  {{t-add is-added=false animation='minus'}}
  ```
*/
@layout(template)
@classNames('tcon-plus')
export default class TAddComponent extends BaseTransformiconComponent {
  label = 'add item';
  initialState = 'is-added';

  /**
   * Animation CSS classname lookup table for the Add transformicon
   */
  _animationTypeTable = {
    'minus': 'tcon-plus--minus',
    'check': 'tcon-plus--check'
  };

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
  // 'is-added' = _defaultTo(this['is-added'], false);

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
    this['is-added'] = _defaultTo(this['is-added'], false);
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
   * Get the {@link transformClass} CSS classname representing the `is-added` toggled state
   * for this transformicon
   * @type {string|boolean}
   */
  @className
  @computed('is-added')
  get isAdded() {
    return get(this, 'is-added') ? get(this, 'transformClass') : false;
  }
}
