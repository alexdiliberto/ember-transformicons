import Component from '@ember/component';
import { attribute, classNames, layout, tagName } from '@ember-decorators/component';
import template from '../templates/components/t-loader';

/**
  Loader Transformicon

  ```hbs
    <TLoader />
  ```
*/
@layout(template)
@tagName('span')
@classNames('tcon-loader--spinner360')
export default class TLoaderComponent extends Component {
  @attribute('aria-label') label = 'loading';
}
