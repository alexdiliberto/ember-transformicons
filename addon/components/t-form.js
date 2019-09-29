import Component from '@ember/component';
import { assert } from '@ember/debug';
import { action } from '@ember/object';
import { layout, tagName } from '@ember-decorators/component';
import classic from 'ember-classic-decorator';
import template from '../templates/components/t-form';

/**
  Form Transformicon

  PUBLIC
    * `isSearching` boolean - Set initial searching state.
    * `onClick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isSearching`, which is a boolean type indicating if the current state is searching or not searching.

  ```hbs
    {{! These are functionally equivalent}}
    <TForm />
    <TForm @isSearching={{false}} />
  ```
*/
@layout(template)
@tagName('')
@classic
export default class TFormComponent extends Component {
  /**
   * Flag to indicate the state of this transformicon
   * @type {boolean}
   */
  isSearching = false;

  @action
  clickHandler() {
    this.toggleProperty('isSearching');

    if (this.onClick) {
      assert(`[ember-transformicons] ${this.toString()} \`onClick\` action handler must be a valid closure action`, typeof this.onClick === 'function');

      this.onClick(this.isSearching);
    }
  }
}
