import Component from '@ember/component';
import { layout, tagName } from '@ember-decorators/component';
import classic from 'ember-classic-decorator';
import template from '../templates/components/t-loader';

/**
  Loader Transformicon

  ```hbs
    <TLoader />
  ```
*/
@layout(template)
@tagName('')
@classic
export default class TLoaderComponent extends Component {}
