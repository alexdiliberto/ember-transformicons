import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

/* eslint-disable array-callback-return */
Router.map(function() {
  this.route('menu');
  this.route('grid');
  this.route('add');
  this.route('remove');
  this.route('scroll');
  this.route('mail');
  this.route('form');
  this.route('video');
  this.route('loader');
});

export default Router;
