import Component from '@ember/component';
import { get } from '@ember/object';
import { assert } from '@ember/debug';
import _defaultTo from 'lodash.defaultto';
import { attribute, classNames, tagName } from '@ember-decorators/component';

/**
  Transformicon Base component.

  @class BaseTransformiconComponent
  @extends Ember.Component
  @public
*/
@tagName('button')
@classNames('tcon')
export default class BaseTransformiconComponent extends Component {
  @attribute type = 'button';
  @attribute('aria-label') label = null;

  /**
    Stores the classname representing the `on` toggled state for the transformicon. This classname will apply the necessary CSS animations and transitions.

    @property transformClass
    @type String
    @default 'tcon-transform'
    @final
    @public
  */
  transformClass = 'tcon-transform';

  /**
    Stores the name of the component's public property indicating initial toggled state. Possible `initialState` names include:

      * `is-open`
      * `is-added`
      * `is-searching`
      * `is-removed`
      * `is-playing`

    @property initialState
    @type String
    @default 'is-open'
    @public
  */
  initialState = _defaultTo(this.initialState, 'is-open');

  /**
    This click handler does two things after retrieving the transformicons initital state property name.

    - It will toggle the state of the transformicon by toggling the `initialState` property name.
    - It will also, if necessary, call an `onclick` closure action from to the consuming application's parent controller or component when the transformicon is clicked. This action is returned with 1 parameter indicating if the current icon state is open | added | searching | removed | playing.

    @method click
    @public
  */
  click() {
    let initStateProp = this.initialState;
    let onclick = this.onclick;

    this.toggleProperty(initStateProp);

    if (onclick) {
      assert(`[ember-transformicons] ${this.toString()} \`onclick\` action handler must be a valid closure action`, typeof onclick === 'function');

      let boolInitStateProp = get(this, initStateProp);
      onclick(boolInitStateProp);
    }
  }
}
