import BaseTransformiconComponent from './-private/base';
import { get } from '@ember/object';
import { className, layout } from '@ember-decorators/component';
import { computed } from '@ember-decorators/object';
import { alias } from '@ember-decorators/object/computed';
import _defaultTo from 'lodash.defaultto';
import template from '../templates/components/t-menu';

const defaultAnimation = 'butterfly';

/**
  Transformicon Menu component.

  PUBLIC - Optional parameters:
    * `animation` string - Set the menu animation type.
    * `a` string - Shorthand alias for `animation`.
    * `is-open` boolean - Set initial open menu state.
    * `onclick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isOpen`, which is a boolean type indicating if the current state is open or closed.

  Available `animation` types:
    * butterfly
    * minus
    * x-cross
    * arrow-up
    * arrow-360-left
    * arrow-left

  Examples:

    ```hbs
      {{! These are functionally equivalent}}

      {{t-menu}}
      {{t-menu a='butterfly'}}
      {{t-menu animation='butterfly'}}
      {{t-menu is-open=false animation='butterfly'}}
    ```

  @class TMenuComponent
  @extends BaseTransformiconComponent
  @public
*/
@layout(template)
export default class TMenuComponent extends BaseTransformiconComponent {
  @className animationType;
  @className isOpen;

  label = 'toggle menu';

  animationTypeTable = {
    'butterfly': 'tcon-menu--xbutterfly',
    'minus': 'tcon-menu--minus',
    'x-cross': 'tcon-menu--xcross',
    'arrow-up': 'tcon-menu--arrow tcon-menu--arrowup',
    'arrow-360-left': 'tcon-menu--arrow tcon-menu--arrow360left',
    'arrow-left': 'tcon-menu--arrow tcon-menu--arrowleft'
  };

  /*
    PUBLIC COMPONENT API
  */
  animation = _defaultTo(this.animation, defaultAnimation);
  'is-open' = _defaultTo(this['is-open'], false);
  @alias('animation') a;

  /**
    Get the CSS classname corresponding to the component's current animation type.

    @property animationType
    @type String
    @public
  */
  @computed('animation')
  get animationType() {
    let anim = get(this, 'animation');
    return get(this.animationTypeTable, anim) || get(this.animationTypeTable, defaultAnimation);
  }
  /**
    Get the classname representing the `open` toggled state for the menu icon. This classname is stored in the `BaseTransformiconComponent`.

    @property isOpen
    @type String|Boolean
    @public
  */
  @computed('is-open')
  get isOpen() {
    return get(this, 'is-open') ? get(this, 'transformClass') : false;
  }
}
