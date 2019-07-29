# Add Transformicon
---
## API
  * `isAdded` boolean - Set initial open added state.
  * `onClick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isAdded`, which is a boolean type indicating if the current state is pending add.

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

### isAdded
{{#docs-snippet name='t-add-is-added-snippet.hbs'}}
  <TAdd @isAdded={{true}} />
{{/docs-snippet}}

<TAdd @isAdded={{true}} />

<br />

### onClick action
{{#docs-snippet name='t-add-onclick-snippet.hbs'}}
  {{! Custom onclick handler after the addon toggles the value }}
  <TAdd
    @isAdded={{isAdded}}
    @onClick={{action this.updateAddAction}} />
{{/docs-snippet}}

<TAdd
  @isAdded={{isAdded}}
  @onClick={{action this.updateAddAction}} />
  
`isAdded` = {{isAdded}}
