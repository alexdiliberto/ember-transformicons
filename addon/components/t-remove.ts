import Component from '@ember/component';
import { assert } from '@ember/debug';
import { action } from '@ember/object';
import { layout, tagName } from '@ember-decorators/component';
import { alias } from '@ember/object/computed';
import classic from 'ember-classic-decorator';
import template from 'ember-transformicons/templates/components/t-remove';

const DEFAULT_ANIMATION = 'check';

interface IAnimationTypeTable {
  check: 'tcon-remove--check';
  'chevron-left': 'tcon-remove--chevron-left';
  'chevron-right': 'tcon-remove--chevron-right';
  'chevron-down': 'tcon-remove--chevron-down';
  'chevron-up': 'tcon-remove--chevron-up';
}

type Animation =
  | typeof DEFAULT_ANIMATION
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-down'
  | 'chevron-up';

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

  @class TRemoveComponent
  @public
*/
@layout(template)
@tagName('')
@classic
export default class TRemoveComponent extends Component {
  // --- COMPONENT ARGUMENTS ---
  isRemoved = false;
  onClick: (prop?: boolean) => void = () => {};

  animationTypeTable: IAnimationTypeTable = {
    check: 'tcon-remove--check',
    'chevron-left': 'tcon-remove--chevron-left',
    'chevron-right': 'tcon-remove--chevron-right',
    'chevron-down': 'tcon-remove--chevron-down',
    'chevron-up': 'tcon-remove--chevron-up'
  };
  animation: Animation = DEFAULT_ANIMATION;
  @alias('animation') a!: Animation;

  @action
  clickHandler() {
    this.toggleProperty('isRemoved');

    if (this.onClick) {
      assert(
        `[ember-transformicons] ${this.toString()} \`onClick\` action handler must be a valid closure action`,
        typeof this.onClick === 'function'
      );

      this.onClick(this.isRemoved);
    }
  }
}
