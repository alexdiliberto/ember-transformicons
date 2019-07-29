# Grid Transformicon
---
## API
  * `isOpen` boolean - Set initial open grid state.
  * `onClick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isOpen`, which is a boolean type indicating if the current state is open or closed.

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

### isOpen
{{#docs-snippet name='t-grid-is-open-snippet.hbs'}}
  <TGrid @isOpen={{true}} />
{{/docs-snippet}}

<TGrid @isOpen={{true}} />

<br />

### onClick action
{{#docs-snippet name='t-grid-onclick-snippet.hbs'}}
  {{! Custom onclick handler after the addon toggles the value }}
  <TGrid
    @isOpen={{isGridOpen}}
    @onClick={{action this.updateGridAction}} />
{{/docs-snippet}}

<TGrid 
  @isOpen={{isGridOpen}}
  @onClick={{action this.updateGridAction}} />

`isGridOpen` = {{isGridOpen}}
