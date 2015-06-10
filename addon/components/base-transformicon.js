import Ember from 'ember';

const {
  get,
  Component
} = Ember;

/**
  Transformicon Base component.

  @class BaseTransformiconComponent
  @extends Ember.Component
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
  */
  initialState: 'is-open',

  /**
    This click handler does two things after getting the transformicons initital state name.

    It will toggle the state of the transformicon.
    It will also send a boolean action up to the consuming application when the transformicon is clicked. This action is returned with 1 parameter indicating if the current icon state is open/closed | added/removed | playing/stopped.

    @method click
  */
  click() {
    const initState = get(this, 'initialState');
    this.toggleProperty(initState);
    this.sendAction('action', get(this, initState));
  },
});
