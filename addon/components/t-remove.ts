import Component from '@glimmer/component';
import { setComponentTemplate } from '@ember/component';
import { hbs } from 'ember-cli-htmlbars';

interface IArgs {
  animation?: Animation;
  isRemoved?: boolean;
}

interface IAnimationTypeTable {
  default: 'tcon-remove--check';
  check: 'tcon-remove--check';
  'chevron-left': 'tcon-remove--chevron-left';
  'chevron-right': 'tcon-remove--chevron-right';
  'chevron-down': 'tcon-remove--chevron-down';
  'chevron-up': 'tcon-remove--chevron-up';
}

type Animation = Exclude<keyof IAnimationTypeTable, 'default'>;

/**
  Remove Transformicon

  **PUBLIC**
    * `animation` string - Set the menu animation type.
      * types - `check` | `chevron-left` | `chevron-right` | `chevron-down` | `chevron-up`
    * `isRemoved` boolean - Set initial open removed state.

  ```hbs
    <TRemove />
  ```

  @class TRemoveComponent
  @public
*/
class TRemoveComponent extends Component<IArgs> {
  animationTypeTable: IAnimationTypeTable = {
    default: 'tcon-remove--check',
    check: 'tcon-remove--check',
    'chevron-left': 'tcon-remove--chevron-left',
    'chevron-right': 'tcon-remove--chevron-right',
    'chevron-down': 'tcon-remove--chevron-down',
    'chevron-up': 'tcon-remove--chevron-up',
  };
}

export default setComponentTemplate(
  hbs`
  <button
    aria-label="remove item"
    type="button"
    class="tcon tcon-remove {{get this.animationTypeTable (or @animation "default")}} {{if @isRemoved "tcon-transform"}}" 
    ...attributes
  >
    <span class="tcon-visuallyhidden">remove item</span>
  </button>
  `,
  TRemoveComponent
);
