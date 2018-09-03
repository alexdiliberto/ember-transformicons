# Add Transformicon
---
## API
  * `is-added` boolean - Set initial open add state.
  * `onclick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isAdded`, which is a boolean type indicating if the current state is pending add.

### animation
```handlebars
<TAdd />
<TAdd @animation="minus" />
<TAdd @a="check" />
```
`<TAdd />` <TAdd />
`<TAdd @a="minus" />` <TAdd @a="minus" />
`<TAdd @a="check" />` <TAdd @a="check" />

### is-added
```handlebars
<TAdd @is-added={{true}} />
<TAdd @is-added={{someBoundProperty}} />
```
`<TAdd @is-added={{true}} />` <TAdd @is-added={{true}} />

### onclick action
`<TAdd @is-added={{isAdded}} @onclick={{action this.updateAddAction}} />` <TAdd @is-added={{isAdded}} @onclick={{action this.updateAddAction}} />

`isAdded` = {{isAdded}}
