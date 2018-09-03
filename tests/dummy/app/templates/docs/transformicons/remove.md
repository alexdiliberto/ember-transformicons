# Remove Transformicon
---
## API
  * `is-removed` boolean - Set initial open removed state.
  * `onclick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isRemoved`, which is a boolean type indicating if the current state is pending remove.

### animation
```handlebars
<TRemove />
<TRemove @animation="check" />
<TRemove @a="chevron-left" />
<TRemove @a="chevron-right" />
<TRemove @a="chevron-down" />
<TRemove @a="chevron-up" />
```
`<TRemove />` <TRemove />
`<TRemove @a="check" />` <TRemove @a="check" />
`<TRemove @a="chevron-left" />` <TRemove @a="chevron-left" />
`<TRemove @a="chevron-right" />` <TRemove @a="chevron-right" />
`<TRemove @a="chevron-down" />` <TRemove @a="chevron-down" />
`<TRemove @a="chevron-up" />` <TRemove @a="chevron-up" />

### is-removed
```handlebars
<TRemove @is-removed={{true}} />
<TRemove @is-removed={{someBoundProperty}} />
```
`<TRemove @is-removed={{true}} />` <TRemove @is-removed={{true}} />

### onclick action
`<TRemove @is-removed={{isRemoved}} @onclick={{action this.updateRemoveAction}} />` <TRemove @is-removed={{isRemoved}} @onclick={{action this.updateRemoveAction}} />

`isRemoved` = {{isRemoved}}
