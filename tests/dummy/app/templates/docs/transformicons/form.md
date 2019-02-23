# Form Transformicon
---
## API
  * `is-searching` boolean - Set initial searching state.
  * `onclick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isSearching`, which is a boolean type indicating if the current state is searching or not searching.

### animation
{{#docs-snippet name='t-form-animation-snippet.hbs'}}
  <TForm />
{{/docs-snippet}}

<TForm />

<br />

### is-searching
{{#docs-snippet name='t-form-is-searching-snippet.hbs'}}
  <TForm @is-searching={{true}} />
{{/docs-snippet}}

<TForm @is-searching={{true}} />

<br />

### onclick action
{{#docs-snippet name='t-form-onclick-snippet.hbs'}}
  <TForm 
    @is-searching={{isSearching}}
    @onclick={{action this.updateFormAction}} />
{{/docs-snippet}}

<TForm 
  @is-searching={{isSearching}}
  @onclick={{action this.updateFormAction}} />

`isSearching` = {{isSearching}}
