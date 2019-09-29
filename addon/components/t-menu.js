import Component from '@ember/component';
import { assert } from '@ember/debug';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { layout, tagName } from '@ember-decorators/component';
import classic from 'ember-classic-decorator';
import template from '../templates/components/t-menu';

const DEFAULT_ANIMATION = 'butterfly';

/**
  Menu Transformicon

  PUBLIC
    * `animation` string - Set the menu animation type  (alias: `a`).
      * types - `butterfly` | `minus` | `x-cross` | `arrow-up` | `arrow-360-left` | `arrow-left`
    * `isOpen` boolean - Set initial open menu state.
    * `onClick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isOpen`, which is a boolean type indicating if the current state is open or closed.

  ```hbs
    {{! These are functionally equivalent}}
    <TMenu />
    <TMenu @a='butterfly' />
    <TMenu @animation='butterfly' />
    <TMenu @isOpen={{false}} @animation='butterfly' />
  ```
*/
@layout(template)
@tagName('')
@classic
export default class TMenuComponent extends Component {
  /**
   * Animation CSS classname lookup table for the Menu transformicon
   */
  animationTypeTable = {
    'butterfly': 'tcon-menu--xbutterfly',
    'minus': 'tcon-menu--minus',
    'x-cross': 'tcon-menu--xcross',
    'arrow-up': 'tcon-menu--arrow tcon-menu--arrowup',
    'arrow-360-left': 'tcon-menu--arrow tcon-menu--arrow360left',
    'arrow-left': 'tcon-menu--arrow tcon-menu--arrowleft'
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
