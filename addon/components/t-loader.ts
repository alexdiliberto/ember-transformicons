import Component from '@glimmer/component';
import { setComponentTemplate } from '@ember/component';
import { hbs } from 'ember-cli-htmlbars';

/**
  Loader Transformicon

  ```hbs
    <TLoader />
  ```

  @class TLoaderComponent
  @public
*/
class TLoaderComponent extends Component {}

export default setComponentTemplate(
  hbs`
  <span aria-label="loading" class="tcon-loader--spinner360" ...attributes>
    <span class="tcon-visuallyhidden">loading</span>
  </span>
  `,
  TLoaderComponent
);
