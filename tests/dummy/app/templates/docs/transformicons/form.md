# Form Transformicon
---
## API and Examples
Form optional parameters:
  * `is-searching` boolean - Set initial searching state.
  * `onclick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isSearching`, which is a boolean type indicating if the current state is searching or not searching.

### animation
`{{t-form}}` {{t-form}}

### is-searching
```handlebars
{{t-form is-searching=false}}
{{t-form is-searching=someBoundProperty}}
```
`{{t-form is-searching=true}}` {{t-form is-searching=true}}

### onclick action
`{{t-form is-searching=isSearching onclick=(action "updateFormAction")}}` {{t-form is-searching=isSearching onclick=(action "updateFormAction")}}

`isSearching` = {{isSearching}}
