import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';
import { run } from '../helpers/common';

var application;

module('Acceptance: TMenu', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    run(application, 'destroy');
  }
});

test('Toggle the default {{t-menu}} component', function(assert) {
  assert.expect(2);

  visit('/');

  var $defaultMenu = find('#menu-default');

  assert.equal($defaultMenu.hasClass('tcon-transform'), false);
  $defaultMenu.click();
  andThen(function() {
    assert.equal($defaultMenu.hasClass('tcon-transform'), true);
  });
});

test('Verify default {{t-menu}} component has correct template', function(assert) {
  assert.expect(2);

  visit('/');

  var $defaultMenu = find('#menu-default');

  assert.equal($defaultMenu.find('span.tcon-menu__lines').attr('aria-hidden'), 'true');
  assert.equal($defaultMenu.find('span.tcon-visuallyhidden').text(), 'toggle menu');
});
