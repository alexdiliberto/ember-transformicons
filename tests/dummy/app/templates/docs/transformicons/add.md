# Add Transformicon
---
## API and Examples
Add optional parameters:
  * `is-added` boolean - Set initial open add state.
  * `onclick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isAdded`, which is a boolean type indicating if the current state is pending add.

### animation
```handlebars
{{t-add}}
{{t-add animation="minus"}}
{{t-add a="check"}}
```
`{{t-add}}` {{t-add}}
`{{t-add a="minus"}}` {{t-add a="minus"}}
`{{t-add a="check"}}` {{t-add a="check"}}

### is-added
```handlebars
{{t-add is-added=true}}
{{t-add is-added=someBoundProperty}}
```
`{{t-add is-added=true}}` {{t-add is-added=true}}

### onclick action
`{{t-add is-added=isAdded onclick=(action "updateAddAction")}}` {{t-add is-added=isAdded onclick=(action "updateAddAction")}}

`isAdded` = {{isAdded}}
