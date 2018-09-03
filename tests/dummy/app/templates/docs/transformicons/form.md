# Form Transformicon
---
## API
  * `is-searching` boolean - Set initial searching state.
  * `onclick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isSearching`, which is a boolean type indicating if the current state is searching or not searching.

### animation
`<TForm />` <TForm />

### is-searching
```handlebars
<TForm @is-searching={{false}} />
<TForm @is-searching={{someBoundProperty}} />
```
`<TForm @is-searching={{true}} />` <TForm @is-searching={{true}} />

### onclick action
`<TForm @is-searching={{isSearching}} @onclick={{action this.updateFormAction}} />` <TForm @is-searching={{isSearching}} @onclick={{action this.updateFormAction}} />

`isSearching` = {{isSearching}}
