# Mail Transformicon
---
## API
  * `isOpen` boolean - Set initial open mail state.
  * `onClick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isOpen`, which is a boolean type indicating if the current state is open or closed.

### animation
{{#docs-snippet name='t-mail-animation-snippet.hbs'}}
  <TMail />
{{/docs-snippet}}

<TMail class="docs-mt-3" />

<br />

### isOpen
{{#docs-snippet name='t-mail-is-open-snippet.hbs'}}
  <TMail @isOpen={{false}} />
{{/docs-snippet}}

<TMail class="docs-mt-3" @isOpen={{false}} />

<br />

### onClick action
{{#docs-snippet name='t-mail-onclick-snippet.hbs'}}
  {{! Custom onclick handler after the addon toggles the value }}
  <TMail
    @isOpen={{hasUnreadMail}}
    @onClick={{action this.updateMailAction}} />
{{/docs-snippet}}

<TMail
  class="docs-mt-3" 
  @isOpen={{hasUnreadMail}}
  @onClick={{action this.updateMailAction}} />

`hasUnreadMail` = {{hasUnreadMail}}
