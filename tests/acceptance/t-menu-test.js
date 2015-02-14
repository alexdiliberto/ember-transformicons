import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: TMenu', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('Toggle the default {{t-menu}} component', function(assert) {
  visit('/');

  var $defaultMenu = find('#menu-default');

  assert.equal($defaultMenu.hasClass('tcon-transform'), false);
  $defaultMenu.click();
  andThen(function() {
    assert.equal($defaultMenu.hasClass('tcon-transform'), true);
  });
});
