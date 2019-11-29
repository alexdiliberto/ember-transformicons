import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';
import config from './config/environment';
import classic from 'ember-classic-decorator';

@classic
export default class Router extends AddonDocsRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

/* eslint-disable array-callback-return */
Router.map(function() {
  docsRoute(this, function() {
    this.route('transformicons', function() {
      this.route('add');
      this.route('form');
      this.route('grid');
      this.route('loader');
      this.route('mail');
      this.route('menu');
      this.route('remove');
      this.route('scroll');
      this.route('video');
    });
  });

  this.route('not-found', { path: '/*path' });
});
