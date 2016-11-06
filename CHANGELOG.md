# ember-cli-transformicons Changelog
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased][unreleased]
### Added
 - `Release` section to the README
 - Fastboot support
 - Nested addon support


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


[unreleased]:  https://github.com/alexdiliberto/ember-cli-transformicons/compare/v0.7.0...HEAD
[v0.7.0]:      https://github.com/alexdiliberto/ember-cli-transformicons/compare/v0.6.0...v0.7.0
[v0.6.0]:      https://github.com/alexdiliberto/ember-cli-transformicons/compare/v0.5.0...v0.6.0
[v0.5.0]:      https://github.com/alexdiliberto/ember-cli-transformicons/compare/v0.4.0...v0.5.0
[v0.4.0]:      https://github.com/alexdiliberto/ember-cli-transformicons/compare/v0.3.2...v0.4.0
[v0.3.2]:      https://github.com/alexdiliberto/ember-cli-transformicons/compare/v0.3.0...v0.3.2
[v0.3.0]:      https://github.com/alexdiliberto/ember-cli-transformicons/compare/v0.2.0...v0.3.0
[v0.2.0]:      https://github.com/alexdiliberto/ember-cli-transformicons/compare/v0.1.3...v0.2.0
[v0.1.3]:      https://github.com/alexdiliberto/ember-cli-transformicons/compare/v0.1.2...v0.1.3
[v0.1.2]:      https://github.com/alexdiliberto/ember-cli-transformicons/compare/v0.1.1...v0.1.2
[v0.1.1]:      https://github.com/alexdiliberto/ember-cli-transformicons/compare/v0.1.0...v0.1.1
[v0.1.0]:      https://github.com/alexdiliberto/ember-cli-transformicons/compare/v0.0.2...v0.1.0
[v0.0.2]:      https://github.com/alexdiliberto/ember-cli-transformicons/compare/v0.0.1...v0.0.2
