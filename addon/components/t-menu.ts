import Component from '@ember/component';
import { layout, tagName } from '@ember-decorators/component';
import classic from 'ember-classic-decorator';
import template from 'ember-transformicons/templates/components/t-menu';

const DEFAULT_ANIMATION = 'butterfly';

interface IAnimationTypeTable {
  butterfly: 'tcon-menu--xbutterfly';
  minus: 'tcon-menu--minus';
  'x-cross': 'tcon-menu--xcross';
  'arrow-up': 'tcon-menu--arrow tcon-menu--arrowup';
  'arrow-360-left': 'tcon-menu--arrow tcon-menu--arrow360left';
  'arrow-left': 'tcon-menu--arrow tcon-menu--arrowleft';
}

type Animation =
  | typeof DEFAULT_ANIMATION
  | 'minus'
  | 'x-cross'
  | 'arrow-up'
  | 'arrow-360-left'
  | 'arrow-left';

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
@layout(template)
@tagName('')
@classic
export default class TMenuComponent extends Component {
  // --- COMPONENT ARGUMENTS ---
  animation?: Animation = DEFAULT_ANIMATION;
  isOpen?: boolean;

  animationTypeTable: IAnimationTypeTable = {
    butterfly: 'tcon-menu--xbutterfly',
    minus: 'tcon-menu--minus',
    'x-cross': 'tcon-menu--xcross',
    'arrow-up': 'tcon-menu--arrow tcon-menu--arrowup',
    'arrow-360-left': 'tcon-menu--arrow tcon-menu--arrow360left',
    'arrow-left': 'tcon-menu--arrow tcon-menu--arrowleft'
  };
}
