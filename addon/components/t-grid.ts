import Component from '@ember/component';
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
    * `animation` string - Set the grid animation type.
      * types - `rearrange` | `collapse`
    * `isOpen` boolean - Set initial open grid state.

  ```hbs
    {{! These are functionally equivalent}}
    <TGrid />
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
  animation?: Animation = DEFAULT_ANIMATION;
  isOpen?: boolean;

  animationTypeTable: IAnimationTypeTable = {
    rearrange: 'tcon-grid--rearrange',
    collapse: 'tcon-grid--collapse'
  };
}
