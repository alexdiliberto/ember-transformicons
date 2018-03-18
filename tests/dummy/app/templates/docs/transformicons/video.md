# Video Transformicon
---
## API and Examples
Video optional parameters:
  * `is-playing` boolean - Set initial playing state.
  * `onclick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isPlaying`, which is a boolean type indicating if the current state is playing or stopped.

### animation
`{{t-video}}` {{t-video}}

### is-playing
```handlebars
{{t-video is-playing=true}}
{{t-video is-playing=someBoundProperty}}
```
`{{t-video is-playing=true}}` {{t-video is-playing=true}}

### onclick action
`{{t-video is-playing=isVideoPlaying onclick=(action "updateVideoAction")}}` {{t-video is-playing=isVideoPlaying onclick=(action "updateVideoAction")}}

`isVideoPlaying` = {{isVideoPlaying}}
