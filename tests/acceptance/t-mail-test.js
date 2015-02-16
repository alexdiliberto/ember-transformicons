import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';
import { run } from '../helpers/common';

var application;

module('Acceptance: TMail', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    run(application, 'destroy');
  }
});

test('Toggle the default {{t-mail}} component', function(assert) {
  assert.expect(2);

  visit('/mail');

  var $defaultMail = find('#mail-default');

  assert.equal($defaultMail.hasClass('tcon-transform'), false);
  $defaultMail.click();
  andThen(function() {
    assert.equal($defaultMail.hasClass('tcon-transform'), true);
  });
});

test('Verify default {{t-mail}} component has correct template', function(assert) {
  assert.expect(2);

  visit('/mail');

  var $defaultMail = find('#mail-default');

  assert.equal($defaultMail.find('span.tcon-mail--envelope__flap').attr('aria-hidden'), 'true');
  assert.equal($defaultMail.find('span.tcon-visuallyhidden').text(), 'open mailbox');
});
