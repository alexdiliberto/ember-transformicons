import Component from '@glimmer/component';
import { setComponentTemplate } from '@ember/component';
import { hbs } from 'ember-cli-htmlbars';

interface IArgs {
  animation?: Animation;
  isOpen?: boolean;
}

interface IAnimationTypeTable {
  default: 'tcon-menu--xbutterfly';
  butterfly: 'tcon-menu--xbutterfly';
  minus: 'tcon-menu--minus';
  'x-cross': 'tcon-menu--xcross';
  'arrow-up': 'tcon-menu--arrow tcon-menu--arrowup';
  'arrow-360-left': 'tcon-menu--arrow tcon-menu--arrow360left';
  'arrow-left': 'tcon-menu--arrow tcon-menu--arrowleft';
}

type Animation = Exclude<keyof IAnimationTypeTable, 'default'>;

/**
  Menu Transformicon

  PUBLIC
    * `animation` string - Set the menu animation type.
      * types - `butterfly` | `minus` | `x-cross` | `arrow-up` | `arrow-360-left` | `arrow-left`
    * `isOpen` boolean - Set initial open menu state.

  ```hbs
    {{! These are functionally equivalent}}
    <TMenu />
    <TMenu @animation='butterfly' />
    <TMenu @isOpen={{false}} @animation='butterfly' />
  ```

  @class TMenuComponent
  @public
*/
class TMenuComponent extends Component<IArgs> {
  animationTypeTable: IAnimationTypeTable = {
    default: 'tcon-menu--xbutterfly',
    butterfly: 'tcon-menu--xbutterfly',
    minus: 'tcon-menu--minus',
    'x-cross': 'tcon-menu--xcross',
    'arrow-up': 'tcon-menu--arrow tcon-menu--arrowup',
    'arrow-360-left': 'tcon-menu--arrow tcon-menu--arrow360left',
    'arrow-left': 'tcon-menu--arrow tcon-menu--arrowleft'
  };
}

export default setComponentTemplate(
  hbs`
  <button
    aria-label="toggle menu"
    type="button"
    class="tcon {{get this.animationTypeTable (or @animation "default")}} {{if @isOpen "tcon-transform"}}"
    ...attributes
  >
    <span class="tcon-menu__lines" aria-hidden="true"></span>
    <span class="tcon-visuallyhidden">toggle menu</span>
  </button>
  `,
  TMenuComponent
);
