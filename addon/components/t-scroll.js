import Component from '@ember/component';
import { layout, tagName } from '@ember-decorators/component';
import classic from 'ember-classic-decorator';
import template from '../templates/components/t-scroll';

/**
  Scroll Transformicon

  ```hbs
    <TScroll />
  ```
*/
@layout(template)
@tagName('')
@classic
export default class TScrollComponent extends Component {}
