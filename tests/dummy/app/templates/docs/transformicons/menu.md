# Menu Transformicon
---
## API
  * `isOpen` boolean - Set initial open menu state.
  * `onClick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isOpen`, which is a boolean type indicating if the current state is open or closed.

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

### isOpen
{{#docs-snippet name='t-menu-is-open-snippet.hbs'}}
  <TMenu @isOpen={{true}} />
{{/docs-snippet}}

<TMenu @isOpen={{true}} />

<br />

### onClick action
{{#docs-snippet name='t-menu-onclick-snippet.hbs'}}
  {{! Custom onclick handler after the addon toggles the value }}
  <TMenu
    @isOpen={{isMenuOpen}}
    @onClick={{action this.updateMenuAction}} />
{{/docs-snippet}}

<TMenu
  @isOpen={{isMenuOpen}}
  @onClick={{action this.updateMenuAction}} />

`isMenuOpen` = {{isMenuOpen}}
