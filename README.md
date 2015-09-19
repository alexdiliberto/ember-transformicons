# ember-cli-transformicons [![ember addon][ember-addon-badge]][ember-addon-url]

[![build status][travis-badge]][travis-url]
[![github release versions][github-release-svg]][github-release-url]
[![code climate][code-climate-svg]][code-climate-url]
[![ember observer score][ember-observer-score-svg]][ember-observer-score-url]

[![dependency status][david-dm-dependencies]][david-dm-dependencies-url]
[![dev-dependency status][david-dm-dev-dependencies]][david-dm-dev-dependencies-url]

This README outlines the details of collaborating on this Ember addon.

## Demo

Check out the [demo][gh-pages-demo]

## Installation

```shell
ember install ember-cli-transformicons
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
Grid optional parameters:
  * `is-open` boolean - Set initial open grid state.
  * `action` string - The name of your controller/route action to handle an icon click. Returned with 1 parameter `isOpen`, which is a boolean type indicating if the current state is open or closed.

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
  * `action` string - The name of your controller/route action to handle an icon click. Returned with 1 parameter `isAdded`, which is a boolean type indicating if the current state is pending add.

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
  * `action` string - The name of your controller/route action to handle an icon click. Returned with 1 parameter `isRemoved`, which is a boolean type indicating if the current state is pending remove.

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
  * `action` string - The name of your controller/route action to handle an icon click. Returned with 1 parameter `isOpen`, which is a boolean type indicating if the current state is open or closed.

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
  * `action` string - The name of your controller/route action to handle an icon click. Returned with 1 parameter `isPlaying`, which is a boolean type indicating if the current state is playing or stopped.

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

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember try:testall`
* `ember test`
* `ember test --server`

## Building

* `ember build`

## Update Demo App

```shell
ember b -prod
git checkout gh-pages
rm -rf assets/
cp -R dist/* .
git add . && git commit

# Some Cleanup Items:
#  Don't forget to update the index.html <!-- v[rel-ver] --><title>Demo App | ember-cli-transformicons</title>
```

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).



[github-release-svg]: https://img.shields.io/github/release/alexdiliberto/ember-cli-transformicons.svg
[github-release-url]: https://github.com/alexdiliberto/ember-cli-transformicons/releases

[travis-url]: https://travis-ci.org/alexdiliberto/ember-cli-transformicons
[travis-badge]: https://travis-ci.org/alexdiliberto/ember-cli-transformicons.svg?branch=master

[david-dm-dependencies]: https://david-dm.org/alexdiliberto/ember-cli-transformicons.svg
[david-dm-dependencies-url]: https://david-dm.org/alexdiliberto/ember-cli-transformicons
[david-dm-dev-dependencies]: https://david-dm.org/alexdiliberto/ember-cli-transformicons/dev-status.svg
[david-dm-dev-dependencies-url]: https://david-dm.org/alexdiliberto/ember-cli-transformicons#info=devDependencies

[ember-addon-badge]: https://s3.amazonaws.com/images.jebbit.com/ember/badge.svg
[ember-addon-url]: http://www.emberaddons.com

[ember-observer-score-svg]: http://emberobserver.com/badges/ember-cli-transformicons.svg
[ember-observer-score-url]: http://emberobserver.com/addons/ember-cli-transformicons

[code-climate-svg]: https://codeclimate.com/github/alexdiliberto/ember-cli-transformicons/badges/gpa.svg
[code-climate-url]: https://codeclimate.com/github/alexdiliberto/ember-cli-transformicons

[gh-pages-demo]: http://alexdiliberto.com/ember-cli-transformicons
