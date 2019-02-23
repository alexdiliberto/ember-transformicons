# Mail Transformicon
---
## API
  * `is-open` boolean - Set initial open mail state.
  * `onclick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isOpen`, which is a boolean type indicating if the current state is open or closed.

### animation
{{#docs-snippet name='t-mail-animation-snippet.hbs'}}
  <TMail />
{{/docs-snippet}}

<TMail class="docs-mt-3" />

<br />

### is-open
{{#docs-snippet name='t-mail-is-open-snippet.hbs'}}
  <TMail @is-open={{false}} />
{{/docs-snippet}}

<TMail class="docs-mt-3" @is-open={{false}} />

<br />

### onclick action
{{#docs-snippet name='t-mail-onclick-snippet.hbs'}}
  {{! Custom onclick handler after the addon toggles the value }}
  <TMail
    @is-open={{hasUnreadMail}}
    @onclick={{action this.updateMailAction}} />
{{/docs-snippet}}

<TMail
  class="docs-mt-3" 
  @is-open={{hasUnreadMail}}
  @onclick={{action this.updateMailAction}} />

`hasUnreadMail` = {{hasUnreadMail}}
