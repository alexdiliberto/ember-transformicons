var expect = require('chai').expect;
var RSVP = require('rsvp');
var request = RSVP.denodeify(require('request'));
var AddonTestApp = require('ember-cli-addon-tests').AddonTestApp;

describe('consuming non-fastboot app acceptance', function() {
  this.timeout(300000);

  var app;

  before(function() {
    app = new AddonTestApp();

    return app.create('non-fastboot-app', { emberVersion: 'release', fixturesPath: 'addon-tests/fixtures' })
      .then(function() {
        return app.startServer();
      });
  });

  after(function() {
    return app.stopServer();
  });

  it('/assets/non-fastboot-app.js includes all `ember-cli-transformicons` exported `app` modules', function() {
    return request('http://localhost:49741/assets/non-fastboot-app.js')
      .then(function(response) {
        expect(response.statusCode).to.equal(200);
        expect(response.headers["content-type"]).to.eq("application/javascript");
        expect(response.body).to.include("non-fastboot-app/components/t-add");
        expect(response.body).to.include("non-fastboot-app/components/t-form");
        expect(response.body).to.include("non-fastboot-app/components/t-grid");
        expect(response.body).to.include("non-fastboot-app/components/t-loader");
        expect(response.body).to.include("non-fastboot-app/components/t-mail");
        expect(response.body).to.include("non-fastboot-app/components/t-menu");
        expect(response.body).to.include("non-fastboot-app/components/t-remove");
        expect(response.body).to.include("non-fastboot-app/components/t-scroll");
        expect(response.body).to.include("non-fastboot-app/components/t-video");
      });
  });

  it('/assets/non-fastboot-app.js includes the `{{t-menu a="arrow-left"}}` component', function() {
    return request('http://localhost:49741/assets/non-fastboot-app.js')
      .then(function(response) {
        expect(response.statusCode).to.equal(200);
        expect(response.headers["content-type"]).to.eq("application/javascript");
        expect(response.body).to.include("non-fastboot-app/templates/application");
        expect(response.body).to.include("arrow-left");
      });
  });
});
