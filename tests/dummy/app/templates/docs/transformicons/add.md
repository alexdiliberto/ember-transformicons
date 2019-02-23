# Add Transformicon
---
## API
  * `is-added` boolean - Set initial open add state.
  * `onclick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isAdded`, which is a boolean type indicating if the current state is pending add.

### animation
{{#docs-snippet name='t-add-animation-snippet.hbs'}}
  <TAdd />
  <TAdd @animation="minus" />
  <TAdd @a="check" />
{{/docs-snippet}}

`default`
<TAdd />
`minus (default)`
<TAdd @animation="minus" />
`check`
<TAdd @a="check" />

<br />

### is-added
{{#docs-snippet name='t-add-is-added-snippet.hbs'}}
  <TAdd @is-added={{true}} />
{{/docs-snippet}}

<TAdd @is-added={{true}} />

<br />

### onclick action
{{#docs-snippet name='t-add-onclick-snippet.hbs'}}
  {{! Custom onclick handler after the addon toggles the value }}
  <TAdd
    @is-added={{isAdded}}
    @onclick={{action this.updateAddAction}} />
{{/docs-snippet}}

<TAdd
  @is-added={{isAdded}}
  @onclick={{action this.updateAddAction}} />
  
`isAdded` = {{isAdded}}
