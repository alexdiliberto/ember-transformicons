import Ember from 'ember';

const {
  get,
  Component
} = Ember;

/**
  Transformicon Base component.

  @class BaseTransformiconComponent
  @extends Ember.Component
  @public
*/
export default Component.extend({
  tagName: 'button',

  attributeBindings: ['type', 'role', 'aria-label'],
  type: 'button',
  role: undefined,
  'aria-label': undefined,

  classNames: ['tcon'],

  /**
    Stores the classname representing the `on` toggled state for the transformicon. This classname will apply the necessary CSS animations and transitions.

    @property transformClass
    @type String
    @default 'tcon-transform'
    @final
    @public
  */
  transformClass: 'tcon-transform',

  /**
    Stores the name of the component's public property indicating initial toggled state. Possible `initialState` names include:

      * `is-open`
      * `is-added`
      * `is-removed`
      * `is-playing`

    @property initialState
    @type String
    @default 'is-open'
    @public
  */
  initialState: 'is-open',

  /**
    This click handler does two things after retrieving the transformicons initital state property name.

    - It will toggle the state of the transformicon.
    - It will also send a boolean action up to the consuming application when the transformicon is clicked. This action is returned with 1 parameter indicating if the current icon state is open/closed | added/removed | playing/stopped.

    @method click
    @public
  */
  click() {
    let initStateProp = get(this, 'initialState');
    this.toggleProperty(initStateProp);
    this.sendAction('action', get(this, initStateProp));
  }
});
