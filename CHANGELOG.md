* adding context dump for additional ci logging (aa787a9)

## v6.0.0 (2019-12-22)

#### :boom: Breaking Change
* [#391](https://github.com/alexdiliberto/ember-transformicons/pull/391) drop node 8 support ([@alexdiliberto](https://github.com/alexdiliberto))

#### :memo: Documentation
* [#392](https://github.com/alexdiliberto/ember-transformicons/pull/392) CONTRIBUTING.md release documentation updates ([@alexdiliberto](https://github.com/alexdiliberto))

#### :house: Internal
* [#318](https://github.com/alexdiliberto/ember-transformicons/pull/318) build(deps-dev): bump @alexdiliberto/eslint-config from 3.1.0 to 4.1.1 ([@dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
* [#390](https://github.com/alexdiliberto/ember-transformicons/pull/390) adding lerna-changelog and release-it ([@alexdiliberto](https://github.com/alexdiliberto))
* [#389](https://github.com/alexdiliberto/ember-transformicons/pull/389) update dependabot default labels: depdendencies & internal ([@alexdiliberto](https://github.com/alexdiliberto))
* [#383](https://github.com/alexdiliberto/ember-transformicons/pull/383) build(deps-dev): bump ember-resolver from 6.0.1 to 7.0.0 ([@dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
* [#388](https://github.com/alexdiliberto/ember-transformicons/pull/388) fix `ember ts:precompile` by adding `skipLibCheck` to tsconfig ([@alexdiliberto](https://github.com/alexdiliberto))
* [#387](https://github.com/alexdiliberto/ember-transformicons/pull/387) enable Percy snapshots on CI ([@alexdiliberto](https://github.com/alexdiliberto))
* [#386](https://github.com/alexdiliberto/ember-transformicons/pull/386) ember try continue-on-error for canary and add `DEPLOY_KEY` ([@alexdiliberto](https://github.com/alexdiliberto))
* [#385](https://github.com/alexdiliberto/ember-transformicons/pull/385) update ci.yml deploy-prod step ([@alexdiliberto](https://github.com/alexdiliberto))
* [#377](https://github.com/alexdiliberto/ember-transformicons/pull/377) Actions dump context vars and test conditional logic ([@alexdiliberto](https://github.com/alexdiliberto))
* [#375](https://github.com/alexdiliberto/ember-transformicons/pull/375) Github Actions ([@alexdiliberto](https://github.com/alexdiliberto))
* [#374](https://github.com/alexdiliberto/ember-transformicons/pull/374) build(package.json): first batch of updates ([@alexdiliberto](https://github.com/alexdiliberto))

#### Committers: 2
- Alex DiLiberto ([@alexdiliberto](https://github.com/alexdiliberto))
- [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)

# ember-transformicons CHANGELOG


<a name="v5.0.2"></a>
## [v5.0.2](https://github.com/alexdiliberto/ember-transformicons/compare/v5.0.1...v5.0.2) (2019-12-01)

### Build

* minimum supported app version ember.js >= v3.13
* **optional-features:** remove application-template-wrapper
* **package.json:** adding octane dependencies
* **package.json:** remove unnecessary polyfills

### Features

* **typescript:** types for `setComponentTemplate` and `ember-cli-htmlbars`

### Refactors

* octanify

### Style

* **eslint:** remove possible conflicts between `typescript-eslint` and `[@alexdiliberto](https://github.com/alexdiliberto)` config


<a name="v5.0.1"></a>
## [v5.0.1](https://github.com/alexdiliberto/ember-transformicons/compare/v5.0.0...v5.0.1) (2019-11-29)

### Build

* API updates and min supported Ember JS Version - v3.12 ([#356](https://github.com/alexdiliberto/ember-transformicons/issues/356))


<a name="v5.0.0"></a>
## [v5.0.0](https://github.com/alexdiliberto/ember-transformicons/compare/v4.0.2...v5.0.0) (2019-11-29)

### Build

* API updates and min supported Ember JS Version - v3.12
* **.prettierrc.js:** `tabs` --> `useTabs`
* **deps:** bump ember-classic-decorator from 1.0.1 to 1.0.3
* **deps:** bump ember-classic-decorator from 1.0.1 to 1.0.3 ([#328](https://github.com/alexdiliberto/ember-transformicons/issues/328))
* **deps:** bump ember-cli-babel from 7.12.0 to 7.13.0
* **deps:** bump ember-classic-decorator from 1.0.3 to 1.0.5
* **deps-dev:** bump qunit-dom from 0.9.1 to 0.9.2
* **deps-dev:** bump ember-qunit from 4.5.1 to 4.6.0
* **deps-dev:** bump qunit-dom from 0.9.1 to 0.9.2 ([#342](https://github.com/alexdiliberto/ember-transformicons/issues/342))
* **deps-dev:** bump ember-source from 3.14.1 to 3.14.2
* **deps-dev:** bump ember-resolver from 5.3.0 to 6.0.0
* **deps-dev:** bump [@typescript](https://github.com/typescript)-eslint/eslint-plugin
* **deps-dev:** bump eslint-plugin-ember from 7.5.0 to 7.6.0
* **deps-dev:** bump [@typescript](https://github.com/typescript)-eslint/parser from 2.7.0 to 2.8.0
* **deps-dev:** bump eslint-config-prettier from 6.6.0 to 6.7.0
* **deps-dev:** bump [@typescript](https://github.com/typescript)-eslint/eslint-plugin
* **deps-dev:** bump eslint-config-prettier from 6.5.0 to 6.6.0
* **deps-dev:** bump ember-export-application-global
* **deps-dev:** bump [@typescript](https://github.com/typescript)-eslint/parser from 2.6.1 to 2.7.0
* **deps-dev:** bump [@typescript](https://github.com/typescript)-eslint/parser from 2.8.0 to 2.9.0
* **deps-dev:** bump [@typescript](https://github.com/typescript)-eslint/eslint-plugin
* **deps-dev:** bump eslint-plugin-ember from 7.4.1 to 7.5.0
* **deps-dev:** bump ember-try from 1.2.1 to 1.3.0
* **deps-dev:** bump qunit-dom from 0.9.0 to 0.9.1 ([#323](https://github.com/alexdiliberto/ember-transformicons/issues/323))
* **deps-dev:** bump qunit-dom from 0.9.0 to 0.9.1
* **deps-dev:** bump ember-source from 3.13.3 to 3.14.1
* **deps-dev:** bump ember-resolver from 5.3.0 to 6.0.0 ([#349](https://github.com/alexdiliberto/ember-transformicons/issues/349))
* **deps-dev:** bump ember-load-initializers from 2.1.0 to 2.1.1 ([#332](https://github.com/alexdiliberto/ember-transformicons/issues/332))
* **deps-dev:** bump prettier from 1.18.2 to 1.19.1 ([#336](https://github.com/alexdiliberto/ember-transformicons/issues/336))
* **deps-dev:** bump ember-decorators-polyfill from 1.0.6 to 1.1.1
* **deps-dev:** bump prettier from 1.18.2 to 1.19.1
* **deps-dev:** bump eslint-plugin-ember from 7.1.0 to 7.4.1
* **deps-dev:** bump ember-load-initializers from 2.1.0 to 2.1.1
* **deps-dev:** bump [@ember](https://github.com/ember)/optional-features from 1.0.0 to 1.1.0
* **package.json:** add `eslint-plugin-qunit`
* **package.json:** scripts updates and quick dep cleanup
* **package.json:** pin volta
* **package.json:** ember-cli-update
* **package.json:** add `prettier`

### CI

* **dependabot:** update "daily" and automerge in-range versions

### Features

* **typescript:** add typescript

### Style

* **lint:** remove old rules
* **lint:** `eslint . --fix`

### Pull Requests

* Merge pull request [#353](https://github.com/alexdiliberto/ember-transformicons/issues/353) from alexdiliberto/dependabot/npm_and_yarn/ember-classic-decorator-1.0.5
* Merge pull request [#355](https://github.com/alexdiliberto/ember-transformicons/issues/355) from alexdiliberto/dependabot/npm_and_yarn/typescript-eslint/parser-2.9.0
* Merge pull request [#354](https://github.com/alexdiliberto/ember-transformicons/issues/354) from alexdiliberto/dependabot/npm_and_yarn/typescript-eslint/eslint-plugin-2.9.0
* Merge pull request [#351](https://github.com/alexdiliberto/ember-transformicons/issues/351) from alexdiliberto/dependabot/npm_and_yarn/ember-source-3.14.2
* Merge pull request [#350](https://github.com/alexdiliberto/ember-transformicons/issues/350) from alexdiliberto/dependabot/npm_and_yarn/ember-cli-babel-7.13.0
* Merge pull request [#348](https://github.com/alexdiliberto/ember-transformicons/issues/348) from alexdiliberto/dependabot/npm_and_yarn/eslint-plugin-ember-7.6.0
* Merge pull request [#346](https://github.com/alexdiliberto/ember-transformicons/issues/346) from alexdiliberto/dependabot/npm_and_yarn/typescript-eslint/parser-2.8.0
* Merge pull request [#347](https://github.com/alexdiliberto/ember-transformicons/issues/347) from alexdiliberto/dependabot/npm_and_yarn/eslint-config-prettier-6.7.0
* Merge pull request [#345](https://github.com/alexdiliberto/ember-transformicons/issues/345) from alexdiliberto/dependabot/npm_and_yarn/typescript-eslint/eslint-plugin-2.8.0
* Merge pull request [#344](https://github.com/alexdiliberto/ember-transformicons/issues/344) from alexdiliberto/dependabot/npm_and_yarn/eslint-config-prettier-6.6.0
* Merge pull request [#343](https://github.com/alexdiliberto/ember-transformicons/issues/343) from alexdiliberto/dependabot/npm_and_yarn/ember-export-application-global-2.0.1
* Merge pull request [#341](https://github.com/alexdiliberto/ember-transformicons/issues/341) from alexdiliberto/dependabot/npm_and_yarn/typescript-eslint/parser-2.7.0
* Merge pull request [#340](https://github.com/alexdiliberto/ember-transformicons/issues/340) from alexdiliberto/dependabot/npm_and_yarn/typescript-eslint/eslint-plugin-2.7.0
* Merge pull request [#339](https://github.com/alexdiliberto/ember-transformicons/issues/339) from alexdiliberto/dependabot/npm_and_yarn/eslint-plugin-ember-7.5.0
* Merge pull request [#338](https://github.com/alexdiliberto/ember-transformicons/issues/338) from alexdiliberto/dependabot/npm_and_yarn/ember-try-1.3.0
* Merge pull request [#337](https://github.com/alexdiliberto/ember-transformicons/issues/337) from alexdiliberto/typescript-2
* Merge pull request [#327](https://github.com/alexdiliberto/ember-transformicons/issues/327) from alexdiliberto/dependabot/npm_and_yarn/ember-source-3.14.1
* Merge pull request [#320](https://github.com/alexdiliberto/ember-transformicons/issues/320) from alexdiliberto/dependabot/npm_and_yarn/ember/optional-features-1.1.0
* Merge pull request [#322](https://github.com/alexdiliberto/ember-transformicons/issues/322) from alexdiliberto/dependabot/npm_and_yarn/ember-decorators-polyfill-1.1.1
* Merge pull request [#330](https://github.com/alexdiliberto/ember-transformicons/issues/330) from alexdiliberto/dependabot/npm_and_yarn/ember-qunit-4.6.0
* Merge pull request [#334](https://github.com/alexdiliberto/ember-transformicons/issues/334) from alexdiliberto/dependabot/npm_and_yarn/eslint-plugin-ember-7.4.1


<a name="v4.0.2"></a>
## [v4.0.2](https://github.com/alexdiliberto/ember-transformicons/compare/v4.0.1...v4.0.2) (2019-10-19)

### Build

* add `ember-classic-decorator`
* **deps:** bump ember-cli-htmlbars from 4.0.1 to 4.0.5 ([#309](https://github.com/alexdiliberto/ember-transformicons/issues/309))
* **deps:** bump ember-cli-htmlbars from 4.0.5 to 4.0.8 ([#317](https://github.com/alexdiliberto/ember-transformicons/issues/317))
* **deps:** bump ember-auto-import from 1.5.2 to 1.5.3 ([#313](https://github.com/alexdiliberto/ember-transformicons/issues/313))
* **deps:** [security] bump eslint-utils from 1.3.1 to 1.4.2 ([#292](https://github.com/alexdiliberto/ember-transformicons/issues/292))
* **deps-dev:** bump ember-source from 3.13.2 to 3.13.3 ([#311](https://github.com/alexdiliberto/ember-transformicons/issues/311))
* **deps-dev:** bump ember-cli-htmlbars-inline-precompile from… ([#307](https://github.com/alexdiliberto/ember-transformicons/issues/307))
* **deps-dev:** bump ember-cli-addon-docs from 0.6.14 to 0.6.15 ([#310](https://github.com/alexdiliberto/ember-transformicons/issues/310))
* **deps-dev:** bump ember-cli-inject-live-reload from 2.0.1 to… ([#312](https://github.com/alexdiliberto/ember-transformicons/issues/312))
* **deps-dev:** bump ember-angle-bracket-invocation-polyfill fr… ([#283](https://github.com/alexdiliberto/ember-transformicons/issues/283))
* **deps-dev:** bump [@alexdiliberto](https://github.com/alexdiliberto)/eslint-config from 3.0.1 to… ([#282](https://github.com/alexdiliberto/ember-transformicons/issues/282))

### CI

* **dependabot:** update_schedule "daily" -> "live"

### Docs

* **readme:** add bundlephobia badge, remove snyk badge

### Style

* codemod whitespace removal


<a name="v4.0.1"></a>
## [v4.0.1](https://github.com/alexdiliberto/ember-transformicons/compare/v4.0.0...v4.0.1) (2019-08-02)

### Build

* **deps-dev:** bump ember-angle-bracket-invocation-polyfill from ^1.2.5 to ^2.0.1

### Test

* **lint:** remove `ember-assign-polyfill` from dependency-lint allowed versions list


<a name="v4.0.0"></a>
## [v4.0.0](https://github.com/alexdiliberto/ember-transformicons/compare/v3.0.4...v4.0.0) (2019-07-29)

### Build

* ember-cli-update
* remove fastboot and all related items
* **deps:** [security] bump jquery from 3.3.1 to 3.4.0 ([#246](https://github.com/alexdiliberto/ember-transformicons/issues/246))
* **deps:** [security] bump lodash.defaultsdeep from 4.6.0 to 4.6.1 ([#270](https://github.com/alexdiliberto/ember-transformicons/issues/270))
* **deps:** update ember-decorators to 6.0.0
* **deps-dev:** bump eslint-plugin-ember from 6.2.0 to 6.3.0 ([#224](https://github.com/alexdiliberto/ember-transformicons/issues/224))
* **deps-dev:** bump ember-angle-bracket-invocation-polyfill from 1.2.5 to 1.3.1 ([#249](https://github.com/alexdiliberto/ember-transformicons/issues/249))
* **deps-dev:** bump ember-cli-template-lint from 1.0.0-beta.2 to 1.0.0-beta.3 ([#241](https://github.com/alexdiliberto/ember-transformicons/issues/241))
* **deps-dev:** remove ember-exam
* **deps-dev:** bump ember-source from 3.8.0 to 3.9.1 ([#236](https://github.com/alexdiliberto/ember-transformicons/issues/236))
* **deps-dev:** bump ember-cli-addon-docs from 0.6.7 to 0.6.10 ([#238](https://github.com/alexdiliberto/ember-transformicons/issues/238))
* **deps-dev:** bump ember-cli-addon-docs from 0.6.6 to 0.6.7 ([#222](https://github.com/alexdiliberto/ember-transformicons/issues/222))
* **package.json:** update `ember-addon.versionCompatibility` min version

### CI

* **travis:** yarn upgrade ember-cli-template-lint ([#276](https://github.com/alexdiliberto/ember-transformicons/issues/276))

### Docs

* **package.json:** update `versionCompatibility` to be at least v2.18.x
* **readme:** more conventional addon README format
* **readme:** update release docs with latest info

### Refactors

* remove old base class, modernize, remove outdated deps ([#277](https://github.com/alexdiliberto/ember-transformicons/issues/277))
* **package.json:** remove lodash.defaultto

### Reverts

* Revert "refactor(package.json): remove lodash.defaultto"
* refactor(package.json): remove lodash.defaultto


<a name="v3.0.4"></a>
## [v3.0.4](https://github.com/alexdiliberto/ember-transformicons/compare/v3.0.3...v3.0.4) (2019-03-12)

### Build

* **package.json:** update scripts to use `git-chglog --next-tag` flag

### Docs

* **changelog:** 📄


<a name="v3.0.3"></a>
## [v3.0.3](https://github.com/alexdiliberto/ember-transformicons/compare/v3.0.2...v3.0.3) (2019-03-12)

### Build

* **package.json:** update scripts again
* **package.json:** update `version` script to commit changelog

### Docs

* **readme:** update release steps


<a name="v3.0.2"></a>
## [v3.0.2](https://github.com/alexdiliberto/ember-transformicons/compare/v3.0.1...v3.0.2) (2019-03-12)

### Build

* **package.json:** add `preversion` and `postversion` scripts

### Docs

* **changelog:** bump changelog


<a name="v3.0.1"></a>
## [v3.0.1](https://github.com/alexdiliberto/ember-transformicons/compare/v3.0.0...v3.0.1) (2019-03-11)

### Build

* **changelog:** add auto changelog generation using git-chglog
* **deps:** Bump ember-decorators from 5.1.3 to 5.1.4 ([#215](https://github.com/alexdiliberto/ember-transformicons/issues/215))
* **deps:** Bump [@ember](https://github.com/ember)-decorators/babel-transforms from 5.1.3 to 5.1.4 ([#216](https://github.com/alexdiliberto/ember-transformicons/issues/216))
* **deps-dev:** bump [@alexdiliberto](https://github.com/alexdiliberto)/eslint-config from 3.0.0 to 3.0.1 ([#220](https://github.com/alexdiliberto/ember-transformicons/issues/220))
* **deps-dev:** bump [@alexdiliberto](https://github.com/alexdiliberto)/eslint-config from 2.1.0 to 3.0.0 ([#218](https://github.com/alexdiliberto/ember-transformicons/issues/218))
* **deps-dev:** bump ember-source from 3.7.3 to 3.8.0 ([#207](https://github.com/alexdiliberto/ember-transformicons/issues/207))
* **deps-dev:** bump ember-cli-addon-docs from 0.6.5 to 0.6.6 ([#219](https://github.com/alexdiliberto/ember-transformicons/issues/219))
* **deps-dev:** Bump ember-cli-addon-docs from 0.6.4 to 0.6.5 ([#214](https://github.com/alexdiliberto/ember-transformicons/issues/214))


<a name="v3.0.0"></a>
## [v3.0.0](https://github.com/alexdiliberto/ember-transformicons/compare/v2.3.2...v3.0.0) (2019-02-26)

### Build

* **deps:** Bump [@ember](https://github.com/ember)-decorators/babel-transforms from 3.1.5 to 5.1.3 ([#209](https://github.com/alexdiliberto/ember-transformicons/issues/209))
* **deps:** [security] bump handlebars from 4.0.12 to 4.1.0 ([#198](https://github.com/alexdiliberto/ember-transformicons/issues/198))
* **deps-dev:** bump eslint-plugin-ember from 5.2.0 to 6.2.0 ([#202](https://github.com/alexdiliberto/ember-transformicons/issues/202))
* **deps-dev:** bump ember-cli-inject-live-reload from 1.10.2 to 2.0.1 ([#206](https://github.com/alexdiliberto/ember-transformicons/issues/206))
* **deps-dev:** bump [@ember](https://github.com/ember)/optional-features from 0.6.4 to 0.7.0 ([#197](https://github.com/alexdiliberto/ember-transformicons/issues/197))
* **deps-dev:** bump ember-cli-eslint from 4.2.3 to 5.1.0 ([#196](https://github.com/alexdiliberto/ember-transformicons/issues/196))
* **deps-dev:** bump ember-load-initializers from 1.1.0 to 2.0.0 ([#199](https://github.com/alexdiliberto/ember-transformicons/issues/199))
* **deps-dev:** Bump ember-exam from 1.0.0 to 2.0.3 ([#210](https://github.com/alexdiliberto/ember-transformicons/issues/210))

### CI

* **dependabot:** config.yml file configuration setup
* **travis:** node v8 minimum support
* **travis:** add `--verbose` logs to ember deploy prod
* **travis:** add npm deploy stage
* **travis:** move prod deploy step into a travis stages command
* **travis:** remove `secure` global env


<a name="v2.3.2"></a>
## [v2.3.2](https://github.com/alexdiliberto/ember-transformicons/compare/v2.3.1...v2.3.2) (2019-02-23)

### Docs

* **changelog:** update to reference v2.3.2


<a name="v2.3.1"></a>
## [v2.3.1](https://github.com/alexdiliberto/ember-transformicons/compare/v2.3.0...v2.3.1) (2019-02-23)

### Build

* **deploy:** fix `TypeError: Cannot read property '_walk' of null`
* **travis:** auto deploy branch now points to `ember-default-with-jquery`
* **travis:** `ember-default` scenario to ember-try config to fix automatic deploy


<a name="v2.3.0"></a>
## [v2.3.0](https://github.com/alexdiliberto/ember-transformicons/compare/v2.2.0...v2.3.0) (2019-02-23)

### Bug Fixes

* **package:** update ember-decorators to version 3.0.0

### Build

* **package.json:** ember upgrade

### CI

* **dependency-lint:** update `ember-assign-polyfil` range
* **greenkeeper:** ignore `eslint-plugin-ember` and `eslint-plugin-node`
* **greenkeeper:** ignore `eslint-plugin-ember` and `eslint-plugin-node`
* **greenkeeper:** ignore `[@ember](https://github.com/ember)/optional-features`
* **greenkeeper:** ignore `ember-ajax`
* **package.json:** remove `postinstall` step and `y upgrade ember-cli-sass`

### Chore

* **npm:** update package.json description to match docs-header byline
* **package:** update lockfile yarn.lock
* **package:** update ember-auto-import to version 1.2.15
* **package:** update lockfile yarn.lock
* **package:** update lockfile
* **package:** update ember-percy to version 1.5.0
* **package:** update lockfile yarn.lock
* **package:** update ember-cli-dependency-lint to version 1.1.1
* **package:** update lockfile yarn.lock
* **package:** update ember-decorators to version 2.5.0
* **package:** update lockfile yarn.lock
* **package:** update qunit-dom to version 0.8.0
* **yarn.lock:** upgrade to add integrity hash for each dep
* **yarn.lock:** update deps

### Docs

* **changelog:** fix changelog link
* **changelog:** update

### Features

* **lint:** add template lint

### Pull Requests

* Merge pull request [#181](https://github.com/alexdiliberto/ember-transformicons/issues/181) from alexdiliberto/ember-upgrade
* Merge pull request [#179](https://github.com/alexdiliberto/ember-transformicons/issues/179) from alexdiliberto/fix-[#39](https://github.com/alexdiliberto/ember-transformicons/issues/39)
* Merge pull request [#168](https://github.com/alexdiliberto/ember-transformicons/issues/168) from alexdiliberto/greenkeeper/ember-auto-import-1.2.15
* Merge pull request [#166](https://github.com/alexdiliberto/ember-transformicons/issues/166) from alexdiliberto/greenkeeper/ember-cli-dependency-lint-1.1.1
* Merge pull request [#162](https://github.com/alexdiliberto/ember-transformicons/issues/162) from alexdiliberto/greenkeeper/ember-decorators-3.0.0
* Merge pull request [#155](https://github.com/alexdiliberto/ember-transformicons/issues/155) from alexdiliberto/greenkeeper/ember-decorators-2.5.0
* Merge pull request [#152](https://github.com/alexdiliberto/ember-transformicons/issues/152) from alexdiliberto/template-lint
* Merge pull request [#149](https://github.com/alexdiliberto/ember-transformicons/issues/149) from alexdiliberto/greenkeeper/qunit-dom-0.8.0
* Merge pull request [#151](https://github.com/alexdiliberto/ember-transformicons/issues/151) from alexdiliberto/greenkeeper/ember-percy-1.5.0


<a name="v2.2.0"></a>
## [v2.2.0](https://github.com/alexdiliberto/ember-transformicons/compare/v2.1.0...v2.2.0) (2018-09-03)

### Bug Fixes

* update docs .md with `docs-` style prefixes

### CI

* fix tests when using decorator syntax

### Chore

* **npm:** ember-cli-update to v3.3.x
* **package:** update ember-cli-addon-docs to version 0.5.3
* **package:** update ember-cli-addon-docs to version 0.5.2
* **package:** update lockfile
* **package:** update ember-cli-anybar to version 0.7.0

### Docs

* remove `-private` dirs from ember-cli-addon-docs
* **esdoc:** move from yuidoc to esdoc syntax

### Features

* use angle bracket syntax
* `[@ember](https://github.com/ember)/optional-features` addon
* **ember-decorators:** implement decorator syntax
* **ember-decorators:** initial ember-decorator setup

### Refactors

* **dummy-app:** use decorator syntax

### Reverts

* chore(package): update ember-cli-addon-docs to version 0.5.2

### Pull Requests

* Merge pull request [#147](https://github.com/alexdiliberto/ember-transformicons/issues/147) from alexdiliberto/modern-ember-updates
* Merge pull request [#146](https://github.com/alexdiliberto/ember-transformicons/issues/146) from alexdiliberto/add-decorators-to-dummy-app
* Merge pull request [#145](https://github.com/alexdiliberto/ember-transformicons/issues/145) from alexdiliberto/ember-decorators
* Merge pull request [#141](https://github.com/alexdiliberto/ember-transformicons/issues/141) from alexdiliberto/greenkeeper/ember-cli-anybar-0.7.0


<a name="v2.1.0"></a>
## [v2.1.0](https://github.com/alexdiliberto/ember-transformicons/compare/v2.0.4...v2.1.0) (2018-07-21)

### Build

* **npm:** set Greenkeeper to ignore specific core Ember and CLI related dependencies
* **npm:** ember-cli-update
* **npm:** update deps

### Chore

* **package:** update lockfile
* **package:** update ember-percy to version 1.4.4
* **package:** update lockfile
* **package:** update qunit-dom to version 0.7.1
* **package:** update lockfile
* **package:** update ember-percy to version 1.4.3

### Docs

* use `AddonDocsRouter` instead of the standard `EmberRouter` for docs app
* **component:** fix `WARNING Missing item type` console messages
* **readme:** remove "Contributing" section from README.md
* **readme:** update release section
* **readme:** release docs update
* **readme:** test and release docs

### Style

* **index.html:** update title element

### Test

* add `ember-fastboot-addon-tests` and remove old dependencies
* update to use qunit-dom testing syntax

### Pull Requests

* Merge pull request [#140](https://github.com/alexdiliberto/ember-transformicons/issues/140) from alexdiliberto/add-code-of-conduct-1
* Merge pull request [#138](https://github.com/alexdiliberto/ember-transformicons/issues/138) from alexdiliberto/greenkeeper/ember-percy-1.4.4
* Merge pull request [#136](https://github.com/alexdiliberto/ember-transformicons/issues/136) from alexdiliberto/greenkeeper/qunit-dom-0.7.1
* Merge pull request [#133](https://github.com/alexdiliberto/ember-transformicons/issues/133) from alexdiliberto/greenkeeper/ember-percy-1.4.3


<a name="v2.0.4"></a>
## [v2.0.4](https://github.com/alexdiliberto/ember-transformicons/compare/v2.0.3...v2.0.4) (2018-05-18)

### Build

* **npm:** dep updates

### Refactors

* running es5-getter-ember-codemod for ember 3.1


<a name="v2.0.3"></a>
## [v2.0.3](https://github.com/alexdiliberto/ember-transformicons/compare/v2.0.2...v2.0.3) (2018-05-03)

### Bug Fixes

* remove bootstrap/consolidate header/use tailwind

### Build

* **npm:** latest ember-cli/remove ember-cli-add-version
* **npm:** remove tachyons/update addon-docs
* **npm:** upgrade loader.js
* **npm:** upgrade ember-cli-addon-docs
* **npm:** cli upgrade

### Chore

* **package:** update lockfile
* **package:** update ember-percy to version 1.4.1
* **package:** update lockfile
* **package:** update ember-percy to version 1.4.0
* **package:** update lockfile
* **package:** update ember-percy to version 1.3.3

### Docs

* **readme:** update with latest changes

### Style

* replace missed tachyons styles with tailwind styles

### Pull Requests

* Merge pull request [#121](https://github.com/alexdiliberto/ember-transformicons/issues/121) from alexdiliberto/greenkeeper/ember-percy-1.4.1
* Merge pull request [#120](https://github.com/alexdiliberto/ember-transformicons/issues/120) from alexdiliberto/ember-cli-addon-docs
* Merge pull request [#119](https://github.com/alexdiliberto/ember-transformicons/issues/119) from alexdiliberto/greenkeeper/ember-percy-1.4.0
* Merge pull request [#118](https://github.com/alexdiliberto/ember-transformicons/issues/118) from alexdiliberto/greenkeeper/ember-percy-1.3.3


<a name="v2.0.2"></a>
## [v2.0.2](https://github.com/alexdiliberto/ember-transformicons/compare/v2.0.1...v2.0.2) (2018-04-07)

### Bug Fixes

* final steps for addon-docs and fix lint error
* **environment:** clean up environmen===production config
* **package:** update eslint-plugin-ember to version 5.0.0

### CI

* add `secure` and `after_success` travis.yml configs
* **travis:** run with node v6

### Chore

* **changelog:** update with latest PR information
* **npm:** `ember init` for ember-cli v2.16.1
* **npm:** ember-cli-update v2.16.2
* **npm:** bump deps
* **npm:** updates deps
* **npm:** ember init 2.17.0
* **pacakge:** update ember-addon demo url to https
* **package:** update lockfile
* **package:** upgrade cli
* **package:** update lockfile
* **package:** update ember-percy to version 1.3.0
* **package:** update deps
* **package:** update lockfile
* **package:** update ember-percy to version 1.3.1
* **package:** update lockfile
* **package:** upgrade cli
* **package:** update lockfile
* **package:** update ember-cli-github-pages to version 0.2.0
* **package:** update lockfile
* **package:** update ember-cli-dependency-lint to version 1.0.3
* **package:** quick update
* **package:** update deps
* **package:** update ember-cli[@2](https://github.com/2).18
* **package:** update lockfile
* **package:** update ember-cli-github-pages to version 0.1.3
* **package:** update lockfile
* **package:** update ember-native-dom-helpers to version 0.6.0
* **package:** update lockfile
* **package:** update ember-percy to version 1.2.22
* **package:** update ember-open-browser to version 1.0.0
* **package:** update lockfile
* **package:** update ember-cli to version 2.17.0
* **package:** update lockfile
* **package:** update ember-source to version 2.17.0
* **package:** update lockfile
* **package:** update lockfile
* **package:** update ember-percy to version 1.2.21
* **package:** update lockfile
* **package:** update ember-cli-addon-tests to version 0.11.0
* **package:** :punch: deps
* **package:** update lockfile
* **package:** update ember-exam to version 1.0.0
* **package:** update lockfile
* **package:** update ember-percy to version 1.2.20
* **package:** update lockfile
* **package:** update ember-percy to version 1.2.19
* **package:** update ember-percy to version 1.3.2
* **package:** update lockfile
* **package:** upgrade cli
* **package:** update ember-cli to version 2.16.1
* **readme:** remove broken embadge.io link
* **readme:** update Code Climate maintainability

### Docs

* finish ember-cli-addon-docs initial configuration
* updating to use ember-cli-addon-docs

### Features

* **targets:** update to evergreen browsers

### Test

* **integration:** rfc-232 test syntax
* **rfc:** align with latest testing syntax

### Pull Requests

* Merge pull request [#117](https://github.com/alexdiliberto/ember-transformicons/issues/117) from alexdiliberto/greenkeeper/ember-percy-1.3.2
* Merge pull request [#116](https://github.com/alexdiliberto/ember-transformicons/issues/116) from alexdiliberto/greenkeeper/ember-open-browser-1.0.0
* Merge pull request [#115](https://github.com/alexdiliberto/ember-transformicons/issues/115) from alexdiliberto/greenkeeper/ember-percy-1.3.1
* Merge pull request [#113](https://github.com/alexdiliberto/ember-transformicons/issues/113) from alexdiliberto/greenkeeper/ember-percy-1.3.0
* Merge pull request [#108](https://github.com/alexdiliberto/ember-transformicons/issues/108) from alexdiliberto/greenkeeper/ember-cli-github-pages-0.2.0
* Merge pull request [#107](https://github.com/alexdiliberto/ember-transformicons/issues/107) from alexdiliberto/greenkeeper/ember-cli-dependency-lint-1.0.3
* Merge pull request [#103](https://github.com/alexdiliberto/ember-transformicons/issues/103) from alexdiliberto/greenkeeper/ember-cli-github-pages-0.1.3
* Merge pull request [#102](https://github.com/alexdiliberto/ember-transformicons/issues/102) from alexdiliberto/greenkeeper/ember-native-dom-helpers-0.6.0
* Merge pull request [#101](https://github.com/alexdiliberto/ember-transformicons/issues/101) from alexdiliberto/greenkeeper/ember-percy-1.2.22
* Merge pull request [#100](https://github.com/alexdiliberto/ember-transformicons/issues/100) from alexdiliberto/greenkeeper/ember-cli-2.17.0
* Merge pull request [#99](https://github.com/alexdiliberto/ember-transformicons/issues/99) from alexdiliberto/greenkeeper/ember-source-2.17.0
* Merge pull request [#98](https://github.com/alexdiliberto/ember-transformicons/issues/98) from alexdiliberto/greenkeeper/eslint-plugin-ember-5.0.0
* Merge pull request [#97](https://github.com/alexdiliberto/ember-transformicons/issues/97) from alexdiliberto/greenkeeper/ember-percy-1.2.21
* Merge pull request [#96](https://github.com/alexdiliberto/ember-transformicons/issues/96) from alexdiliberto/greenkeeper/ember-cli-addon-tests-0.11.0
* Merge pull request [#95](https://github.com/alexdiliberto/ember-transformicons/issues/95) from alexdiliberto/greenkeeper/ember-exam-1.0.0
* Merge pull request [#94](https://github.com/alexdiliberto/ember-transformicons/issues/94) from alexdiliberto/greenkeeper/ember-percy-1.2.20
* Merge pull request [#93](https://github.com/alexdiliberto/ember-transformicons/issues/93) from alexdiliberto/greenkeeper/ember-percy-1.2.19
* Merge pull request [#92](https://github.com/alexdiliberto/ember-transformicons/issues/92) from alexdiliberto/feature/rfc-232
* Merge pull request [#91](https://github.com/alexdiliberto/ember-transformicons/issues/91) from alexdiliberto/greenkeeper/ember-cli-2.16.1


<a name="v2.0.1"></a>
## [v2.0.1](https://github.com/alexdiliberto/ember-transformicons/compare/v2.0.0...v2.0.1) (2017-10-09)

### Build

* **deploy:** add `ember-cli-deploy-git`

### CI

* **travis:** adding back `useYarn` to ember-try to fix CI
* **travis:** add greenkeeper-lockfile

### Chore

* **npm:** update `ember-cli-babel` and `eslint-plugin-ember`
* **npm:** ember-cli[@2](https://github.com/2).15.1
* **package:** update ember-cli-uglify to version 2.0.0
* **package:** update mocha to version 4.0.1
* **package:** update lockfile
* **package:** update ember-exam to version 0.8.0
* **package:** update lockfile
* **package:** update lockfile
* **package:** update ember-cli-addon-tests to version 0.10.0
* **package:** update lockfile
* **package:** update ember-percy to version 1.2.18
* **yarn:** :punch: lockfile
* **yarn:** :punch: yarn.lock
* **yarn:** :punch: yarn.lock
* **yarn:** fix merge conflict with greenkeepr

### Docs

* **readme:** add note about name change
* **readme:** "update demo app" instructions changes

### Refactors

* **demo:** removed all `a="typo"` components from the dummy app

### Test

* **ember-try:** remove `useYarn` from the ember-try config
* **testem:** use 'ci' mode for testem.js

### Pull Requests

* Merge pull request [#89](https://github.com/alexdiliberto/ember-transformicons/issues/89) from alexdiliberto/feature/fix-travis
* Merge pull request [#88](https://github.com/alexdiliberto/ember-transformicons/issues/88) from alexdiliberto/greenkeeper/mocha-4.0.1
* Merge pull request [#87](https://github.com/alexdiliberto/ember-transformicons/issues/87) from alexdiliberto/greenkeeper/ember-exam-0.8.0
* Merge pull request [#84](https://github.com/alexdiliberto/ember-transformicons/issues/84) from alexdiliberto/greenkeeper/ember-percy-1.2.18
* Merge pull request [#82](https://github.com/alexdiliberto/ember-transformicons/issues/82) from alexdiliberto/greenkeeper/ember-cli-addon-tests-0.10.0


<a name="v2.0.0"></a>
## [v2.0.0](https://github.com/alexdiliberto/ember-transformicons/compare/v1.1.2...v2.0.0) (2017-09-03)

### Chore

* **npm:** finish cli update
* **package:** update ember-cli to version 2.15.0
* **package:** update ember-percy to version 1.2.16

### Features

* **name:** rename addon

### Refactors

* **filepath:** mv addon/components/base-transformicon.js
* **jsbeautify:** add `.jsbeautifyrc` file

### Pull Requests

* Merge pull request [#81](https://github.com/alexdiliberto/ember-transformicons/issues/81) from alexdiliberto/feature/rename
* Merge pull request [#79](https://github.com/alexdiliberto/ember-transformicons/issues/79) from alexdiliberto/greenkeeper/ember-cli-2.15.0
* Merge pull request [#78](https://github.com/alexdiliberto/ember-transformicons/issues/78) from alexdiliberto/greenkeeper/ember-percy-1.2.16


<a name="v1.1.2"></a>
## [v1.1.2](https://github.com/alexdiliberto/ember-transformicons/compare/v1.1.1...v1.1.2) (2017-08-27)

### Refactors

* **app-version:** add `ember-cli-app-version` to display current version


<a name="v1.1.1"></a>
## [v1.1.1](https://github.com/alexdiliberto/ember-transformicons/compare/v1.1.0...v1.1.1) (2017-08-27)

### Chore

* **scss-lint:** scss lint `app.scss` to improve code climate

### Refactors

* **assets:** get bootstrap assets directly from cdn
* **demo:** demo page updates and slight redesign


<a name="v1.1.0"></a>
## [v1.1.0](https://github.com/alexdiliberto/ember-transformicons/compare/v1.0.3...v1.1.0) (2017-08-24)

### Bug Fixes

* **package:** update eslint-plugin-ember to version 4.0.0

### Chore

* **npm:** bump `ember-native-dom-helpers`
* **npm:** bump deps
* **npm:** bump yarn.lock
* **npm:** bump `[@alexdiliberto](https://github.com/alexdiliberto)/eslint-config`
* **package:** update ember-percy to version 1.2.15
* **package:** update ember-cli-content-security-policy to version 1.0.0
* **package:** update ember-cli-htmlbars-inline-precompile to version 1.0.2
* **package:** update ember-cli-addon-tests to version 0.9.2
* **package:** update ember-open-browser to version 0.5.1
* **package:** update ember-cli-content-security-policy to version 0.6.2
* **package:** update loader.js to version 4.6.0

### Refactors

* **imports:** implementing rfc176 - modules import api

### Test

* **ember-try:** set `versionCompatibility: >=1.12.2+`

### Pull Requests

* Merge pull request [#77](https://github.com/alexdiliberto/ember-transformicons/issues/77) from alexdiliberto/rfc-176
* Merge pull request [#76](https://github.com/alexdiliberto/ember-transformicons/issues/76) from alexdiliberto/greenkeeper/ember-percy-1.2.15
* Merge pull request [#74](https://github.com/alexdiliberto/ember-transformicons/issues/74) from alexdiliberto/greenkeeper/ember-cli-content-security-policy-1.0.0
* Merge pull request [#73](https://github.com/alexdiliberto/ember-transformicons/issues/73) from alexdiliberto/greenkeeper/ember-cli-htmlbars-inline-precompile-1.0.2
* Merge pull request [#71](https://github.com/alexdiliberto/ember-transformicons/issues/71) from alexdiliberto/greenkeeper/ember-cli-addon-tests-0.9.2
* Merge pull request [#65](https://github.com/alexdiliberto/ember-transformicons/issues/65) from alexdiliberto/greenkeeper/ember-open-browser-0.5.1
* Merge pull request [#60](https://github.com/alexdiliberto/ember-transformicons/issues/60) from alexdiliberto/greenkeeper/ember-cli-content-security-policy-0.6.2
* Merge pull request [#59](https://github.com/alexdiliberto/ember-transformicons/issues/59) from alexdiliberto/greenkeeper/loader.js-4.6.0
* Merge pull request [#58](https://github.com/alexdiliberto/ember-transformicons/issues/58) from alexdiliberto/greenkeeper/eslint-plugin-ember-4.0.0


<a name="v1.0.3"></a>
## [v1.0.3](https://github.com/alexdiliberto/ember-transformicons/compare/v1.0.2...v1.0.3) (2017-07-10)

### Chore

* **package:** update ember-source to version 2.14.0
* **package:** update ember-native-dom-helpers to version 0.5.2
* **package:** update ember-cli-sass to version 7.0.0
* **package:** update ember-percy to version 1.2.13
* **package:** update chalk to version 2.0.1
* **package:** update loader.js to version 4.5.1
* **package:** update ember-cli-eslint to version 4.0.0

### Pull Requests

* Merge pull request [#57](https://github.com/alexdiliberto/ember-transformicons/issues/57) from alexdiliberto/bower-to-npm
* Merge pull request [#55](https://github.com/alexdiliberto/ember-transformicons/issues/55) from alexdiliberto/greenkeeper/ember-source-2.14.0
* Merge pull request [#53](https://github.com/alexdiliberto/ember-transformicons/issues/53) from alexdiliberto/greenkeeper/ember-native-dom-helpers-0.5.2
* Merge pull request [#51](https://github.com/alexdiliberto/ember-transformicons/issues/51) from alexdiliberto/greenkeeper/ember-cli-sass-7.0.0
* Merge pull request [#50](https://github.com/alexdiliberto/ember-transformicons/issues/50) from alexdiliberto/greenkeeper/ember-percy-1.2.13
* Merge pull request [#49](https://github.com/alexdiliberto/ember-transformicons/issues/49) from alexdiliberto/greenkeeper/chalk-2.0.1
* Merge pull request [#46](https://github.com/alexdiliberto/ember-transformicons/issues/46) from alexdiliberto/greenkeeper/loader.js-4.5.1
* Merge pull request [#45](https://github.com/alexdiliberto/ember-transformicons/issues/45) from alexdiliberto/greenkeeper/ember-cli-eslint-4.0.0


<a name="v1.0.2"></a>
## [v1.0.2](https://github.com/alexdiliberto/ember-transformicons/compare/v1.0.1...v1.0.2) (2017-06-17)

### Bug Fixes

* **package:** update ember-cli-htmlbars to version 2.0.1

### Chore

* pin loader.js to 4.4.1
* **package:** update ember-cli-addon-tests to version 0.7.0
* **package:** update ember-percy to version 1.2.12
* **package:** update ember-exam to version 0.7.0
* **package:** update ember-native-dom-helpers to version 0.4.1
* **package:** update ember-cli-dependency-checker to version 2.0.0
* **package:** update ember-percy to version 1.2.11
* **package:** update ember-native-dom-helpers to version 0.4.2
* **package:** update ember-native-dom-helpers to version 0.4.0
* **package:** update ember-percy to version 1.2.10
* **package:** update ember-native-dom-helpers to version 0.3.12
* **package:** update ember-source to version 2.13.0
* **package:** update ember-native-dom-helpers to version 0.3.10
* **package:** update ember-percy to version 1.2.9

### Pull Requests

* Merge pull request [#44](https://github.com/alexdiliberto/ember-transformicons/issues/44) from alexdiliberto/greenkeeper/loader.js-pin-4.4.1
* Merge pull request [#42](https://github.com/alexdiliberto/ember-transformicons/issues/42) from alexdiliberto/greenkeeper/ember-native-dom-helpers-0.4.2
* Merge pull request [#41](https://github.com/alexdiliberto/ember-transformicons/issues/41) from alexdiliberto/greenkeeper/ember-percy-1.2.12
* Merge pull request [#40](https://github.com/alexdiliberto/ember-transformicons/issues/40) from alexdiliberto/greenkeeper/ember-exam-0.7.0
* Merge pull request [#36](https://github.com/alexdiliberto/ember-transformicons/issues/36) from alexdiliberto/greenkeeper/ember-native-dom-helpers-0.4.1
* Merge pull request [#33](https://github.com/alexdiliberto/ember-transformicons/issues/33) from alexdiliberto/greenkeeper/ember-cli-htmlbars-2.0.1
* Merge pull request [#32](https://github.com/alexdiliberto/ember-transformicons/issues/32) from alexdiliberto/greenkeeper/ember-cli-dependency-checker-2.0.0
* Merge pull request [#31](https://github.com/alexdiliberto/ember-transformicons/issues/31) from alexdiliberto/greenkeeper/ember-percy-1.2.11
* Merge pull request [#28](https://github.com/alexdiliberto/ember-transformicons/issues/28) from alexdiliberto/greenkeeper/ember-cli-addon-tests-0.7.0
* Merge pull request [#26](https://github.com/alexdiliberto/ember-transformicons/issues/26) from alexdiliberto/greenkeeper/ember-native-dom-helpers-0.4.0
* Merge pull request [#24](https://github.com/alexdiliberto/ember-transformicons/issues/24) from alexdiliberto/greenkeeper/ember-percy-1.2.10
* Merge pull request [#23](https://github.com/alexdiliberto/ember-transformicons/issues/23) from alexdiliberto/greenkeeper/ember-native-dom-helpers-0.3.12
* Merge pull request [#21](https://github.com/alexdiliberto/ember-transformicons/issues/21) from alexdiliberto/greenkeeper/ember-source-2.13.0
* Merge pull request [#20](https://github.com/alexdiliberto/ember-transformicons/issues/20) from alexdiliberto/greenkeeper/ember-native-dom-helpers-0.3.10
* Merge pull request [#19](https://github.com/alexdiliberto/ember-transformicons/issues/19) from alexdiliberto/greenkeeper/ember-percy-1.2.9


<a name="v1.0.1"></a>
## [v1.0.1](https://github.com/alexdiliberto/ember-transformicons/compare/v1.0.0...v1.0.1) (2017-04-13)

### Chore

* **package:** update ember-native-dom-helpers to version 0.3.8
* **package:** update ember-native-dom-helpers to version 0.3.7
* **package:** update ember-native-dom-helpers to version 0.3.6
* **package:** update ember-cli-content-security-policy to version 0.6.1
* **package:** update ember-load-initializers to version 1.0.0
* **package:** update ember-resolver to version 4.0.0
* **package:** update ember-native-dom-helpers to version 0.3.5
* **package:** update ember-export-application-global to version 2.0.0
* **package:** update dependencies

### Docs

* **readme:** add Greenkeeper badge

### Pull Requests

* Merge pull request [#13](https://github.com/alexdiliberto/ember-transformicons/issues/13) from alexdiliberto/greenkeeper/ember-native-dom-helpers-0.3.8
* Merge pull request [#12](https://github.com/alexdiliberto/ember-transformicons/issues/12) from alexdiliberto/greenkeeper/ember-native-dom-helpers-0.3.7
* Merge pull request [#11](https://github.com/alexdiliberto/ember-transformicons/issues/11) from alexdiliberto/greenkeeper/ember-native-dom-helpers-0.3.6
* Merge pull request [#10](https://github.com/alexdiliberto/ember-transformicons/issues/10) from alexdiliberto/greenkeeper/ember-cli-content-security-policy-0.6.1
* Merge pull request [#8](https://github.com/alexdiliberto/ember-transformicons/issues/8) from alexdiliberto/greenkeeper/ember-resolver-4.0.0
* Merge pull request [#9](https://github.com/alexdiliberto/ember-transformicons/issues/9) from alexdiliberto/greenkeeper/ember-load-initializers-1.0.0
* Merge pull request [#6](https://github.com/alexdiliberto/ember-transformicons/issues/6) from alexdiliberto/greenkeeper/ember-export-application-global-2.0.0
* Merge pull request [#7](https://github.com/alexdiliberto/ember-transformicons/issues/7) from alexdiliberto/greenkeeper/ember-native-dom-helpers-0.3.5
* Merge pull request [#5](https://github.com/alexdiliberto/ember-transformicons/issues/5) from alexdiliberto/greenkeeper/initial


<a name="v1.0.0"></a>
## [v1.0.0](https://github.com/alexdiliberto/ember-transformicons/compare/v0.9.0...v1.0.0) (2017-03-22)


<a name="v0.9.0"></a>
## [v0.9.0](https://github.com/alexdiliberto/ember-transformicons/compare/v0.8.1...v0.9.0) (2017-03-09)


<a name="v0.8.1"></a>
## [v0.8.1](https://github.com/alexdiliberto/ember-transformicons/compare/v0.8.0...v0.8.1) (2017-01-03)


<a name="v0.8.0"></a>
## [v0.8.0](https://github.com/alexdiliberto/ember-transformicons/compare/v0.7.0...v0.8.0) (2016-11-11)


<a name="v0.7.0"></a>
## [v0.7.0](https://github.com/alexdiliberto/ember-transformicons/compare/v0.6.0...v0.7.0) (2016-11-02)


<a name="v0.6.0"></a>
## [v0.6.0](https://github.com/alexdiliberto/ember-transformicons/compare/v0.5.0...v0.6.0) (2015-10-24)


<a name="v0.5.0"></a>
## [v0.5.0](https://github.com/alexdiliberto/ember-transformicons/compare/v0.4.0...v0.5.0) (2015-10-17)


<a name="v0.4.0"></a>
## [v0.4.0](https://github.com/alexdiliberto/ember-transformicons/compare/v0.3.2...v0.4.0) (2015-09-19)


<a name="v0.3.2"></a>
## [v0.3.2](https://github.com/alexdiliberto/ember-transformicons/compare/v0.3.1...v0.3.2) (2015-07-10)


<a name="v0.3.1"></a>
## [v0.3.1](https://github.com/alexdiliberto/ember-transformicons/compare/v0.3.0...v0.3.1) (2015-07-10)


<a name="v0.3.0"></a>
## [v0.3.0](https://github.com/alexdiliberto/ember-transformicons/compare/v0.2.0...v0.3.0) (2015-04-30)


<a name="v0.2.0"></a>
## [v0.2.0](https://github.com/alexdiliberto/ember-transformicons/compare/v0.1.3...v0.2.0) (2015-03-25)


<a name="v0.1.3"></a>
## [v0.1.3](https://github.com/alexdiliberto/ember-transformicons/compare/v0.1.2...v0.1.3) (2015-03-11)

### Pull Requests

* Merge pull request [#1](https://github.com/alexdiliberto/ember-transformicons/issues/1) from gitter-badger/gitter-badge


<a name="v0.1.2"></a>
## [v0.1.2](https://github.com/alexdiliberto/ember-transformicons/compare/v0.1.1...v0.1.2) (2015-02-16)


<a name="v0.1.1"></a>
## [v0.1.1](https://github.com/alexdiliberto/ember-transformicons/compare/v0.1.0...v0.1.1) (2015-02-15)


<a name="v0.1.0"></a>
## [v0.1.0](https://github.com/alexdiliberto/ember-transformicons/compare/v0.0.2...v0.1.0) (2015-02-13)


<a name="v0.0.2"></a>
## [v0.0.2](https://github.com/alexdiliberto/ember-transformicons/compare/v0.0.1...v0.0.2) (2015-02-12)


<a name="v0.0.1"></a>
## v0.0.1 (2015-02-11)

