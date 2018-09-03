# Mail Transformicon
---
## API
  * `is-open` boolean - Set initial open mail state.
  * `onclick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isOpen`, which is a boolean type indicating if the current state is open or closed.

### animation
`<TMail />` <TMail @class="docs-mt-3" />

### is-open
```handlebars
<TMail @is-open={{false}} />
<TMail @is-open={{someBoundProperty}} />
```
`<TMail @is-open={{false}} />` <TMail @is-open={{false}} @class="docs-mt-3" />

### onclick action
`<TMail @is-open={{hasUnreadMail}} @onclick={{action this.updateMailAction}} />` <TMail @is-open={{hasUnreadMail}} @onclick={{action this.updateMailAction}} @class="docs-mt-3" />

`hasUnreadMail` = {{hasUnreadMail}}
