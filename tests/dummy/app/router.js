import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

/* eslint-disable array-callback-return */
Router.map(function() {
  this.route('docs', function() {
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
    this.route('api', function() {
      this.route('item', { path: '/*path' });
    });
  });

  this.route('not-found', { path: '/*path' });
});

export default Router;
