# Form Transformicon
---
## API
  * `isSearching` boolean - Set initial searching state.

### animation
{{#docs-snippet name='t-form-animation-snippet.hbs'}}
  <TForm 
    @isSearching={{this.default}}
    {{on "click" (fn (mut this.default) (not this.default))}}
  />
{{/docs-snippet}}

<TForm 
  @isSearching={{this.default}}
  {{on "click" (fn (mut this.default) (not this.default))}}
/>

`this.default` = {{this.default}}