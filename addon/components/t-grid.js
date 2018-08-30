import BaseTransformiconComponent from './-private/base';
import { get } from '@ember/object';
import { className, classNames, layout } from '@ember-decorators/component';
import { computed } from '@ember-decorators/object';
import { alias } from '@ember-decorators/object/computed';
import _defaultTo from 'lodash.defaultto';
import template from '../templates/components/t-grid';

const defaultAnimation = 'rearrange';

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

  Examples:

    ```hbs
      {{! These are functionally equivalent}}

      {{t-grid}}
      {{t-grid a='rearrange'}}
      {{t-grid animation='rearrange'}}
      {{t-grid is-open=false animation='rearrange'}}
    ```

  @class TGridComponent
  @extends BaseTransformiconComponent
  @public
*/
@layout(template)
@classNames('tcon-grid')
export default class TGridComponent extends BaseTransformiconComponent {
  label = 'toggle grid';

  animationTypeTable = {
    'rearrange': 'tcon-grid--rearrange',
    'collapse': 'tcon-grid--collapse'
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
  @className
  @computed('animation')
  get animationType() {
    let anim = get(this, 'animation');
    return get(this.animationTypeTable, anim) || get(this.animationTypeTable, defaultAnimation);
  }
  /**
    Get the classname representing the `open` toggled state for the grid icon. This classname is stored in the `BaseTransformiconComponent`.

    @property isOpen
    @type String|Boolean
    @public
  */
  @className
  @computed('is-open')
  get isOpen() {
    return get(this, 'is-open') ? get(this, 'transformClass') : false;
  }
}
