# Mail Transformicon
---
## API and Examples
Mail optional parameters:
  * `is-open` boolean - Set initial open mail state.
  * `onclick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isOpen`, which is a boolean type indicating if the current state is open or closed.

### animation
`{{t-mail}}` {{t-mail class="mt3"}}

### is-open
```handlebars
{{t-mail is-open=false}}
{{t-mail is-open=someBoundProperty}}
```
`{{t-mail is-open=false}}` {{t-mail is-open=false class="mt3"}}

### onclick action
`{{t-mail is-open=hasUnreadMail onclick=(action "updateMailAction")}}` {{t-mail is-open=hasUnreadMail onclick=(action "updateMailAction") class="mt3"}}

`hasUnreadMail` = {{hasUnreadMail}}
