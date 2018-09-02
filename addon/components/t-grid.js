import BaseTransformiconComponent from './-private/base';
import { get } from '@ember/object';
import { className, classNames, layout } from '@ember-decorators/component';
import { computed } from '@ember-decorators/object';
import { alias } from '@ember-decorators/object/computed';
import _defaultTo from 'lodash.defaultto';
import template from '../templates/components/t-grid';

const DEFAULT_ANIMATION = 'rearrange';

/**
  Transformicon Grid component.

  PUBLIC - Optional parameters:
    * `animation` string - Set the grid animation type.
    * `a` string - Shorthand alias for `animation`.
    * `is-open` boolean - Set initial open grid state.
    * `onclick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isOpen`, which is a boolean type indicating if the current state is open or closed.

  Available `animation` types:
    * rearrange
    * collapse

  @example
  ```hbs
    {{! These are functionally equivalent}}

    {{t-grid}}
    {{t-grid a='rearrange'}}
    {{t-grid animation='rearrange'}}
    {{t-grid is-open=false animation='rearrange'}}
  ```
*/
@layout(template)
@classNames('tcon-grid')
export default class TGridComponent extends BaseTransformiconComponent {
  label = 'toggle grid';

  /**
   * Animation CSS classname lookup table for the Grid transformicon
   */
  _animationTypeTable = {
    'rearrange': 'tcon-grid--rearrange',
    'collapse': 'tcon-grid--collapse'
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
  // 'is-open' = _defaultTo(this['is-open'], false);

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
    this['is-open'] = _defaultTo(this['is-open'], false);
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
   * Get the {@link transformClass} CSS classname representing the `is-open` toggled state
   * for this transformicon
   * @type {string|boolean}
   */
  @className
  @computed('is-open')
  get isOpen() {
    return get(this, 'is-open') ? get(this, 'transformClass') : false;
  }
}
