# Grid Transformicon
---
## API and Examples
Grid optional parameters:
  * `is-open` boolean - Set initial open grid state.
  * `onclick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isOpen`, which is a boolean type indicating if the current state is open or closed.

### animation
```handlebars
{{t-grid}}
{{t-grid animation="rearrange"}}
{{t-grid a="collapse"}}
```
`{{t-grid}}` {{t-grid}}
`{{t-grid a="rearrange"}}` {{t-grid a="rearrange"}}
`{{t-grid a="collapse"}}` {{t-grid a="collapse"}}

### is-open
```handlebars
{{t-grid is-open=true}}
{{t-grid is-open=someBoundProperty}}
```
`{{t-grid is-open=true}}` {{t-grid is-open=true}}

### onclick action
`{{t-grid is-open=isGridOpen onclick=(action "updateGridAction")}}` {{t-grid is-open=isGridOpen onclick=(action "updateGridAction")}}

`isGridOpen` = {{isGridOpen}}
