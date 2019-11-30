# Add Transformicon
---
## API
  * `isAdded` boolean - Set initial open added state.

### animation
{{#docs-snippet name='t-add-animation-snippet.hbs'}}
  <TAdd
    @isAdded={{this.default}}
    {{on "click" (fn (mut this.default) (not this.default))}}
  />
  <TAdd
    @animation="minus"
    @isAdded={{this.minus}}
    {{on "click" (fn (mut this.minus) (not this.minus))}}
  />
  <TAdd
    @animation="check"
    @isAdded={{this.check}}
    {{on "click" (fn (mut this.check) (not this.check))}}
  />
{{/docs-snippet}}

`default`
<TAdd
  @isAdded={{this.default}}
  {{on "click" (fn (mut this.default) (not this.default))}}
/>

`this.default` = {{this.default}}

`minus (default)`
<TAdd
  @animation="minus"
  @isAdded={{this.minus}}
  {{on "click" (fn (mut this.minus) (not this.minus))}}
/>

`this.minus` = {{this.minus}}

`check`
<TAdd
  @animation="check"
  @isAdded={{this.check}}
  {{on "click" (fn (mut this.check) (not this.check))}}
/>

`this.check` = {{this.check}}