# Mail Transformicon
---
## API
  * `isOpen` boolean - Set initial open mail state.

### animation
{{#docs-snippet name='t-mail-animation-snippet.hbs'}}
  <TMail
    @isOpen={{this.default}}
    {{on "click" (fn (mut this.default) (not this.default))}}
  />
{{/docs-snippet}}

<TMail
  class="docs-mt-3"
  @isOpen={{this.default}}
  {{on "click" (fn (mut this.default) (not this.default))}}
/>

`this.default` = {{this.default}}
