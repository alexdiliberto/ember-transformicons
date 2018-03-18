# Menu Transformicon
---
## API and Examples
Menu optional parameters:
  * `is-open` boolean - Set initial open menu state.
  * `onclick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isOpen`, which is a boolean type indicating if the current state is open or closed.

### animation
```handlebars
{{t-menu}}
{{t-menu animation="butterfly"}}
{{t-menu a="minus"}}
{{t-menu a="x-cross"}}
{{t-menu a="arrow-up"}}
{{t-menu a="arrow-360-left"}}
{{t-menu a="arrow-left"}}
```
`{{t-menu}}` {{t-menu}}
`{{t-menu a="butterfly"}}` {{t-menu a="butterfly"}}
`{{t-menu a="minus"}}` {{t-menu a="minus"}}
`{{t-menu a="x-cross"}}` {{t-menu a="x-cross"}}
`{{t-menu a="arrow-up"}}` {{t-menu a="arrow-up"}}
`{{t-menu a="arrow-360-left"}}` {{t-menu a="arrow-360-left"}}
`{{t-menu a="arrow-left"}}` {{t-menu a="arrow-left"}}

### is-open
```handlebars
{{t-menu is-open=true}}
{{t-menu is-open=someBoundProperty}}
```
`{{t-menu is-open=true}}` {{t-menu is-open=true}}

### onclick action
`{{t-menu is-open=isMenuOpen onclick=(action "updateMenuAction")}}` {{t-menu is-open=isMenuOpen onclick=(action "updateMenuAction")}}

`isMenuOpen` = {{isMenuOpen}}
