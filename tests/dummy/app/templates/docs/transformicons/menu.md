# Menu Transformicon
---
## API
  * `is-open` boolean - Set initial open menu state.
  * `onclick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isOpen`, which is a boolean type indicating if the current state is open or closed.

### animation
{{#docs-snippet name='t-menu-animation-snippet.hbs'}}
  <TMenu /> 
  <TMenu @animation="butterfly" /> {}
  <TMenu @a="minus" />
  <TMenu @a="x-cross" />
  <TMenu @a="arrow-up" />
  <TMenu @a="arrow-360-left" />
  <TMenu @a="arrow-left" />
{{/docs-snippet}}

`default`
<TMenu />
`butterfly (default)`
<TMenu @animation="butterfly" />
`minus`
<TMenu @a="minus" />
`x-cross`
<TMenu @a="x-cross" />
`arrow-up`
<TMenu @a="arrow-up" />
`arrow-360-left`
<TMenu @a="arrow-360-left" />
`arrow-left` <TMenu @a="arrow-left" />

<br />

### is-open
{{#docs-snippet name='t-menu-is-open-snippet.hbs'}}
  <TMenu @is-open={{true}} />
{{/docs-snippet}}

<TMenu @is-open={{true}} />

<br />

### onclick action
{{#docs-snippet name='t-menu-onclick-snippet.hbs'}}
  {{! Custom onclick handler after the addon toggles the value }}
  <TMenu
    @is-open={{isMenuOpen}}
    @onclick={{action this.updateMenuAction}} />
{{/docs-snippet}}

<TMenu
  @is-open={{isMenuOpen}}
  @onclick={{action this.updateMenuAction}} />

`isMenuOpen` = {{isMenuOpen}}
