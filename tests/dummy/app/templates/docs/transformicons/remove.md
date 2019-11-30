# Remove Transformicon
---
## API
  * `isRemoved` boolean - Set initial open removed state.

### animation
{{#docs-snippet name='t-remove-animation-snippet.hbs'}}
  <TRemove
    @isRemoved={{this.default}}
    {{on "click" (fn (mut this.default) (not this.default))}}
  />
  <TRemove
    @animation="check"
    @isRemoved={{this.check}}
    {{on "click" (fn (mut this.check) (not this.check))}}
  />
  <TRemove
    @animation="chevron-left"
    @isRemoved={{this.chevronLeft}}
    {{on "click" (fn (mut this.chevronLeft) (not this.chevronLeft))}}
  />
  <TRemove
    @animation="chevron-right"
    @isRemoved={{this.chevronRight}}
    {{on "click" (fn (mut this.chevronRight) (not this.chevronRight))}}
  />
  <TRemove
    @animation="chevron-down"
    @isRemoved={{this.chevronDown}}
    {{on "click" (fn (mut this.chevronDown) (not this.chevronDown))}}
  />
  <TRemove
    @animation="chevron-up"
    @isRemoved={{this.chevronUp}}
    {{on "click" (fn (mut this.chevronUp) (not this.chevronUp))}}
  />
{{/docs-snippet}}

`default`
<TRemove
  @isRemoved={{this.default}}
  {{on "click" (fn (mut this.default) (not this.default))}}
/>

`this.default` = {{this.default}}

`check (default)`
<TRemove
  @animation="check"
  @isRemoved={{this.check}}
  {{on "click" (fn (mut this.check) (not this.check))}}
/>

`this.check` = {{this.check}}

`chevron-left`
<TRemove
  @animation="chevron-left"
  @isRemoved={{this.chevronLeft}}
  {{on "click" (fn (mut this.chevronLeft) (not this.chevronLeft))}}
/>

`this.chevronLeft` = {{this.chevronLeft}}

`chevron-right`
<TRemove
  @animation="chevron-right"
  @isRemoved={{this.chevronRight}}
  {{on "click" (fn (mut this.chevronRight) (not this.chevronRight))}}
/>

`this.chevronRight` = {{this.chevronRight}}

`chevron-down`
<TRemove
  @animation="chevron-down"
  @isRemoved={{this.chevronDown}}
  {{on "click" (fn (mut this.chevronDown) (not this.chevronDown))}}
/>

`this.chevronDown` = {{this.chevronDown}}

`chevron-up`
<TRemove
  @animation="chevron-up"
  @isRemoved={{this.chevronUp}}
  {{on "click" (fn (mut this.chevronUp) (not this.chevronUp))}}
/>

`this.chevronUp` = {{this.chevronUp}}