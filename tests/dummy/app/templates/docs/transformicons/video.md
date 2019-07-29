# Video Transformicon
---
## API
  * `isPlaying` boolean - Set initial playing state.
  * `onClick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isPlaying`, which is a boolean type indicating if the current state is playing or stopped.

### animation
{{#docs-snippet name='t-video-animation-snippet.hbs'}}
  <TVideo /> 
{{/docs-snippet}}

<TVideo class="docs-mt-2" />

<br />

### isPlaying
{{#docs-snippet name='t-video-is-playing-snippet.hbs'}}
  <TVideo @isPlaying={{true}} />
{{/docs-snippet}}

<TVideo class="docs-mt-2" @isPlaying={{true}} />

<br />

### onClick action
{{#docs-snippet name='t-video-onclick-snippet.hbs'}}
  {{! Custom onclick handler after the addon toggles the value }}
  <TVideo
    @isPlaying={{isVideoPlaying}}
    @onClick={{action this.updateVideoAction}} />
{{/docs-snippet}}

<TVideo
  class="docs-mt-2"
  @isPlaying={{isVideoPlaying}}
  @onClick={{action this.updateVideoAction}} />

`isVideoPlaying` = {{isVideoPlaying}}
