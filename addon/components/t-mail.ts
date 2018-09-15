import BaseTransformiconComponent from './-private/base';
import { get } from '@ember/object';
import { className, classNames, layout } from '@ember-decorators/component';
import { computed } from '@ember-decorators/object';
import { reads } from '@ember-decorators/object/computed';
import _defaultTo from 'lodash.defaultto';
// NOTE: https://github.com/typed-ember/ember-cli-typescript/issues/242
// @ts-ignore: Ignore import of compiled template
import template from '../templates/components/t-mail';

/**
  Mail Transformicon

  PUBLIC
    * `is-open` boolean - Set initial open mail state.
    * `onclick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isOpen`, which is a boolean type indicating if the current state is open or closed.

  ```hbs
    {{! These are functionally equivalent}}
    <TMail />
    <TMail @is-open={{true}} />
  ```
*/
@layout(template)
@classNames('tcon-mail--envelope')
export default class TMailComponent extends BaseTransformiconComponent {
  label = 'open mailbox';

  /**
   * Flag to indicate the state of this transformicon
   */
  // 'is-open' = _defaultTo(this['is-open'], true);
  'is-open': boolean;

  @reads('type') ariaRole!: string;

  constructor() {
    super(...arguments);

    // NOTE: ESDoc does not currently support parsing a quoted and dasherized class field. Adding
    // here from the constructor as a temporary workaround.
    // https://github.com/esdoc/esdoc/issues/519#issuecomment-417895936
    this['is-open'] = _defaultTo(this['is-open'], true);
  }

  /**
   * Get the {@link transformClass} CSS classname representing the `is-open` toggled state
   * for this transformicon
   */
  @className
  @computed('is-open')
  get isOpen(): string|boolean {
    return get(this, 'is-open') ? false : get(this, 'transformClass');
  }
}
