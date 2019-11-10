import Component from '@ember/component';
import { assert } from '@ember/debug';
import { action } from '@ember/object';
import { not } from '@ember/object/computed';
import { layout, tagName } from '@ember-decorators/component';
import classic from 'ember-classic-decorator';
import template from 'ember-transformicons/templates/components/t-mail';

/**
  Mail Transformicon

  PUBLIC
    * `isOpen` boolean - Set initial open mail state.
    * `onClick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isOpen`, which is a boolean type indicating if the current state is open or closed.

  ```hbs
    {{! These are functionally equivalent}}
    <TMail />
    <TMail @isOpen={{true}} />
  ```

  @class TMailComponent
  @public
*/
@layout(template)
@tagName('')
@classic
export default class TMailComponent extends Component {
  // --- COMPONENT ARGUMENTS ---
  isOpen = true;
  onClick: (prop?: boolean) => void = () => {};

  @not('isOpen') notOpen!: boolean;

  @action
  clickHandler() {
    this.toggleProperty('isOpen');

    if (this.onClick) {
      assert(
        `[ember-transformicons] ${this.toString()} \`onClick\` action handler must be a valid closure action`,
        typeof this.onClick === 'function'
      );

      this.onClick(this.isOpen);
    }
  }
}
