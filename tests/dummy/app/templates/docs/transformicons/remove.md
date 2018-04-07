# Remove Transformicon
---
## API and Examples
Remove optional parameters:
  * `is-removed` boolean - Set initial open removed state.
  * `onclick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isRemoved`, which is a boolean type indicating if the current state is pending remove.

### animation
```handlebars
{{t-remove}}
{{t-remove animation="check"}}
{{t-remove a="chevron-left"}}
{{t-remove a="chevron-right"}}
{{t-remove a="chevron-down"}}
{{t-remove a="chevron-up"}}
```
`{{t-remove}}` {{t-remove}}
`{{t-remove a="check"}}` {{t-remove a="check"}}
`{{t-remove a="chevron-left"}}` {{t-remove a="chevron-left"}}
`{{t-remove a="chevron-right"}}` {{t-remove a="chevron-right"}}
`{{t-remove a="chevron-down"}}` {{t-remove a="chevron-down"}}
`{{t-remove a="chevron-up"}}` {{t-remove a="chevron-up"}}

### is-removed
```handlebars
{{t-remove is-removed=true}}
{{t-remove is-removed=someBoundProperty}}
```
`{{t-remove is-removed=true}}` {{t-remove is-removed=true}}

### onclick action
`{{t-remove is-removed=isRemoved onclick=(action "updateRemoveAction")}}` {{t-remove is-removed=isRemoved onclick=(action "updateRemoveAction")}}

`isRemoved` = {{isRemoved}}
