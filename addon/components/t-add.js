import Component from '@ember/component';
import { assert } from '@ember/debug';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { layout, tagName } from '@ember-decorators/component';
import classic from 'ember-classic-decorator';
import template from '../templates/components/t-add';

const DEFAULT_ANIMATION = 'minus';

/**
  Add Transformicon

  PUBLIC
    * `animation` string - Set the add animation type (alias: `a`).
      * types - `minus` | `check`
    * `isAdded` boolean - Set initial open added state.
    * `onClick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isAdded`, which is a boolean type indicating if the current state is pending add.

  ```hbs
  {{! These are functionally equivalent}}
  <TAdd />
  <TAdd @a='minus' />
  <TAdd @animation='minus' />
  <TAdd @isAdded={{false}} @animation='minus' />
  ```
*/
@layout(template)
@tagName('')
@classic
export default class TAddComponent extends Component {
  /**
   * Animation CSS classname lookup table for the Add transformicon
   */
  animationTypeTable = {
    'minus': 'tcon-plus--minus',
    'check': 'tcon-plus--check'
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
  isAdded = false;

  /**
   * Alias for {@link animation}
   * @type {string}
   */
  @alias('animation') a;

  @action
  clickHandler() {
    this.toggleProperty('isAdded');

    if (this.onClick) {
      assert(`[ember-transformicons] ${this.toString()} \`onClick\` action handler must be a valid closure action`, typeof this.onClick === 'function');

      this.onClick(this.isAdded);
    }
  }
}
