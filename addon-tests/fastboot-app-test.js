var expect = require('chai').expect;
var RSVP = require('rsvp');
var request = RSVP.denodeify(require('request'));
var AddonTestApp = require('ember-cli-addon-tests').AddonTestApp;
var addFastbootDeps  = require('./utils/add-fastboot-deps');

describe('consuming fastboot app acceptance', function() {
  this.timeout(300000);

  var app;

  before(function() {
    app = new AddonTestApp();

    return app.create('fastboot-app', { emberVersion: 'release', fixturesPath: 'addon-tests/fixtures' })
      .then(function() {
        return addFastbootDeps(app);
      })
      .then(function() {
        return app.startServer({
          command: 'fastboot',
          additionalArguments: ['--serve-assets']
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
