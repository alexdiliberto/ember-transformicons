import Component from '@ember/component';
import { assert } from '@ember/debug';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { layout, tagName } from '@ember-decorators/component';
import classic from 'ember-classic-decorator';
import template from 'ember-transformicons/templates/components/t-grid';

const DEFAULT_ANIMATION = 'rearrange';

interface IAnimationTypeTable {
  rearrange: 'tcon-grid--rearrange';
  collapse: 'tcon-grid--collapse';
}

type Animation = typeof DEFAULT_ANIMATION | 'collapse';

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

  @class TGridComponent
  @public
*/
@layout(template)
@tagName('')
@classic
export default class TGridComponent extends Component {
  // --- COMPONENT ARGUMENTS ---
  isOpen = false;
  onClick: (prop?: boolean) => void = () => {};

  animationTypeTable: IAnimationTypeTable = {
    rearrange: 'tcon-grid--rearrange',
    collapse: 'tcon-grid--collapse'
  };
  animation: Animation = DEFAULT_ANIMATION;
  @alias('animation') a!: Animation;

  @action
  clickHandler() {
    this.toggleProperty('isOpen');

    if (this.onClick) {
      assert(
        `[ember-transformicons] ${this.toString()} \`onClick\` action handler must be a valid closure action`,
        typeof this.onClick === 'function'
      );

      this.onClick(this.isOpen);
    }
  }
}
