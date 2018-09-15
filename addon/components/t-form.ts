import BaseTransformiconComponent from './-private/base';
import { get } from '@ember/object';
import { className, classNames, layout } from '@ember-decorators/component';
import { computed } from '@ember-decorators/object';
import _defaultTo from 'lodash.defaultto';
// NOTE: https://github.com/typed-ember/ember-cli-typescript/issues/242
// @ts-ignore: Ignore import of compiled template
import template from '../templates/components/t-form';

type InitialState = 'is-open'|'is-added'|'is-searching'|'is-removed'|'is-playing';

/**
  Form Transformicon

  PUBLIC
    * `is-searching` boolean - Set initial searching state.
    * `onclick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isSearching`, which is a boolean type indicating if the current state is searching or not searching.

  ```hbs
    {{! These are functionally equivalent}}
    <TForm />
    <TForm @is-searching={{false}} />
  ```
*/
@layout(template)
@classNames('tcon-search--xcross')
export default class TFormComponent extends BaseTransformiconComponent {
  label = 'toggle search';
  initialState: InitialState = 'is-searching';

  /**
   * Flag to indicate the state of this transformicon
   */
  // 'is-searching' = _defaultTo(this['is-searching'], false);
  'is-searching': boolean;

  constructor() {
    super(...arguments);

    // NOTE: ESDoc does not currently support parsing a quoted and dasherized class field. Adding
    // here from the constructor as a temporary workaround.
    // https://github.com/esdoc/esdoc/issues/519#issuecomment-417895936
    this['is-searching'] = _defaultTo(this['is-searching'], false);
  }

  /**
   * Get the {@link transformClass} CSS classname representing the `is-searching` toggled state
   * for this transformicon
   */
  @className
  @computed('is-searching')
  get isSearching(): string|boolean {
    return get(this, 'is-searching') ? get(this, 'transformClass') : false;
  }
}
