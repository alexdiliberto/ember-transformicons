# Form Transformicon
---
## API
  * `isSearching` boolean - Set initial searching state.
  * `onClick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isSearching`, which is a boolean type indicating if the current state is searching or not searching.

### animation
{{#docs-snippet name='t-form-animation-snippet.hbs'}}
  <TForm />
{{/docs-snippet}}

<TForm />

<br />

### isSearching
{{#docs-snippet name='t-form-isSearching-snippet.hbs'}}
  <TForm @isSearching={{true}} />
{{/docs-snippet}}

<TForm @isSearching={{true}} />

<br />

### onClick action
{{#docs-snippet name='t-form-onclick-snippet.hbs'}}
  <TForm 
    @isSearching={{isSearching}}
    @onClick={{action this.updateFormAction}} />
{{/docs-snippet}}

<TForm 
  @isSearching={{isSearching}}
  @onClick={{action this.updateFormAction}} />

`isSearching` = {{isSearching}}
