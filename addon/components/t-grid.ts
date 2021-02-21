import Component from '@glimmer/component';
import { setComponentTemplate } from '@ember/component';
import { hbs } from 'ember-cli-htmlbars';

interface IArgs {
  animation?: Animation;
  isOpen?: boolean;
}

interface IAnimationTypeTable {
  default: 'tcon-grid--rearrange';
  rearrange: 'tcon-grid--rearrange';
  collapse: 'tcon-grid--collapse';
}

type Animation = Exclude<keyof IAnimationTypeTable, 'default'>;

/**
  Grid Transformicon

  **PUBLIC**
    * `animation` string - Set the grid animation type.
      * types - `rearrange` | `collapse`
    * `isOpen` boolean - Set initial open grid state.

  ```hbs
    <TGrid />
  ```

  @class TGridComponent
  @public
*/
class TGridComponent extends Component<IArgs> {
  animationTypeTable: IAnimationTypeTable = {
    default: 'tcon-grid--rearrange',
    rearrange: 'tcon-grid--rearrange',
    collapse: 'tcon-grid--collapse',
  };
}

export default setComponentTemplate(
  hbs`
  <button
    aria-label="toggle grid"
    type="button"
    class="tcon tcon-grid {{get this.animationTypeTable (or @animation "default")}} {{if @isOpen "tcon-transform"}}" 
    ...attributes
  >
    <span class="tcon-grid__item" aria-hidden="true"></span>
    <span class="tcon-visuallyhidden">toggle grid</span>
  </button>
  `,
  TGridComponent
);
