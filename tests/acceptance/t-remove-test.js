import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';
import { run } from '../helpers/common';

var application;

module('Acceptance: TRemove', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    run(application, 'destroy');
  }
});

test('Toggle the default {{t-remove}} component', function(assert) {
  assert.expect(2);

  visit('/remove');

  var $defaultRemove = find('#remove-default');

  assert.equal($defaultRemove.hasClass('tcon-transform'), false);
  $defaultRemove.click();
  andThen(function() {
    assert.equal($defaultRemove.hasClass('tcon-transform'), true);
  });
});

test('Verify default {{t-remove}} component has correct template', function(assert) {
  assert.expect(1);

  visit('/remove');

  var $defaultRemove = find('#remove-default');

  assert.equal($defaultRemove.find('span.tcon-visuallyhidden').text(), 'remove item');
});
