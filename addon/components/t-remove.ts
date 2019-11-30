import Component from '@ember/component';
import { layout, tagName } from '@ember-decorators/component';
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
    * `animation` string - Set the menu animation type.
      * types - `check` | `chevron-left` | `chevron-right` | `chevron-down` | `chevron-up`
    * `isRemoved` boolean - Set initial open removed state.

  ```hbs
    {{! These are functionally equivalent}}
    <TRemove />
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
  animation?: Animation = DEFAULT_ANIMATION;
  isRemoved?: boolean;

  animationTypeTable: IAnimationTypeTable = {
    check: 'tcon-remove--check',
    'chevron-left': 'tcon-remove--chevron-left',
    'chevron-right': 'tcon-remove--chevron-right',
    'chevron-down': 'tcon-remove--chevron-down',
    'chevron-up': 'tcon-remove--chevron-up'
  };
}
