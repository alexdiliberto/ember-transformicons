import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';
import { run } from '../helpers/common';

var application;

module('Acceptance: TPlus', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    run(application, 'destroy');
  }
});

test('Toggle the default {{t-plus}} component', function(assert) {
  assert.expect(2);

  visit('/');

  var $defaultAddRemove = find('#plus-default');

  assert.equal($defaultAddRemove.hasClass('tcon-transform'), false);
  $defaultAddRemove.click();
  andThen(function() {
    assert.equal($defaultAddRemove.hasClass('tcon-transform'), true);
  });
});

test('Verify default {{t-plus}} component has correct template', function(assert) {
  assert.expect(1);

  visit('/');

  var $defaultAddRemove = find('#plus-default');

  assert.equal($defaultAddRemove.find('span.tcon-visuallyhidden').text(), 'add item');
});
