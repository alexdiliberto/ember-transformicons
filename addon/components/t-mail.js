import Ember from 'ember';

var Component = Ember.Component;

/**
  Transformicon Mail component.

  Example:

    ```hbs
      {{t-mail}}
    ```

  @class TMailComponent
  @extends Ember.Component
*/
export default Component.extend({
  tagName: 'button',

  attributeBindings: ['type', 'role', 'aria-label'],
  type: 'button',
  role: 'button',
  'aria-label': 'open mailbox',

  classNames: ['tcon', 'tcon-mail--envelope']
});
