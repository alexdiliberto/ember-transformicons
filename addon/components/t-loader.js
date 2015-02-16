import Ember from 'ember';

var Component = Ember.Component;

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
  tagName: 'span',

  attributeBindings: ['aria-label'],
  'aria-label': 'loading',

  classNames: ['tcon-loader--spinner360']
});
