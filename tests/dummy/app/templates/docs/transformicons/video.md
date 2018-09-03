# Video Transformicon
---
## API
  * `is-playing` boolean - Set initial playing state.
  * `onclick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isPlaying`, which is a boolean type indicating if the current state is playing or stopped.

### animation
`<TVideo />` <TVideo />

### is-playing
```handlebars
<TVideo @is-playing={{true}} />
<TVideo @is-playing={{someBoundProperty}} />
```
`<TVideo @is-playing={{true}} />` <TVideo @is-playing={{true}} />

### onclick action
`<TVideo @is-playing={{isVideoPlaying}} @onclick={{action this.updateVideoAction}} />` <TVideo @is-playing={{isVideoPlaying}} @onclick={{action this.updateVideoAction}} />

`isVideoPlaying` = {{isVideoPlaying}}
