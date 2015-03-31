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

test('visiting /loader', function(assert) {
  assert.expect(1);

  visit('/loader');
  andThen(() => {
    assert.equal(currentPath(), 'loader');
  });
});

test('Verify default {{t-loader}} component has correct template', function(assert) {
  assert.expect(1);

  visit('/loader');
  andThen(() => {
    let $defaultLoader = find('#loader-default');

    assert.equal($defaultLoader.find('span.tcon-visuallyhidden').text(), 'loading');
  });
});
