import Component from '@glimmer/component';
import { setComponentTemplate } from '@ember/component';
import { hbs } from 'ember-cli-htmlbars';

interface IArgs {
  isPlaying?: boolean;
}

/**
  Video Transformicon

  **PUBLIC**
    * `isPlaying` boolean - Set initial playing state.

  ```hbs
    {{! These are equivalent }}
    <TVideo />
    <TVideo
      @isPlaying={{false}}
    />
  ```

  @class TVideoComponent
  @public
*/
class TVideoComponent extends Component<IArgs> {}

export default setComponentTemplate(
  hbs`
  <button
    aria-label="play video"
    role="button"
    type="button"
    class="tcon tcon-vid--play {{if @isPlaying "tcon-transform"}}" 
    ...attributes
  >
    <span class="tcon-visuallyhidden">play video</span>
  </button>
  `,
  TVideoComponent
);
