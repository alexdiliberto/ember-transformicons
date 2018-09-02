import Component from '@ember/component';
import { attribute, classNames, layout, tagName } from '@ember-decorators/component';
import template from '../templates/components/t-scroll';

/**
  Transformicon Scroll Indicator component.

  @example
  ```hbs
    {{t-scroll}}
  ```
*/
@layout(template)
@tagName('span')
@classNames('tcon-indicator')
export default class TScrollComponent extends Component {
  @attribute('aria-hidden') ariaHidden = 'true';
  @attribute('aria-label') label = 'scroll';
}
