# How To Contribute

**Please contribute!** You can help code, design, update documentation, fix typos, raise issues and so much more.

Any help is welcome and appreciated! :+1: :tada:

## Installation

* `git clone <repository-url>`
* `cd my-addon`
* `yarn`

## Linting

* `yarn lint:hbs`
* `yarn lint:js`
* `yarn lint:js -- --fix`

## Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

## Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

## Release

Ready to draft a new release:

```sh
npm version <major | minor | patch>
# package.json scripts automatically update CHANGELOG.md and git push
# Draft release on Github, generate CHANGELOG with only the commits included in the latest tag using this command:
git-chglog $(git describe --tags $(git rev-list --tags --max-count=1))
# Validate passing tests on Travis and Travis will automatically deploy (`ember deploy`) and publish (`npm publish`)
```

## Deploy

Deploys are automated using Travis CI. If you need to manually deploy, run the following command:

```sh
ember deploy production
```

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).