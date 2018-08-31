import BaseTransformiconComponent from './-private/base';
import { get } from '@ember/object';
import { className, classNames, layout } from '@ember-decorators/component';
import { computed } from '@ember-decorators/object';
import { reads } from '@ember-decorators/object/computed';
import _defaultTo from 'lodash.defaultto';
import template from '../templates/components/t-mail';

/**
  Transformicon Mail component.

  PUBLIC - Optional parameters:
    * `is-open` boolean - Set initial open mail state.
    * `onclick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isOpen`, which is a boolean type indicating if the current state is open or closed.

  Examples:

    ```hbs
      {{! These are functionally equivalent}}

      {{t-mail}}
      {{t-mail is-open=true}}
    ```

  @class TMailComponent
  @extends BaseTransformiconComponent
  @public
*/
@layout(template)
@classNames('tcon-mail--envelope')
export default class TMailComponent extends BaseTransformiconComponent {
  label = 'open mailbox';

  /*
    PUBLIC COMPONENT API
  */
  'is-open' = _defaultTo(this['is-open'], true);

  @reads('type') ariaRole;

  /**
    Get the classname representing the `open` toggled state for the mail icon. This classname is stored in the `BaseTransformiconComponent`.

    @property isOpen
    @type String|Boolean
    @public
  */
  @className
  @computed('is-open')
  get isOpen() {
    return get(this, 'is-open') ? false : get(this, 'transformClass');
  }
}
