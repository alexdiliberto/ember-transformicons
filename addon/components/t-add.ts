import Component from '@glimmer/component';
import { setComponentTemplate } from '@ember/component';
import { hbs } from 'ember-cli-htmlbars';

interface IArgs {
  animation?: Animation;
  isAdded?: boolean;
}

interface IAnimationTypeTable {
  default: 'tcon-plus--minus';
  minus: 'tcon-plus--minus';
  check: 'tcon-plus--check';
}

type Animation = Exclude<keyof IAnimationTypeTable, 'default'>;

/**
  Add Transformicon

  **PUBLIC**
    * `animation` string - Set the add animation type.
      * types - `minus` | `check`
    * `isAdded` boolean - Set initial open added state.

  ```hbs
  {{! These are equivalent }}
  <TAdd />
  <TAdd
    @animation="minus"
  />
  <TAdd
    @isAdded={{false}}
    @animation="minus"
  />
  ```

  @class TAddComponent
  @public
*/
class TAddComponent extends Component<IArgs> {
  animationTypeTable: IAnimationTypeTable = {
    default: 'tcon-plus--minus',
    minus: 'tcon-plus--minus',
    check: 'tcon-plus--check'
  };
}

export default setComponentTemplate(
  hbs`
  <button
    aria-label="add item"
    type="button"
    class="tcon tcon-plus {{get this.animationTypeTable (or @animation "default")}} {{if @isAdded "tcon-transform"}}"
    ...attributes
  >
    <span class="tcon-visuallyhidden">add item</span>
  </button>
  `,
  TAddComponent
);
