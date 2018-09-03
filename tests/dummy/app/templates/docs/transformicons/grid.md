# Grid Transformicon
---
## API
  * `is-open` boolean - Set initial open grid state.
  * `onclick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isOpen`, which is a boolean type indicating if the current state is open or closed.

### animation
```handlebars
<TGrid />
<TGrid @animation="rearrange" />
<TGrid @a="collapse" />
```
`<TGrid />` <TGrid />
`<TGrid @a="rearrange" />` <TGrid @a="rearrange" />
`<TGrid @a="collapse" />` <TGrid @a="collapse" />

### is-open
```handlebars
<TGrid @is-open={{true}} />
<TGrid @is-open={{someBoundProperty}} />
```
`<TGrid @is-open={{true}} />` <TGrid @is-open={{true}} />

### onclick action
`<TGrid @is-open={{isGridOpen}} @onclick={{action this.updateGridAction}} />` <TGrid @is-open={{isGridOpen}} @onclick={{action this.updateGridAction}} />

`isGridOpen` = {{isGridOpen}}
