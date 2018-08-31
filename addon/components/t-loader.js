import Component from '@ember/component';
import { attribute, classNames, layout, tagName } from '@ember-decorators/component';
import template from '../templates/components/t-loader';

/**
  Transformicon Loader component.

  Example:

    ```hbs
      {{t-loader}}
    ```

  @class TLoaderComponent
  @extends Ember.Component
  @public
*/
@layout(template)
@tagName('span')
@classNames('tcon-loader--spinner360')
export default class TLoaderComponent extends Component {
  @attribute('aria-label') label = 'loading';
}
