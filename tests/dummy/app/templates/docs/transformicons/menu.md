# Menu Transformicon
---
## API
  * `is-open` boolean - Set initial open menu state.
  * `onclick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isOpen`, which is a boolean type indicating if the current state is open or closed.

### animation
```handlebars
<TMenu />
<TMenu @animation="butterfly" />
<TMenu @a="minus" />
<TMenu @a="x-cross" />
<TMenu @a="arrow-up" />
<TMenu @a="arrow-360-left" />
<TMenu @a="arrow-left" />
```
`<TMenu />` <TMenu />
`<TMenu @a="butterfly" />` <TMenu @a="butterfly" />
`<TMenu @a="minus" />` <TMenu @a="minus" />
`<TMenu @a="x-cross" />` <TMenu @a="x-cross" />
`<TMenu @a="arrow-up" />` <TMenu @a="arrow-up" />
`<TMenu @a="arrow-360-left" />` <TMenu @a="arrow-360-left" />
`<TMenu @a="arrow-left" />` <TMenu @a="arrow-left" />

### is-open
```handlebars
<TMenu @is-open={{true}} />
<TMenu @is-open={{someBoundProperty}} />
```
`<TMenu @is-open={{true}} />` <TMenu @is-open={{true}} />

### onclick action
`<TMenu @is-open={{isMenuOpen}} @onclick={{action this.updateMenuAction}} />` <TMenu @is-open={{isMenuOpen}} @onclick={{action this.updateMenuAction}} />

`isMenuOpen` = {{isMenuOpen}}
