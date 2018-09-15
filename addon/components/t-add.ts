import BaseTransformiconComponent from './-private/base';
import { get } from '@ember/object';
import { className, classNames, layout } from '@ember-decorators/component';
import { computed } from '@ember-decorators/object';
import { alias } from '@ember-decorators/object/computed';
import _defaultTo from 'lodash.defaultto';
// NOTE: https://github.com/typed-ember/ember-cli-typescript/issues/242
// @ts-ignore: Ignore import of compiled template
import template from '../templates/components/t-add';

const DEFAULT_ANIMATION = 'minus';

type Animation = 'minus'|'check';
type InitialState = 'is-open'|'is-added'|'is-searching'|'is-removed'|'is-playing';

/**
  Add Transformicon

  PUBLIC
    * `animation` string - Set the add animation type (alias: `a`).
      * types - `minus` | `check`
    * `is-added` boolean - Set initial open added state.
    * `onclick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isAdded`, which is a boolean type indicating if the current state is pending add.

  ```hbs
  {{! These are functionally equivalent}}
  <TAdd />
  <TAdd @a='minus' />
  <TAdd @animation='minus' />
  <TAdd @is-added={{false}} @animation='minus' />
  ```
*/
@layout(template)
@classNames('tcon-plus')
export default class TAddComponent extends BaseTransformiconComponent {
  label = 'add item';
  initialState: InitialState = 'is-added';

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
   */
  animation: Animation = _defaultTo(this.animation, DEFAULT_ANIMATION);

  /**
   * Flag to indicate the state of this transformicon
   */
  // 'is-added' = _defaultTo(this['is-added'], false);
  'is-added': boolean;

  /**
   * Alias for {@link animation}
   */
  @alias('animation') a?: Animation;

  constructor() {
    super(...arguments);

    // NOTE: ESDoc does not currently support parsing a quoted and dasherized class field. Adding
    // here from the constructor as a temporary workaround.
    // https://github.com/esdoc/esdoc/issues/519#issuecomment-417895936
    this['is-added'] = _defaultTo(this['is-added'], false);
  }

  /**
   * Get the CSS classname corresponding to the component's current {@link animation} type
   */
  @className
  @computed('animation')
  get animationType(this: TAddComponent): string {
    let anim = get(this, 'animation');
    return get(this._animationTypeTable, anim);
  }

  /**
   * Get the {@link transformClass} CSS classname representing the `is-added` toggled state
   * for this transformicon
   */
  @className
  @computed('is-added')
  get isAdded(): string|boolean {
    return get(this, 'is-added') ? get(this, 'transformClass') : false;
  }
}
