# ember-cli-transformicons Changelog
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased][unreleased]
... Nothing


## [0.2.0] - 2015-03-25
### Added
 - `README.md` David DM badge
 - EmberCLI v0.2.1
 - NPM dependency cleanup
 - Content Security Policy fix for inline styles in the dummy application
 - Latest Transformicon CSS

### Fixed
 - Content Security Policy issues for inline styles in the dummy application

### Updated
 - Segregating Add/Remove into distinct "Add" and "Remove" components

### Removed
 - {{t-plus}} naming convention and replacing with {{t-add}} and {{t-remove}}


## [0.1.3] - 2015-03-11
### Added
- EmberCLI v0.2.0
- Gitter chat information and badge
- Initial `CHANGELOG.md`
- Update `broccoli-sass` to v0.4.0


## [0.1.2] - 2015-02-16
### Added
- Minify CSS with `broccoli-sass`
- Demo page using `gh-pages` branch and `ember-cli-github-pages`

### Changed
- Break up demo into individual routes for each component


## [0.1.1] - 2015-02-15
### Added
- Basic acceptance tests
- More unit tests

### Changed
- Extract common components into a base class
- Modularize components


## [0.1.0] - 2015-02-13
### Added
- EmberCLI v0.1.15
- Proper event handling for the hosting application (`is-open`, `is-added`, and `is-playing` properties)
- Improve testing
- Improve component specific documentation
- MIT license copyright holder name
- Improve `package.json` structure

### Removed
- `transformicons.js` and simply integrating the library as click handlers on the individual components


## [0.0.2] - 2015-02-12
### Added
- Customize `README.md` with project specific documentation
- Basic YUI style documentation
- `isDevelopingAddon` hook for live-reload during devevelopment and testing

### Changed
- Transformicons now have a more composable structure


## 0.0.1 - 2015-02-11
### Added
- Basic EmberCLI project structure
- Initial transformicons


[unreleased]: https://github.com/alexdiliberto/ember-cli-transformicons/compare/v0.2.0...HEAD
[0.2.0]:      https://github.com/alexdiliberto/ember-cli-transformicons/compare/v0.1.3...v0.2.0
[0.1.3]:      https://github.com/alexdiliberto/ember-cli-transformicons/compare/v0.1.2...v0.1.3
[0.1.2]:      https://github.com/alexdiliberto/ember-cli-transformicons/compare/v0.1.1...v0.1.2
[0.1.1]:      https://github.com/alexdiliberto/ember-cli-transformicons/compare/v0.1.0...v0.1.1
[0.1.0]:      https://github.com/alexdiliberto/ember-cli-transformicons/compare/v0.0.2...v0.1.0
[0.0.2]:      https://github.com/alexdiliberto/ember-cli-transformicons/compare/v0.0.1...v0.0.2
