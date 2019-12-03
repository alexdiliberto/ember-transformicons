import Component from '@glimmer/component';
import { setComponentTemplate } from '@ember/component';
import { hbs } from 'ember-cli-htmlbars';

interface IArgs {
  isSearching?: boolean;
}

/**
  Form Transformicon

  **PUBLIC**
    * `isSearching` boolean - Set initial searching state.

  ```hbs
    {{! These are equivalent }}
    <TForm />
    <TForm
      @isSearching={{false}}
    />
  ```

  @class TFormComponent
  @public
*/
class TFormComponent extends Component<IArgs> {}

export default setComponentTemplate(
  hbs`
  <button
    aria-label="toggle search"
    type="button"
    class="tcon tcon-search--xcross {{if @isSearching "tcon-transform"}}"
    ...attributes
  >
    <span class="tcon-search__item" aria-hidden="true"></span>
    <span class="tcon-visuallyhidden">toggle search</span>
  </button>
  `,
  TFormComponent
);
