import Component from '@ember/component';
import { layout, tagName } from '@ember-decorators/component';
import classic from 'ember-classic-decorator';
import template from 'ember-transformicons/templates/components/t-form';

/**
  Form Transformicon

  PUBLIC
    * `isSearching` boolean - Set initial searching state.

  ```hbs
    {{! These are functionally equivalent}}
    <TForm />
    <TForm @isSearching={{false}} />
  ```

  @class TFormComponent
  @public
*/
@layout(template)
@tagName('')
@classic
export default class TFormComponent extends Component {
  // --- COMPONENT ARGUMENTS ---
  isSearching?: boolean;
}
