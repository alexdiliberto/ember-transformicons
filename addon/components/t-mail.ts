import Component from '@glimmer/component';
import { not } from '@ember/object/computed';
import { setComponentTemplate } from '@ember/component';
import { hbs } from 'ember-cli-htmlbars';

interface IArgs {
  isOpen?: boolean;
}

/**
  Mail Transformicon

  **PUBLIC**
    * `isOpen` boolean - Set initial open mail state.

  ```hbs
    <TMail />
  ```

  @class TMailComponent
  @public
*/
class TMailComponent extends Component<IArgs> {
  @not('args.isOpen') notOpen!: boolean;
}

export default setComponentTemplate(
  hbs`
  <button
    aria-label="open mailbox"
    role="button"
    type="button"
    class="tcon tcon-mail--envelope {{if this.notOpen "tcon-transform"}}"
    ...attributes
  >
    <span class="tcon-mail--envelope__flap" aria-hidden="true"></span>
    <span class="tcon-visuallyhidden">open mailbox</span>
  </button>
  `,
  TMailComponent
);
