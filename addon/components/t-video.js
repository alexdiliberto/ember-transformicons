import Component from '@ember/component';
import { assert } from '@ember/debug';
import { action } from '@ember/object';
import { layout, tagName } from '@ember-decorators/component';
import classic from 'ember-classic-decorator';
import template from '../templates/components/t-video';

/**
  Video Transformicon

  PUBLIC
    * `isPlaying` boolean - Set initial playing state.
    * `onClick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isPlaying`, which is a boolean type indicating if the current state is playing or stopped.

  ```hbs
    {{! These are functionally equivalent}}
    <TVideo />
    <TVideo @isPlaying={{false}} />
  ```
*/
@layout(template)
@tagName('')
@classic
export default class TVideoComponent extends Component {
  /**
   * Flag to indicate the state of this transformicon
   * @type {boolean}
   */
  isPlaying = false;

  @action
  clickHandler() {
    this.toggleProperty('isPlaying');

    if (this.onClick) {
      assert(
        `[ember-transformicons] ${this.toString()} \`onClick\` action handler must be a valid closure action`,
        typeof this.onClick === 'function'
      );

      this.onClick(this.isPlaying);
    }
  }
}
