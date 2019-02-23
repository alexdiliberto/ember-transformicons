# Video Transformicon
---
## API
  * `is-playing` boolean - Set initial playing state.
  * `onclick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isPlaying`, which is a boolean type indicating if the current state is playing or stopped.

### animation
{{#docs-snippet name='t-video-animation-snippet.hbs'}}
  <TVideo /> 
{{/docs-snippet}}

<TVideo class="docs-mt-2" />

<br />

### is-playing
{{#docs-snippet name='t-menu-is-open-snippet.hbs'}}
  <TVideo @is-playing={{true}} />
{{/docs-snippet}}

<TVideo class="docs-mt-2" @is-playing={{true}} />

<br />

### onclick action
{{#docs-snippet name='t-menu-onclick-snippet.hbs'}}
  {{! Custom onclick handler after the addon toggles the value }}
  <TVideo
    @is-playing={{isVideoPlaying}}
    @onclick={{action this.updateVideoAction}} />
{{/docs-snippet}}

<TVideo
  class="docs-mt-2"
  @is-playing={{isVideoPlaying}}
  @onclick={{action this.updateVideoAction}} />

`isVideoPlaying` = {{isVideoPlaying}}
