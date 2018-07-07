import { computed, get } from '@ember/object';
import layout from '../templates/components/t-form';
import BaseTransformicon from './-private/base';

/**
  Transformicon Form component.

  PUBLIC - Optional parameters:
    * `is-searching` boolean - Set initial searching state.
    * `onclick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isSearching`, which is a boolean type indicating if the current state is searching or not searching.

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

  classNames: ['tcon-search--xcross'],
  classNameBindings: ['isSearching'],

  label: 'toggle search',
  initialState: 'is-searching',

  /*
    PUBLIC COMPONENT API
  */
  'is-searching': false,

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
  })
});
