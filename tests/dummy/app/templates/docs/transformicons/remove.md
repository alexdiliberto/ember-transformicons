# Remove Transformicon
---
## API
  * `is-removed` boolean - Set initial open removed state.
  * `onclick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isRemoved`, which is a boolean type indicating if the current state is pending remove.

### animation
{{#docs-snippet name='t-remove-animation-snippet.hbs'}}
  <TRemove />
  <TRemove @animation="check" />
  <TRemove @a="chevron-left" />
  <TRemove @a="chevron-right" />
  <TRemove @a="chevron-down" />
  <TRemove @a="chevron-up" />
{{/docs-snippet}}

`default`
<TRemove />
`check (default)`
<TRemove @animation="check" />
`chevron-left`
<TRemove @a="chevron-left" />
`chevron-right`
<TRemove @a="chevron-right" />
`chevron-down`
<TRemove @a="chevron-down" />
`chevron-up`
<TRemove @a="chevron-up" />

<br />

### is-removed
{{#docs-snippet name='t-remove-is-removed-snippet.hbs'}}
  <TRemove @is-removed={{true}} />
{{/docs-snippet}}

<TRemove @is-removed={{true}} />

<br />

### onclick action
{{#docs-snippet name='t-remove-onclick-snippet.hbs'}}
  {{! Custom onclick handler after the addon toggles the value }}
  <TRemove
    @is-removed={{isRemoved}}
    @onclick={{action this.updateRemoveAction}} />
{{/docs-snippet}}

<TRemove
  @is-removed={{isRemoved}}
  @onclick={{action this.updateRemoveAction}} />

`isRemoved` = {{isRemoved}}
