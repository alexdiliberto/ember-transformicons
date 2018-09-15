import Component from '@ember/component';
import { attribute, classNames, layout, tagName } from '@ember-decorators/component';
// NOTE: https://github.com/typed-ember/ember-cli-typescript/issues/242
// @ts-ignore: Ignore import of compiled template
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
