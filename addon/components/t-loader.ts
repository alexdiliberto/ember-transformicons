import Component from '@ember/component';
import { layout, tagName } from '@ember-decorators/component';
import classic from 'ember-classic-decorator';
import template from 'ember-transformicons/templates/components/t-loader';

/**
  Loader Transformicon

  ```hbs
    <TLoader />
  ```

  @class TLoaderComponent
  @public
*/
@layout(template)
@tagName('')
@classic
export default class TLoaderComponent extends Component {}
