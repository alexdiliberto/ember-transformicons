# Grid Transformicon
---
## API
  * `isOpen` boolean - Set initial open grid state.

### animation
{{#docs-snippet name='t-grid-animation-snippet.hbs'}}
  <TGrid
    @isOpen={{this.default}}
    {{on "click" (fn (mut this.default) (not this.default))}}
  />
  <TGrid
    @animation="rearrange"
    @isOpen={{this.rearrange}}
    {{on "click" (fn (mut this.rearrange) (not this.rearrange))}}
  />
  <TGrid
    @animation="collapse"
    @isOpen={{this.collapse}}
    {{on "click" (fn (mut this.collapse) (not this.collapse))}}
  />
{{/docs-snippet}}

`default`
<TGrid
  @isOpen={{this.default}}
  {{on "click" (fn (mut this.default) (not this.default))}}
/>

`this.default` = {{this.default}}

`rearrange (default)`
<TGrid
  @animation="rearrange"
  @isOpen={{this.rearrange}}
  {{on "click" (fn (mut this.rearrange) (not this.rearrange))}}
/>

`this.rearrange` = {{this.rearrange}}

`collapse`
<TGrid
  @animation="collapse"
  @isOpen={{this.collapse}}
  {{on "click" (fn (mut this.collapse) (not this.collapse))}}
/>

`this.collapse` = {{this.collapse}}