# Video Transformicon
---
## API
  * `isPlaying` boolean - Set initial playing state.

### animation
{{#docs-snippet name='t-video-animation-snippet.hbs'}}
  <TVideo 
    @isPlaying={{this.default}}
    {{on "click" (fn (mut this.default) (not this.default))}}
  />
{{/docs-snippet}}

<TVideo
  class="docs-mt-2"
  @isPlaying={{this.default}}
  {{on "click" (fn (mut this.default) (not this.default))}}
/>

`this.default` = {{this.default}}