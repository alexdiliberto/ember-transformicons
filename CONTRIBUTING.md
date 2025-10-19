# How To Contribute

**Please contribute!** You can help code, design, update documentation, fix typos, raise issues and so much more.

Any help is welcome and appreciated! :+1: :tada:

## Installation

- `git clone <repository-url>`
- `cd ember-transformicons`
- `yarn install`

## Linting

- `yarn lint`
- `yarn lint:fix`

## Running tests

- `yarn test` – Runs the test suite on the current Ember version
- `yarn test:ember --server` – Runs the test suite in "watch mode"
- `yarn test:ember-compatibility` – Runs the test suite against multiple Ember versions

## Running the dummy application

- `yarn start`
- Visit the dummy application at [http://localhost:4200](http://localhost:4200).

## Deploy

Deploys are automated using Github Actions. If you need to manually deploy, run the following command:

```sh
yarn ember deploy production
```

**NOTE:** CI is currently having issues doing an automated deployments, you will need to manually run a deploy `yarn ember deploy production` after publishing a new release

## Release

When reviewing merged PR's the labels to be used are:

* breaking - Used when the PR is considered a breaking change.
* enhancement - Used when the PR adds a new feature or enhancement.
* bug - Used when the PR fixes a bug included in a previous release.
* documentation - Used when the PR adds or updates documentation.
* internal - Used for internal changes that still require a mention in the
  changelog/release notes.

Ready to draft a new release:

```sh
yarn install
# `source ~/.env` if needed
npx release-it # unknown issues sometimes when running `yarn release`
```

For more information on using ember-cli, visit [https://cli.emberjs.com/release/](https://cli.emberjs.com/release/).