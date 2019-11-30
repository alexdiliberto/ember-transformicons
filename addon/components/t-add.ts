import Component from '@ember/component';
import { layout, tagName } from '@ember-decorators/component';
import classic from 'ember-classic-decorator';
import template from 'ember-transformicons/templates/components/t-add';

const DEFAULT_ANIMATION = 'minus';

interface IAnimationTypeTable {
  minus: 'tcon-plus--minus';
  check: 'tcon-plus--check';
}

type Animation = typeof DEFAULT_ANIMATION | 'check';

/**
  Add Transformicon

  PUBLIC
    * `animation` string - Set the add animation type.
      * types - `minus` | `check`
    * `isAdded` boolean - Set initial open added state.

  ```hbs
  {{! These are functionally equivalent}}
  <TAdd />
  <TAdd @animation='minus' />
  <TAdd @isAdded={{false}} @animation='minus' />
  ```

  @class TAddComponent
  @public
*/
@layout(template)
@tagName('')
@classic
export default class TAddComponent extends Component {
  // --- COMPONENT ARGUMENTS ---
  animation?: Animation = DEFAULT_ANIMATION;
  isAdded?: boolean;

  animationTypeTable: IAnimationTypeTable = {
    minus: 'tcon-plus--minus',
    check: 'tcon-plus--check'
  };
}
