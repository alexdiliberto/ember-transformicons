import Component from '@ember/component';
import { layout, tagName } from '@ember-decorators/component';
import classic from 'ember-classic-decorator';
import template from 'ember-transformicons/templates/components/t-scroll';

/**
  Scroll Transformicon

  ```hbs
    <TScroll />
  ```

  @class TScrollComponent
  @public
*/
@layout(template)
@tagName('')
@classic
export default class TScrollComponent extends Component {}
