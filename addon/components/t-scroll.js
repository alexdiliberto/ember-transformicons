import Component from '@ember/component';
import { attribute, classNames, layout, tagName } from '@ember-decorators/component';
import template from '../templates/components/t-scroll';

/**
  Transformicon Scroll Indicator component.

  Example:

    ```hbs
      {{t-scroll}}
    ```

  @class TScrollComponent
  @extends Ember.Component
  @public
*/
@layout(template)
@tagName('span')
@classNames('tcon-indicator')
export default class TScrollComponent extends Component {
  @attribute('aria-hidden') ariaHidden = 'true';
  @attribute('aria-label') label = 'scroll';
}
