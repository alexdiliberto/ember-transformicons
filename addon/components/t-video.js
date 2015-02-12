import Ember from 'ember';

var Component = Ember.Component;

/**
  Transformicon Video component.

  Example:

    ```hbs
      {{t-video}}
    ```

  @class TVideoComponent
  @extends Ember.Component
*/
export default Component.extend({
  tagName: 'button',

  attributeBindings: ['type', 'role', 'aria-label'],
  type: 'button',
  role: 'button',
  'aria-label': 'play video',

  classNames: ['tcon', 'tcon-vid--play']
});
