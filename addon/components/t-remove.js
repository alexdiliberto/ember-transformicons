import Component from '@ember/component';
import { assert } from '@ember/debug';
import { action } from '@ember/object';
import { layout, tagName } from '@ember-decorators/component';
import { alias } from '@ember/object/computed';
import template from '../templates/components/t-remove';

const DEFAULT_ANIMATION = 'check';

/**
  Remove Transformicon

  PUBLIC
    * `animation` string - Set the menu animation type  (alias: `a`).
      * types - `check` | `chevron-left` | `chevron-right` | `chevron-down` | `chevron-up`
    * `isRemoved` boolean - Set initial open removed state.
    * `onClick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isRemoved`, which is a boolean type indicating if the current state is pending remove.

  ```hbs
    {{! These are functionally equivalent}}
    <TRemove />
    <TRemove @a='check' />
    <TRemove @animation='check' />
    <TRemove @isRemoved={{false}} @animation='check' />
  ```
*/
@layout(template)
@tagName('')
export default class TRemoveComponent extends Component {
  /**
   * Animation CSS classname lookup table for the Remove transformicon
   */
  animationTypeTable = {
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
  animation = DEFAULT_ANIMATION;

  /**
   * Flag to indicate the state of this transformicon
   * @type {boolean}
   */
  isRemoved = false;

  /**
   * Alias for {@link animation}
   * @type {string}
   */
  @alias('animation') a;

  @action
  clickHandler() {
    this.toggleProperty('isRemoved');

    if (this.onClick) {
      assert(`[ember-transformicons] ${this.toString()} \`onClick\` action handler must be a valid closure action`, typeof this.onClick === 'function');

      this.onClick(this.isRemoved);
    }
  }
}
