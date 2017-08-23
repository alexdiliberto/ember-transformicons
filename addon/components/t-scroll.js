import Component from '@ember/component';
import layout from '../templates/components/t-scroll';

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
export default Component.extend({
  layout,

  tagName: 'span',
  attributeBindings: ['label:aria-label', 'aria-hidden'],
  classNames: ['tcon-indicator'],

  label: 'scroll',
  'aria-hidden': 'true'
});
