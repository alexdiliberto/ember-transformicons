# ember-cli-transformicons

[![npm badge][npm-badge-png]][npm-url]

[![github release versions][github-release-svg]][github-release-url]
[![npm downloads per month][npm-dm-badge-svg]][npm-url]
[![build status][travis-badge]][travis-url]

This README outlines the details of collaborating on this Ember addon.

## Installation
Install the addon with Ember CLI directly

```shell
ember install:addon ember-cli-transformicons
```

*OR* You may install via `npm`:

```shell
npm install ember-cli-transformicons --save
```
## Usage
Usage is very simple. Add the transformicon you want from within your any template in your application.

Global optional parameters:
  * `animation` string - Set the menu animation type. If you do not provide a specific type for an icon category, then a default type will simply be provided for you.
  * `a` string - Shorthand alias for `animation`

### Menu
Menu optional parameters:
  * `is-open` boolean - Set initial open menu state.
  * `action` string - The name of your controller/route action to handle an icon click. Returned with 1 parameter `isOpen`, which is a boolean type indication wether the current state is open or closed.

**animation**
```handlebars
{{t-menu}}
{{t-menu animation="butterfly"}}
{{t-menu a="minus"}}
{{t-menu a="x-cross"}}
{{t-menu a="arrow-up"}}
{{t-menu a="arrow-360-left"}}
{{t-menu a="arrow-left"}}
```
**is-open**
```handlebars
{{t-menu is-open=true}}
{{t-menu is-open=someBoundProperty}}
```
**action**
```handlebars
{{t-menu action="someControllerAction"}}
```

### Grid
**animation**
```handlebars
{{t-grid}}
{{t-grid animation="rearrange"}}
{{t-grid a="collapse"}}
```
**is-open**
```handlebars
{{t-grid is-open=true}}
{{t-grid is-open=someBoundProperty}}
```
**action**
```handlebars
{{t-grid action="someControllerAction"}}
```

### Add/Remove
**animation**
```handlebars
{{t-plus}}
{{t-plus animation="minus"}}
{{t-plus a="check"}}
{{t-plus a="minus-fold"}}
{{t-plus a="circle"}}
```
**is-added**
```handlebars
{{t-plus is-added=true}}
{{t-plus is-added=someBoundProperty}}
```
**action**
```handlebars
{{t-plus action="someControllerAction"}}
```

### Mail
```handlebars
{{t-mail}}
```

### Video
```handlebars
{{t-video}}
```

### Loader
```handlebars
{{t-loader}}
```

## Contributing
**Please contribute!** This section outlines the details of collaborating on this Ember addon. You can help code, design, update documentation, fix typos, raise issues and much more.

Any help is welcome and absolutely appreciated!

## Backlog

- [ ] Add proper action/event handling for the hosting application
- [ ] Modularize components/Refactor
- [ ] Extract common components into base class/Mixin
- [ ] Add/Update transformicons
- [ ] Documentation
- [ ] Add JSCS

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).



[npm-url]: https://www.npmjs.com/package/ember-cli-transformicons
[github-release-url]: https://github.com/alexdiliberto/ember-cli-transformicons/releases
[npm-dm-badge-svg]: https://img.shields.io/npm/dm/ember-cli-transformicons.svg
[npm-badge-png]: https://nodei.co/npm/ember-cli-transformicons.png?downloads=true&stars=true
[github-release-svg]: https://img.shields.io/github/release/alexdiliberto/ember-cli-transformicons.svg
[travis-badge]: https://travis-ci.org/alexdiliberto/ember-cli-transformicons.svg?branch=master
[travis-url]: https://travis-ci.org/alexdiliberto/ember-cli-transformicons
