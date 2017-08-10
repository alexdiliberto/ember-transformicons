'use strict';

const expect = require('chai').expect;
const denodeify = require('denodeify');
const request = denodeify(require('request'));
const AddonTestApp = require('ember-cli-addon-tests').AddonTestApp;
const chalk = require('chalk');
const ui = new(require('console-ui'))({
  outputStream: process.stdout
});

const FASTBOOT_VERSION = '^1.0.2';

describe('Acceptance | consuming fastboot app', function() {
  this.timeout(300000);

  let app;

  before(function() {
    app = new AddonTestApp();

    ui.startProgress(chalk.green('Creating dummy app'));
    return app.create('fastboot-app')
      .then(() => {
        ui.stopProgress();
        ui.startProgress(chalk.green(`Running ember install ember-cli-fastboot@${FASTBOOT_VERSION}`));
        return app.runEmberCommand(
          'install',
          `ember-cli-fastboot@${FASTBOOT_VERSION}`
        );
      })
      .then(() => {
        ui.stopProgress();
      });
  });

  after(function() {
    return app.stopServer();
  });

  it('/ renders the `{{t-menu a="arrow-left"}}` component from `application.hbs`', function() {
    return app.startServer()
      .then(() => {
        return request({
          url: 'http://localhost:49741',
          headers: {
            // We have to send the `Accept` header so the ember-cli server sees this as a request to `index.html` and sets
            // `req.serveUrl`, that ember-cli-fastboot needs in its middleware
            // See https://github.com/ember-cli/ember-cli/blob/86a903f/lib/tasks/server/middleware/history-support/index.js#L55
            // and https://github.com/ember-fastboot/ember-cli-fastboot/blob/28213e0/index.js#L160
            'Accept': 'text/html'
          }
        });
      })
      .then((response) => {
        expect(response.statusCode).to.equal(200);
        expect(response.headers['content-type'].toLowerCase()).to.eq('text/html; charset=utf-8');
        expect(response.body).to.contain('<h1>fastboot application template</h1>');
        expect(response.body).to.contain('t-menu transformicon =');
        expect(response.body).to.contain('tcon-menu--arrow tcon-menu--arrowleft');
      });
  });
});
