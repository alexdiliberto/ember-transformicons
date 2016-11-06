import Ember from 'ember';
import layout from '../templates/components/t-loader';

const {
  Component
} = Ember;

/**
  Transformicon Loader component.

  Example:

    ```hbs
      {{t-loader}}
    ```

  @class TLoaderComponent
  @extends Ember.Component
*/
export default Component.extend({
  layout,

  tagName: 'span',

  attributeBindings: ['aria-label'],
  'aria-label': 'loading',

  classNames: ['tcon-loader--spinner360']
});
