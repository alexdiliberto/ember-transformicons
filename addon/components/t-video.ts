import Component from '@ember/component';
import { layout, tagName } from '@ember-decorators/component';
import classic from 'ember-classic-decorator';
import template from 'ember-transformicons/templates/components/t-video';

/**
  Video Transformicon

  PUBLIC
    * `isPlaying` boolean - Set initial playing state.

  ```hbs
    {{! These are functionally equivalent}}
    <TVideo />
    <TVideo @isPlaying={{false}} />
  ```

  @class TVideoComponent
  @public
*/
@layout(template)
@tagName('')
@classic
export default class TVideoComponent extends Component {
  // --- COMPONENT ARGUMENTS ---
  isPlaying?: boolean;
}
