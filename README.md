<h1 align="center">
  <img src="https://cdn.rawgit.com/alexdiliberto/ember-cli-transformicons/master/tests/dummy/public/img/logo.svg" alt="Transformicons Logo">
  <br>
  <a href="https://alexdiliberto.com/ember-cli-transformicons">ember-cli-transformicons</a>
  <br>
</h1>

<p align="center">
  <a href="https://travis-ci.org/alexdiliberto/ember-cli-transformicons">
    <img src="https://travis-ci.org/alexdiliberto/ember-cli-transformicons.svg?branch=master"
      alt="Build Status">
  </a>
  <a href="https://www.npmjs.com/package/ember-cli-transformicons">
    <img src="https://badge.fury.io/js/ember-cli-transformicons.svg"
      alt="NPM Version">
  </a>
  <a href="https://greenkeeper.io/">
    <img src="https://badges.greenkeeper.io/alexdiliberto/ember-cli-transformicons.svg"
      alt="Greenkeeper Badge">
  </a>
  <a href="https://embadge.io/">
    <img src="https://embadge.io/v1/badge.svg?start=1.12.2"
      alt="Ember Versions">
  </a>
</p>
<p align="center">
  <a href="http://emberobserver.com/addons/ember-cli-transformicons">
    <img src="http://emberobserver.com/badges/ember-cli-transformicons.svg"
      alt="Ember Observer Score">
  </a>
  <a href="https://snyk.io/test/github/alexdiliberto/ember-cli-transformicons">
    <img src="https://snyk.io/test/github/alexdiliberto/ember-cli-transformicons/badge.svg"
      alt="Known Vulnerabilities">
  </a>
  <a href="https://codeclimate.com/github/alexdiliberto/ember-cli-transformicons">
    <img src="https://codeclimate.com/github/alexdiliberto/ember-cli-transformicons/badges/gpa.svg"
      alt="Known Vulnerabilities">
  </a>
</p>

<h3 align="center">
  <a href="http://www.transformicons.com/">Transformicons</a> for Ember
</h4>

![ember-cli-transformicons demo gif][demo-gif]

## Installation

```sh
ember install ember-cli-transformicons
```

## Demo

https://alexdiliberto.com/ember-cli-transformicons

## Transformicon Components

* [`t-menu`](#menu)
* [`t-grid`](#grid)
* [`t-add`](#add)
* [`t-remove`](#remove)
* [`t-scroll`](#scroll)
* [`t-mail`](#mail)
* [`t-form`](#form)
* [`t-video`](#video)
* [`t-loader`](#loader)

## Component API
Add your favorite transformicon component to any template in your application.

Global optional parameters:
  * `animation` string - Set the menu animation type. If you do not provide a specific type for an icon category, then a default type will simply be provided for you. Aliases: `a`

### Menu
Menu optional parameters:
  * `is-open` boolean - Set initial open menu state.
  * `onclick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isOpen`, which is a boolean type indicating if the current state is open or closed.

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
{{t-menu onclick=(action "updateMenuAction")}}
```

**[⬆️ back to top](#component-api)**

### Grid
Grid optional parameters:
  * `is-open` boolean - Set initial open grid state.
  * `onclick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isOpen`, which is a boolean type indicating if the current state is open or closed.

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
{{t-grid onclick=(action "updateGridAction")}}
```

**[⬆️ back to top](#component-api)**

### Add
Add optional parameters:
  * `is-added` boolean - Set initial open add state.
  * `onclick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isAdded`, which is a boolean type indicating if the current state is pending add.

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
{{t-add onclick=(action "updateAddAction")}}
```

**[⬆️ back to top](#component-api)**

### Remove
Remove optional parameters:
  * `is-removed` boolean - Set initial open removed state.
  * `onclick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isRemoved`, which is a boolean type indicating if the current state is pending remove.

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
{{t-remove onclick=(action "updateRemoveAction")}}
```

**[⬆️ back to top](#component-api)**

### Scroll
```handlebars
{{t-scroll}}
```

**[⬆️ back to top](#component-api)**

### Mail
Mail optional parameters:
  * `is-open` boolean - Set initial open mail state.
  * `onclick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isOpen`, which is a boolean type indicating if the current state is open or closed.

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
{{t-mail onclick=(action "updateMailAction")}}
```

**[⬆️ back to top](#component-api)**

### Form
Form optional parameters:
  * `is-searching` boolean - Set initial searching state.
  * `onclick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isSearching`, which is a boolean type indicating if the current state is searching or not searching.

```handlebars
{{t-form}}
```
**is-searching**
```handlebars
{{t-form is-searching=false}}
{{t-form is-searching=someBoundProperty}}
```
**action**
```handlebars
{{t-form onclick=(action "updateFormAction")}}
```

**[⬆️ back to top](#component-api)**

### Video
Video optional parameters:
  * `is-playing` boolean - Set initial playing state.
  * `onclick` closure action - The name of your consuming application's component/controller/route action to handle the transformicon click. Returned with 1 parameter `isPlaying`, which is a boolean type indicating if the current state is playing or stopped.

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
{{t-video onclick=(action "updateVideoAction")}}
```

**[⬆️ back to top](#component-api)**

### Loader
```handlebars
{{t-loader}}
```

**[⬆️ back to top](#component-api)**

## Contributing
**Please contribute!** You can help code, design, update documentation, fix typos, raise issues and so much more.

Any help is welcome and appreciated!

## Development

### Setup

```sh
git clone git@github.com:alexdiliberto/ember-cli-transformicons.git
cd ember-cli-transformicons
yarn
```

## Server

```sh
ember s
```

## Test Suite

```sh
yarn test # ember try:each
yarn mocha # cross-env DEBUG=ember-cli-addon-tests mocha
yarn test:all # ember try:each && mocha test/*-test.js
```

## Update Demo App

```sh
git checkout gh-pages
rm -rf assets/
git commit

git checkout master
ember github-pages:commit --message "Release v<release_num>"
git push origin gh-pages:gh-pages

# Some Cleanup Items:
# - Don't forget to update the `index.html`:
#     <!-- v[rel-ver] -->
#     <title>Demo App | ember-cli-transformicons</title>
```

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).


[demo-gif]: https://raw.githubusercontent.com/alexdiliberto/ember-cli-transformicons/master/demo.gif
