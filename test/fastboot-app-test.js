var expect = require('chai').expect;
var RSVP = require('rsvp');
var request = RSVP.denodeify(require('request'));
var AddonTestApp = require('ember-cli-addon-tests').AddonTestApp;
var chalk = require('chalk');
var ui = new (require('console-ui'))({
  outputStream: process.stdout
});

describe('Acceptance | consuming fastboot app', function() {
  this.timeout(300000);

  var app;

  before(function() {
    app = new AddonTestApp();

    ui.startProgress(chalk.green('Creating dummy app'));
    return app.create('fastboot-app')
      .then(function() {
        ui.stopProgress();
        ui.startProgress(chalk.green('Running `ember install ember-cli-fastboot`'));
        return app.runEmberCommand('install', 'ember-cli-fastboot');
      })
      .then(function() {
        /*
         FIXME: Remove in the future. This is a temporary workaround for the following issue:

            https://github.com/tomdale/ember-cli-addon-tests/issues/49

         See:
          https://github.com/simplabs/ember-simple-auth/pull/1198#issuecomment-277700447
          https://github.com/simplabs/ember-simple-auth/pull/1198/commits/ee7cdf4688c676deb50098fa0fef1fc5a6c039c8
          https://github.com/tomdale/ember-cli-addon-tests/issues/49#issuecomment-280636490
        */
        ui.stopProgress();
        ui.startProgress(chalk.green('Running `ember build`'));
        return app.runEmberCommand('build');
      })
      .then(function() {
        ui.stopProgress();
        return app.startServer({
          command: 'fastboot'
        });
      });
  });

  after(function() {
    return app.stopServer();
  });

  it('/ renders the `{{t-menu a="arrow-left"}}` component from `application.hbs`', function() {
    return request('http://localhost:49741/')
      .then(function(response) {
        expect(response.statusCode).to.equal(200);
        expect(response.headers["content-type"].toLowerCase()).to.eq("text/html; charset=utf-8");
        expect(response.body).to.contain("<h1>fastboot application template</h1>");
        expect(response.body).to.contain("t-menu transformicon =");
        expect(response.body).to.contain("tcon-menu--arrow tcon-menu--arrowleft");
      });
  });
});
