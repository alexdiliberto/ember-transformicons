import BaseTransformiconComponent from './-private/base';
import { get } from '@ember/object';
import { className, classNames, layout } from '@ember-decorators/component';
import { computed } from '@ember-decorators/object';
import { alias } from '@ember-decorators/object/computed';
import _defaultTo from 'lodash.defaultto';
import template from '../templates/components/t-add';

const defaultAnimation = 'minus';

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

  Examples:

    ```hbs
      {{! These are functionally equivalent}}

      {{t-add}}
      {{t-add a='minus'}}
      {{t-add animation='minus'}}
      {{t-add is-added=false animation='minus'}}
    ```

  @class TAddComponent
  @extends BaseTransformiconComponent
  @public
*/
@layout(template)
@classNames('tcon-plus')
export default class TAddComponent extends BaseTransformiconComponent {
  label = 'add item';
  initialState = 'is-added';

  animationTypeTable = {
    'minus': 'tcon-plus--minus',
    'check': 'tcon-plus--check'
  };

  /*
    PUBLIC COMPONENT API
  */
  animation = _defaultTo(this.animation, defaultAnimation);
  'is-added' = _defaultTo(this['is-added'], false);
  @alias('animation') a;

  /**
    Get the CSS classname corresponding to the component's current animation type.

    @property animationType
    @type String
    @public
  */
  @className
  @computed('animation')
  get animationType() {
    let anim = get(this, 'animation');
    return get(this.animationTypeTable, anim) || get(this.animationTypeTable, defaultAnimation);
  }

  /**
    Get the classname representing the `added` toggled state for the add icon. This classname is stored in the `BaseTransformiconComponent`.

    @property isAdded
    @type String|Boolean
    @public
  */
  @className
  @computed('is-added')
  get isAdded() {
    return get(this, 'is-added') ? get(this, 'transformClass') : false;
  }
}
