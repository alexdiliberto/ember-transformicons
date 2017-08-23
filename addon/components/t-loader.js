import Component from '@ember/component';
import layout from '../templates/components/t-loader';

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
export default Component.extend({
  layout,

  tagName: 'span',

  attributeBindings: ['label:aria-label'],
  label: 'loading',

  classNames: ['tcon-loader--spinner360']
});
