import BaseTransformiconComponent from './-private/base';
import { get } from '@ember/object';
import { className, classNames, layout } from '@ember-decorators/component';
import { computed } from '@ember-decorators/object';
import _defaultTo from 'lodash.defaultto';
import template from '../templates/components/t-form';

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
@layout(template)
@classNames('tcon-search--xcross')
export default class TFormComponent extends BaseTransformiconComponent {
  label = 'toggle search';
  initialState = 'is-searching';

  /*
    PUBLIC COMPONENT API
  */
  'is-searching' = _defaultTo(this['is-searching'], false);

  /**
    Get the classname representing the `searching` toggled state for the video icon. This classname is stored in the `BaseTransformiconComponent`.

    @property isSearching
    @type String|Boolean
    @public
  */
  @className
  @computed('is-searching')
  get isSearching() {
    return get(this, 'is-searching') ? get(this, 'transformClass') : false;
  }
}
