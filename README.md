<h1 align="center">
  <img src="https://cdn.rawgit.com/alexdiliberto/ember-transformicons/master/tests/dummy/public/img/logo.svg" alt="Transformicons Logo">
  <br>
  <a href="https://alexdiliberto.com/ember-transformicons">ember-transformicons</a>
  <br>
</h1>

<p align="center">
  <a href="https://travis-ci.org/alexdiliberto/ember-transformicons">
    <img src="https://travis-ci.org/alexdiliberto/ember-transformicons.svg?branch=master"
      alt="Build Status">
  </a>
  <a href="https://www.npmjs.com/package/ember-transformicons">
    <img src="https://badge.fury.io/js/ember-transformicons.svg"
      alt="NPM Version">
  </a>
</p>
<p align="center">
  <a href="http://emberobserver.com/addons/ember-transformicons">
    <img src="http://emberobserver.com/badges/ember-transformicons.svg"
      alt="Ember Observer Score">
  </a>
  <a href="https://snyk.io/test/github/alexdiliberto/ember-transformicons">
    <img src="https://snyk.io/test/github/alexdiliberto/ember-transformicons/badge.svg"
      alt="Known Vulnerabilities">
  </a>
  <a href="https://codeclimate.com/github/alexdiliberto/ember-transformicons/maintainability">
    <img src="https://api.codeclimate.com/v1/badges/01108fee4bb685fa23dd/maintainability" alt="Code Climate Maintainability Score">
  </a>
</p>

<h3 align="center">
  <a href="http://www.transformicons.com/">Transformicons</a> for Ember
</h4>

![ember-transformicons demo gif][demo-gif]

## Compatibility

* Ember.js v2.18 or above
* Ember CLI v2.13 or above

## Installation

```sh
ember install ember-transformicons
```

## Documentation

https://alexdiliberto.com/ember-transformicons

## Development

### Setup

```sh
git clone git@github.com:alexdiliberto/ember-transformicons.git
cd ember-transformicons
yarn
```

## Serve Demo App

```sh
ember s
```

## Test

```sh
yarn lint:js # eslint
yarn test # ember test
yarn test:all # ember try:each
```

## Release

Ready to draft a new release:

```sh
yarn version [--major | --minor | --patch]
# package.json scripts automatically update CHANGELOG.md and git push
# Draft release on Github and copy CHANGELOG.md for the release
# Validate passing tests on Travis and Travis will automatically deploy and publish (`npm publish`)
```

## Deploy

Deploys are automated using Travis CI. If you need to manually deploy, run the following command:

```sh
ember deploy production
```

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.


## License

This project is licensed under the [MIT License](LICENSE.md).

[demo-gif]: https://raw.githubusercontent.com/alexdiliberto/ember-transformicons/master/demo.gif
