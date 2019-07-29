import Component from '@ember/component';
import { assert } from '@ember/debug';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { layout, tagName } from '@ember-decorators/component';
import template from '../templates/components/t-grid';

const DEFAULT_ANIMATION = 'rearrange';

/**
  Grid Transformicon

  PUBLIC - Optional parameters:
    * `animation` string - Set the grid animation type  (alias: `a`).
      * types - `rearrange` | `collapse`
    * `isOpen` boolean - Set initial open grid state.
    * `onClick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isOpen`, which is a boolean type indicating if the current state is open or closed.

  ```hbs
    {{! These are functionally equivalent}}
    <TGrid />
    <TGrid @a='rearrange' />
    <TGrid @animation='rearrange' />
    <TGrid @isOpen={{false}} @animation='rearrange' />
  ```
*/
@layout(template)
@tagName('')
export default class TGridComponent extends Component {
  /**
   * Animation CSS classname lookup table for the Grid transformicon
   */
  animationTypeTable = {
    'rearrange': 'tcon-grid--rearrange',
    'collapse': 'tcon-grid--collapse'
  };

  /**
   * Get the component's current animation type. This is used to lookup the CSS classname for the
   * animation
   * @type {string}
   */
  animation = DEFAULT_ANIMATION;

  /**
   * Flag to indicate the state of this transformicon
   * @type {boolean}
   */
  isOpen = false;

  /**
   * Alias for {@link animation}
   * @type {string}
   */
  @alias('animation') a;

  @action
  clickHandler() {
    this.toggleProperty('isOpen');

    if (this.onClick) {
      assert(`[ember-transformicons] ${this.toString()} \`onClick\` action handler must be a valid closure action`, typeof this.onClick === 'function');

      this.onClick(this.isOpen);
    }
  }
}
