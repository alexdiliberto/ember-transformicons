import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('menu');
  this.route('grid');
  this.route('add');
  this.route('remove');
  this.route('mail');
  this.route('video');
  this.route('loader');
});
