import Component from '@ember/component';
import { not } from '@ember/object/computed';
import { layout, tagName } from '@ember-decorators/component';
import classic from 'ember-classic-decorator';
import template from 'ember-transformicons/templates/components/t-mail';

/**
  Mail Transformicon

  PUBLIC
    * `isOpen` boolean - Set initial open mail state.

  ```hbs
    {{! These are functionally equivalent}}
    <TMail />
    <TMail @isOpen={{true}} />
  ```

  @class TMailComponent
  @public
*/
@layout(template)
@tagName('')
@classic
export default class TMailComponent extends Component {
  // --- COMPONENT ARGUMENTS ---
  isOpen?: boolean;

  @not('isOpen') notOpen!: boolean;
}
