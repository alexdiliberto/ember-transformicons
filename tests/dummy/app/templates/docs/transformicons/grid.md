# Grid Transformicon
---
## API
  * `is-open` boolean - Set initial open grid state.
  * `onclick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isOpen`, which is a boolean type indicating if the current state is open or closed.

### animation
{{#docs-snippet name='t-grid-animation-snippet.hbs'}}
  <TGrid />
  <TGrid @animation="rearrange" />
  <TGrid @a="collapse" />
{{/docs-snippet}}

`default`
<TGrid />
`rearrange (default)`
<TGrid @animation="rearrange" />
`collapse`
<TGrid @a="collapse" />

<br />

### is-open
{{#docs-snippet name='t-grid-is-open-snippet.hbs'}}
  <TGrid @is-open={{true}} />
{{/docs-snippet}}

<TGrid @is-open={{true}} />

<br />

### onclick action
{{#docs-snippet name='t-grid-onclick-snippet.hbs'}}
  {{! Custom onclick handler after the addon toggles the value }}
  <TGrid
    @is-open={{isGridOpen}}
    @onclick={{action this.updateGridAction}} />
{{/docs-snippet}}

<TGrid 
  @is-open={{isGridOpen}}
  @onclick={{action this.updateGridAction}} />

`isGridOpen` = {{isGridOpen}}
