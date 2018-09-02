import Component from '@ember/component';
import { attribute, classNames, layout, tagName } from '@ember-decorators/component';
import template from '../templates/components/t-loader';

/**
  Transformicon Loader component.

  @example
  ```hbs
    {{t-loader}}
  ```
*/
@layout(template)
@tagName('span')
@classNames('tcon-loader--spinner360')
export default class TLoaderComponent extends Component {
  @attribute('aria-label') label = 'loading';
}
