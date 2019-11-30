# Menu Transformicon
---
## API
  * `isOpen` boolean - Set initial open menu state.

### animation
{{#docs-snippet name='t-menu-animation-snippet.hbs'}}
  <TMenu
    @isOpen={{this.default}}
    {{on "click" (fn (mut this.default) (not this.default))}}
  /> 
  <TMenu
    @animation="butterfly"
    @isOpen={{this.butterfly}}
    {{on "click" (fn (mut this.butterfly) (not this.butterfly))}}
  />
  <TMenu
    @animation="minus"
    @isOpen={{this.minus}}
    {{on "click" (fn (mut this.minus) (not this.minus))}}
  />
  <TMenu
    @animation="x-cross"
    @isOpen={{this.xCross}}
    {{on "click" (fn (mut this.xCross) (not this.xCross))}}
  />
  <TMenu
    @animation="arrow-up"
    @isOpen={{this.arrowUp}}
    {{on "click" (fn (mut this.arrowUp) (not this.arrowUp))}}
  />
  <TMenu
    @animation="arrow-360-left"
    @isOpen={{this.arrow360Left}}
    {{on "click" (fn (mut this.arrow360Left) (not this.arrow360Left))}}
  />
  <TMenu
    @animation="arrow-left"
    @isOpen={{this.arrowLeft}}
    {{on "click" (fn (mut this.arrowLeft) (not this.arrowLeft))}}
  />
{{/docs-snippet}}

`default`
<TMenu
  @isOpen={{this.default}}
  {{on "click" (fn (mut this.default) (not this.default))}}
/>

`this.default` = {{this.default}}

`butterfly (default)`
<TMenu
  @animation="butterfly"
  @isOpen={{this.butterfly}}
  {{on "click" (fn (mut this.butterfly) (not this.butterfly))}}
/>

`this.butterfly` = {{this.butterfly}}

`minus`
<TMenu
  @animation="minus"
  @isOpen={{this.minus}}
  {{on "click" (fn (mut this.minus) (not this.minus))}}
/>

`this.minus` = {{this.minus}}

`x-cross`
<TMenu
  @animation="x-cross"
  @isOpen={{this.xCross}}
  {{on "click" (fn (mut this.xCross) (not this.xCross))}}
/>

`this.xCross` = {{this.xCross}}

`arrow-up`
<TMenu
  @animation="arrow-up"
  @isOpen={{this.arrowUp}}
  {{on "click" (fn (mut this.arrowUp) (not this.arrowUp))}}
/>

`this.arrowUp` = {{this.arrowUp}}

`arrow-360-left`
<TMenu
  @animation="arrow-360-left"
  @isOpen={{this.arrow360Left}}
  {{on "click" (fn (mut this.arrow360Left) (not this.arrow360Left))}}
/>

`this.arrow360Left` = {{this.arrow360Left}}

`arrow-left`
<TMenu
  @animation="arrow-left"
  @isOpen={{this.arrowLeft}}
  {{on "click" (fn (mut this.arrowLeft) (not this.arrowLeft))}}
/>

`this.arrowLeft` = {{this.arrowLeft}}
