'use strict';

const expect = require('chai').expect;
const denodeify = require('denodeify');
const request = denodeify(require('request'));
const AddonTestApp = require('ember-cli-addon-tests').AddonTestApp;
const chalk = require('chalk');
const ui = new(require('console-ui'))({
  outputStream: process.stdout
});

describe('Acceptance | consuming non-fastboot app', function() {
  this.timeout(300000);

  let app;

  before(function() {
    app = new AddonTestApp();

    ui.startProgress(chalk.green('Creating dummy app'));
    return app.create('non-fastboot-app')
      .then(() => {
        ui.stopProgress();
        return app.startServer();
      });
  });

  after(function() {
    return app.stopServer();
  });

  it('/assets/non-fastboot-app.js includes all `ember-cli-transformicons` exported `app` modules', function() {
    return request('http://localhost:49741/assets/non-fastboot-app.js')
      .then((response) => {
        expect(response.statusCode).to.equal(200);
        expect(response.headers['content-type']).to.eq('application/javascript; charset=UTF-8');
        expect(response.body).to.include('non-fastboot-app/components/t-add');
        expect(response.body).to.include('non-fastboot-app/components/t-form');
        expect(response.body).to.include('non-fastboot-app/components/t-grid');
        expect(response.body).to.include('non-fastboot-app/components/t-loader');
        expect(response.body).to.include('non-fastboot-app/components/t-mail');
        expect(response.body).to.include('non-fastboot-app/components/t-menu');
        expect(response.body).to.include('non-fastboot-app/components/t-remove');
        expect(response.body).to.include('non-fastboot-app/components/t-scroll');
        expect(response.body).to.include('non-fastboot-app/components/t-video');
      });
  });

  it('/assets/non-fastboot-app.js includes the `{{t-menu a="arrow-left"}}` component', function() {
    return request('http://localhost:49741/assets/non-fastboot-app.js')
      .then((response) => {
        expect(response.statusCode).to.equal(200);
        expect(response.headers['content-type']).to.eq('application/javascript; charset=UTF-8');
        expect(response.body).to.include('non-fastboot-app/templates/application');
        expect(response.body).to.include('arrow-left');
      });
  });
});
