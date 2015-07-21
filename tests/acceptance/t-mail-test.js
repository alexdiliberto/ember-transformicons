import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';
import { run } from '../helpers/common';

var application;

module('Acceptance | t mail', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    run(application, 'destroy');
  }
});

test('visiting /mail', function(assert) {
  assert.expect(1);

  visit('/mail');
  andThen(() => {
    assert.equal(currentPath(), 'mail');
  });
});

test('Toggle the default {{t-mail}} component', function(assert) {
  let $defaultMail;

  assert.expect(2);

  visit('/mail');
  andThen(() => {
    $defaultMail = find('#mail-default');

    assert.equal($defaultMail.hasClass('tcon-transform'), false);
    $defaultMail.click();
  });
  andThen(() => {
    assert.equal($defaultMail.hasClass('tcon-transform'), true);
  });
});

test('Verify default {{t-mail}} component has correct template', function(assert) {
  assert.expect(2);

  visit('/mail');
  andThen(() => {
    let $defaultMail = find('#mail-default');

    assert.equal($defaultMail.find('span.tcon-mail--envelope__flap').attr('aria-hidden'), 'true');
    assert.equal($defaultMail.find('span.tcon-visuallyhidden').text(), 'open mailbox');
  });
});
