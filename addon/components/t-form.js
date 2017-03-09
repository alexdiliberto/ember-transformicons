import Ember from 'ember';
import layout from '../templates/components/t-form';
import BaseTransformicon from './base-transformicon';

const {
  get,
  computed
} = Ember;

/**
  Transformicon Form component.

  PUBLIC - Optional parameters:
    * `is-searching` boolean - Set initial searching state.
    * `action` string - The name of your controller/route action to handle an icon click. Returned with 1 parameter `isSearching`, which is a boolean type indicating if the current state is searching or not searching.

  Examples:

    ```hbs
      {{! These are functionally equivalent}}

      {{t-form}}
      {{t-form is-searching=false}}
    ```

  @class TFormComponent
  @extends BaseTransformiconComponent
  @public
*/
export default BaseTransformicon.extend({
  layout,

  'aria-label': 'toggle search',

  classNames: ['tcon-search--xcross'],
  classNameBindings: ['isSearching'],
  /**
    Get the classname representing the `searching` toggled state for the video icon. This classname is stored in the `BaseTransformiconComponent`.

    @property isSearching
    @type String|Boolean
    @public
  */
  isSearching: computed('is-searching', {
    get() {
      return get(this, 'is-searching') ? get(this, 'transformClass') : false;
    }
  }),

  initialState: 'is-searching',

  /**
    PUBLIC COMPONENT PROPERTIES

    @public
   */
  'is-searching': false
});
