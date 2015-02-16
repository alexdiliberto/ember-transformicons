import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';
import { run } from '../helpers/common';

var application;

module('Acceptance: TLoader', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    run(application, 'destroy');
  }
});

test('Verify default {{t-loader}} component has correct template', function(assert) {
  assert.expect(1);

  visit('/loader');

  var $defaultLoader = find('#loader-default');

  assert.equal($defaultLoader.find('span.tcon-visuallyhidden').text(), 'loading');
});
