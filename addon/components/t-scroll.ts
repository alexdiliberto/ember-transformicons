import Component from '@ember/component';
import { attribute, classNames, layout, tagName } from '@ember-decorators/component';
// NOTE: https://github.com/typed-ember/ember-cli-typescript/issues/242
// @ts-ignore: Ignore import of compiled template
import template from '../templates/components/t-scroll';

/**
  Scroll Transformicon

  ```hbs
    <TScroll />
  ```
*/
@layout(template)
@tagName('span')
@classNames('tcon-indicator')
export default class TScrollComponent extends Component {
  @attribute('aria-hidden') ariaHidden = 'true';
  @attribute('aria-label') label = 'scroll';
}
