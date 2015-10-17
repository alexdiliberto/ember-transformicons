# ember-cli-transformicons [![ember addon][ember-addon-badge]][ember-addon-url]

[![npm version][npm-version-svg]][npm-version-url]
[![ember observer score][ember-observer-score-svg]][ember-observer-score-url]
[![build status][travis-badge]][travis-url]
[![code climate][code-climate-svg]][code-climate-url]

Transformicons for Ember

[Demo][gh-pages-demo]

![ember-cli-transformicons demo gif][demo-gif]

## Installation

```sh
ember install ember-cli-transformicons
```

## Usage
Add your favorite transformicon component to any template in your application.

Global optional parameters:
  * `animation` string - Set the menu animation type. If you do not provide a specific type for an icon category, then a default type will simply be provided for you.
  * `a` string - Shorthand alias for `animation`

### Menu
Menu optional parameters:
  * `is-open` boolean - Set initial open menu state.
  * `action` string - The name of your upstream controller action to handle an icon click. Returned with 1 parameter `isOpen`, which is a boolean type indication wether the current state is open or closed.

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
Grid optional parameters:
  * `is-open` boolean - Set initial open grid state.
  * `action` string - The name of your upstream controller action to handle an icon click. Returned with 1 parameter `isOpen`, which is a boolean type indicating if the current state is open or closed.

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

### Add
Add optional parameters:
  * `is-added` boolean - Set initial open add state.
  * `action` string - The name of your upstream controller action to handle an icon click. Returned with 1 parameter `isAdded`, which is a boolean type indicating if the current state is pending add.

**animation**
```handlebars
{{t-add}}
{{t-add animation="minus"}}
{{t-add a="check"}}
```
**is-added**
```handlebars
{{t-add is-added=true}}
{{t-add is-added=someBoundProperty}}
```
**action**
```handlebars
{{t-add action="someControllerAction"}}
```

### Remove
Remove optional parameters:
  * `is-removed` boolean - Set initial open removed state.
  * `action` string - The name of your upstream controller action to handle an icon click. Returned with 1 parameter `isRemoved`, which is a boolean type indicating if the current state is pending remove.

**animation**
```handlebars
{{t-remove}}
{{t-remove animation="check"}}
{{t-remove a="chevron-left"}}
{{t-remove a="chevron-right"}}
{{t-remove a="chevron-down"}}
{{t-remove a="chevron-up"}}
```
**is-removed**
```handlebars
{{t-remove is-removed=true}}
{{t-remove is-removed=someBoundProperty}}
```
**action**
```handlebars
{{t-remove action="someControllerAction"}}
```

### Mail
Mail optional parameters:
  * `is-open` boolean - Set initial open mail state.
  * `action` string - The name of your upstream controller action to handle an icon click. Returned with 1 parameter `isOpen`, which is a boolean type indicating if the current state is open or closed.

```handlebars
{{t-mail}}
```
**is-open**
```handlebars
{{t-mail is-open=false}}
{{t-mail is-open=someBoundProperty}}
```
**action**
```handlebars
{{t-mail action="someControllerAction"}}
```

### Video
Video optional parameters:
  * `is-playing` boolean - Set initial playing state.
  * `action` string - The name of your upstream controller action to handle an icon click. Returned with 1 parameter `isPlaying`, which is a boolean type indicating if the current state is playing or stopped.

```handlebars
{{t-video}}
```
**is-playing**
```handlebars
{{t-video is-playing=true}}
{{t-video is-playing=someBoundProperty}}
```
**action**
```handlebars
{{t-video action="someControllerAction"}}
```

### Loader
```handlebars
{{t-loader}}
```

## Contributing
**Please contribute!** This section outlines the details of collaborating on this Ember addon. You can help code, design, update documentation, fix typos, raise issues and much more.

Any help is welcome and absolutely appreciated!

## Backlog

- [ ] Add/Update/Improve transformicons
- [ ] More tests
- [ ] Allow dynamic transformicon sizes

## Development

### Setup

```sh
git clone git@github.com:alexdiliberto/ember-cli-transformicons.git
cd ember-cli-transformicons
bower i && npm i
```

## Server

```sh
ember s
```

## Test Suite

```sh
ember try:testall
```

## Update Demo App

```sh
ember b -prod
git checkout gh-pages
rm -rf assets/
cp -R dist/* .
git add . && git commit

# Some Cleanup Items:
# - Don't forget to update the `index.html`:
#     <!-- v[rel-ver] -->
#     <title>Demo App | ember-cli-transformicons</title>
```

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).


[npm-version-svg]: https://badge.fury.io/js/ember-cli-transformicons.svg
[npm-version-url]: https://www.npmjs.com/package/ember-cli-transformicons

[travis-url]: https://travis-ci.org/alexdiliberto/ember-cli-transformicons
[travis-badge]: https://travis-ci.org/alexdiliberto/ember-cli-transformicons.svg?branch=master

[ember-addon-badge]: https://s3.amazonaws.com/images.jebbit.com/ember/badge.svg
[ember-addon-url]: http://www.emberaddons.com

[ember-observer-score-svg]: http://emberobserver.com/badges/ember-cli-transformicons.svg
[ember-observer-score-url]: http://emberobserver.com/addons/ember-cli-transformicons

[code-climate-svg]: https://codeclimate.com/github/alexdiliberto/ember-cli-transformicons/badges/gpa.svg
[code-climate-url]: https://codeclimate.com/github/alexdiliberto/ember-cli-transformicons

[gh-pages-demo]: http://alexdiliberto.com/ember-cli-transformicons

[demo-gif]: https://raw.githubusercontent.com/alexdiliberto/ember-cli-transformicons/master/demo.gif
