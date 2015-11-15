import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | t mail');

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
