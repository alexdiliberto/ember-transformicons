# ember-transformicons Changelog
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).


## [Unreleased][unreleased]
### Added
  - `ember-fastboot-addon-tests` to facilitate testing this addon within the context of a consuming fastboot app
  - `ember-fetch@4.0.2` because of an [upstream compatibility issue](https://github.com/ember-learn/ember-cli-addon-docs/issues/187) between `ember-cli-addon-docs` and `ember-cli-fastboot`
  - Set Greenkeeper to ignore specific core Ember/Ember CLI dependencies
  - `CONTRIBUTING.md`
  - `CODE_OF_CONDUCT.md`
  - Use `ember-decorators` style syntax
  
### Updated
  - Tests leverage `qunit-dom` syntax
  - Fixed `WARNING: Missing item type` console deprecation messages
  - Ember CLI v3.2.x (NOTE: Keeping CLI at v3.1.x until https://github.com/ember-learn/ember-cli-addon-docs/issues/200 is fixed)
  - `README.md` test and release docs
  - Use the provided `AddonDocsRouter` instead of the standard `EmberRouter` for the docs app

### Removed 
  - `eslint` direct dependency and instead just use the inherited dependency from `ember-cli-eslint` -> `broccoli-lint-eslint` -> `eslint`
  - `chalk`, `cross-env`, `mocha`, and `request` direct dependencies from the older fastboot test implementation using `ember-cli-addon-tests`
  - `/-private` directory files from appearing in addon-docs
  
  
## [v2.0.3] - 2018-05-18
### Updated
  - Ember CLI v3.1.x
  - Consolidated `{{docs-header}}`
  - Use Tailwind styles instead of Tachyons
  - `es5-getter-ember-codemod`

### Removed 
  - Old bootstrap styles on `tests/index.html`
  - Tachyons
  - `ember-cli-app-version`
  
  
## [v2.0.2] - 2018-04-07
### Added
  - Ember CLI v3.0.x
  - `ember-cli-addon-docs` for documentation

### Updated
  - Integration tests align with [RFC-232 sytax and structure](http://rwjblue.com/2017/10/23/ember-qunit-simplication/)
  - ember-addon demo URL now points to `https://`
  - Update `targets.js` to only reference evergreen browsers
  
### Removed 
  - ember-native-dom-helpers
  - Broken embadge.io link from the `README.md`
  
  
## [v2.0.1] - 2017-10-09
### Added
  - `greenkeeper-lockfile` for Travis CI
  - Adding back `useYarn` to ember-try to fix CI
  - `ember-cli-deploy-git` to easily deploy the demo app
  
### Updated
  - Ember CLI v2.15.1

### Removed
  - `useYarn` from the ember-try config. [It is causing issues when running `yarn test` locally](https://github.com/ember-cli/ember-try/issues/147).
  - All `a="typo"` components from the demo app
  

## [v2.0.0] - 2017-09-03
### Added
  - `.jsbeautifyrc` file

### Updated
  - `mv addon/components/base-transformicon.js addon/components/-private/base.js`
  - BREAKING CHANGE: Addon's name is now `ember-transformicons` to better align with naming conventions
  - Ember CLI v2.15.0
  

## [v1.1.2] - 2017-08-27
### Added
  - `ember-cli-app-version` to display the current release version in Demo app header

### Updated
  - Demo app default `<title>`


## [v1.1.1] - 2017-08-27
### Updated
  - SCSS lint `app.scss` to improve Code Climate
  - Fetch Bootstrap assets directly from CDN
  - Demo page updates
  

## [v1.1.0] - 2017-08-24
### Added
  - Headless Chrome testing on Testem and CI
  - [`@alexdiliberto/eslint-config`](https://github.com/alexdiliberto/eslint-config) custom linting rules
  - [`ember-open-browser`](https://github.com/jasonmit/ember-open-browser) addon
  - Fixed node test suite using [`ember-cli-addon-tests`](https://github.com/tomdale/ember-cli-addon-tests)
  - Transformicon SVG logo
  - ember-try `versionCompatibility: >=1.12.2+`
  - [Ember RFC176](https://github.com/emberjs/rfcs/pull/176) module import syntax 
  
### Updated
  - CodeClimate to use Engines analysis
  - Mocha test suite
  - Ember CLI v2.14.2

### Removed
  - Unused Inch CI config
  - PhantomJS test runner
  - Unused `config/release.js`


## [v1.0.3] - 2017-07-10
### Added
  - Support [`broccoli-concat-analyser`](https://github.com/stefanpenner/broccoli-concat-analyser)
  - Support Node LTS v4.x Ember Apps

### Updated
  - `package.json` dependencies
  - Ember CLI v2.14.0

### Removed
  - Bower no longer necessary


## [v1.0.2] - 2017-06-17
### Added
  - `eslint-plugin-ember` linter addon

### Updated
  - `package.json` dependencies
  - Ember CLI v2.13.2
  - Addon tests fixes
  - Lock fastboot version in addon tests

### Removed
  - `ember-cli-release` package
  - `eslint-plugin-ember-suave` package


## [v1.0.1] - 2017-04-13
### Added
  - Content security policy whitelist
  - Greenkeeper bot
  - "Back to top" links in README for API
  - `ember-exam` addon for improved testing

### Updated
  - `ember-native-dom-helpers` to new import syntax
  - README docs reflect latest `onclick` API change


## [v1.0.0] - 2017-03-22
### Added
  - Github Fork ribbon for dummy app `application.hbs`
  - Github Star button for dummy app `application.hbs`

### Updated
  - `package.json` dependencies
  - Integration tests now use standard DOM instead of jQuery
  - API uses `onclick` instead of `action` for strict closure action handling
  - Use native Ember `ariaRole` property
  - Ember CLI v2.12.1

### Removed
  - Acceptance tests


## [v0.9.0] - 2017-03-09
### Added
 - ember-cli-eslint
 - eslint-plugin-ember-suave
 - ember-cli-anybar
 - ember-cli-dependency-lint
 - ember-native-dom-helpers
 - npm `start:inspect` script

### Updated
  - Code style updates for ember-suave
  - Ember CLI v2.11.1
  - `package.json` scripts to reference a relative path
  - `package.json` dependencies
  - Addon tests fixes and cleanup


## [v0.8.1] - 2017-01-03
### Added
- Test suite to simulate running this addon inside the context of a consuming Ember app using [ember-cli-addon-tests](https://github.com/tomdale/ember-cli-addon-tests)
- `yarn.lock` file
- Ember Percy for visual diff testing

### Updated
 - Ember CLI v2.10.0


## [v0.8.0] - 2016-11-11
### Added
 - `Release` section to the README
 - Fastboot support
 - Nested addon support
 - New Transformicon: `{{t-scroll}}`

### Updated
 - Quick README documentation links


## [v0.7.0] - 2016-11-02
### Added
 - "demoURL" to package.json

### Updated
 - `bower.json` and `package.json` dependencies
 - Ember CLI v2.9.1
 - Acceptance tests to use `moduleForAcceptance`

### Removed
 - Empty `app.scss` hack
 - Old "Ember Addon" Badge


## [v0.6.0] - 2015-10-24
### Added
 - demo.gif to the README
 - Form transformicon `{{t-form}}`
 - From transformicon tests
 - Form transformicon README docs

### Updated
 - README instructions
 - Acceptance test suite to use `this.application` property


## [v0.5.0] - 2015-10-17
### Updated
 - `README.md` "Update Demo App" instructions
 - `package.json` and `bower.json` dependencies
 - Demo app now uses Bootstrap


## [v0.4.0] - 2015-09-19
### Added
 - `.codeclimate.yml` config file
 - Code Climate badge

### Fixed
 - `ember-qunit` bugfix for testing against Ember v2.0

### Updated
 - Updating to "Integration" style unit tests
 - Ember v2.0.0/Ember CLI v1.13.8
 - Ember v2.0.0 depedencies


## [v0.3.2] - 2015-07-10
### Fixed
 - Bugfix for click action handling

### Updated
 - EmberCLI v1.13.1


## [v0.3.0] - 2015-04-30
### Added
 - `ember-try` for testing against multiple Ember versions
 - `README.md` Ember Addon badge
 - `inch.json` for Inch CI
 - More {{t-remove}} animations

### Changed
 - Switching `broccoli-sass` for `ember-cli-sass` (https://github.com/ember-cli/ember-cli/pull/3850)

### Fixed
 - Allow proper async testing

### Updated
 - Ember v1.11.1
 - EmberCLI v0.2.3
 - `package.json` dependencies: `broccoli-sass` and `ember-try`
 - `ember-try` config now references latest Release and Beta versions
 - Updating code to user more ES6


## [v0.2.0] - 2015-03-25
### Added
 - `README.md` David DM badge
 - NPM dependency cleanup
 - Content Security Policy fix for inline styles in the dummy application
 - Latest Transformicon CSS

### Fixed
 - Content Security Policy issues for inline styles in the dummy application

### Updated
 - EmberCLI v0.2.1
 - Segregating Add/Remove into distinct "Add" and "Remove" components

### Removed
 - {{t-plus}} naming convention and replacing with {{t-add}} and {{t-remove}}
 - {{t-plus a="minus-fold"}} and {{t-plus a="circle"}} animations


## [v0.1.3] - 2015-03-11
### Added
 - Gitter chat information and badge
 - Initial `CHANGELOG.md`
 - Update `broccoli-sass` to v0.4.0

### Updated
 - EmberCLI v0.2.0

## [v0.1.2] - 2015-02-16
### Added
 - Minify CSS with `broccoli-sass`
 - Demo page using `gh-pages` branch and `ember-cli-github-pages`

### Changed
 - Break up demo into individual routes for each component


## [v0.1.1] - 2015-02-15
### Added
 - Basic acceptance tests
 - More unit tests

### Changed
 - Extract common components into a base class
 - Modularize components


## [v0.1.0] - 2015-02-13
### Added
 - Proper event handling for the hosting application (`is-open`, `is-added`, and `is-playing` properties)
 - Improve testing
 - Improve component specific documentation
 - MIT license copyright holder name
 - Improve `package.json` structure

### Updated
 - EmberCLI v0.1.15
 - Segregating Add/Remove into distinct "Add" and "Remove" components

### Removed
 - `transformicons.js` and simply integrating the library as click handlers on the individual components


## [v0.0.2] - 2015-02-12
### Added
 - Customize `README.md` with project specific documentation
 - Basic YUI style documentation
 - `isDevelopingAddon` hook for live-reload during devevelopment and testing

### Changed
 - Transformicons now have a more composable structure


## v0.0.1 - 2015-02-11
### Added
 - Basic EmberCLI project structure
 - Initial transformicons


[unreleased]:  https://github.com/alexdiliberto/ember-transformicons/compare/v2.0.3...HEAD
[v2.0.3]:      https://github.com/alexdiliberto/ember-transformicons/compare/v2.0.2...v2.0.3
[v2.0.2]:      https://github.com/alexdiliberto/ember-transformicons/compare/v2.0.1...v2.0.2
[v2.0.1]:      https://github.com/alexdiliberto/ember-transformicons/compare/v2.0.0...v2.0.1
[v2.0.0]:      https://github.com/alexdiliberto/ember-transformicons/compare/v1.1.2...v2.0.0
[v1.1.2]:      https://github.com/alexdiliberto/ember-transformicons/compare/v1.1.1...v1.1.2
[v1.1.1]:      https://github.com/alexdiliberto/ember-transformicons/compare/v1.1.0...v1.1.1
[v1.1.0]:      https://github.com/alexdiliberto/ember-transformicons/compare/v1.0.3...v1.1.0
[v1.0.3]:      https://github.com/alexdiliberto/ember-transformicons/compare/v1.0.2...v1.0.3
[v1.0.2]:      https://github.com/alexdiliberto/ember-transformicons/compare/v1.0.1...v1.0.2
[v1.0.1]:      https://github.com/alexdiliberto/ember-transformicons/compare/v1.0.0...v1.0.1
[v1.0.0]:      https://github.com/alexdiliberto/ember-transformicons/compare/v0.9.0...v1.0.0
[v0.9.0]:      https://github.com/alexdiliberto/ember-transformicons/compare/v0.8.1...v0.9.0
[v0.8.1]:      https://github.com/alexdiliberto/ember-transformicons/compare/v0.8.0...v0.8.1
[v0.8.0]:      https://github.com/alexdiliberto/ember-transformicons/compare/v0.7.0...v0.8.0
[v0.7.0]:      https://github.com/alexdiliberto/ember-transformicons/compare/v0.6.0...v0.7.0
[v0.6.0]:      https://github.com/alexdiliberto/ember-transformicons/compare/v0.5.0...v0.6.0
[v0.5.0]:      https://github.com/alexdiliberto/ember-transformicons/compare/v0.4.0...v0.5.0
[v0.4.0]:      https://github.com/alexdiliberto/ember-transformicons/compare/v0.3.2...v0.4.0
[v0.3.2]:      https://github.com/alexdiliberto/ember-transformicons/compare/v0.3.0...v0.3.2
[v0.3.0]:      https://github.com/alexdiliberto/ember-transformicons/compare/v0.2.0...v0.3.0
[v0.2.0]:      https://github.com/alexdiliberto/ember-transformicons/compare/v0.1.3...v0.2.0
[v0.1.3]:      https://github.com/alexdiliberto/ember-transformicons/compare/v0.1.2...v0.1.3
[v0.1.2]:      https://github.com/alexdiliberto/ember-transformicons/compare/v0.1.1...v0.1.2
[v0.1.1]:      https://github.com/alexdiliberto/ember-transformicons/compare/v0.1.0...v0.1.1
[v0.1.0]:      https://github.com/alexdiliberto/ember-transformicons/compare/v0.0.2...v0.1.0
[v0.0.2]:      https://github.com/alexdiliberto/ember-transformicons/compare/v0.0.1...v0.0.2
