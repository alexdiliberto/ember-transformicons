import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | t form');

test('visiting /t-form', function(assert) {
  assert.expect(1);

  visit('/form');
  andThen(function() {
    assert.equal(currentPath(), 'form');
  });
});

test('Toggle the default {{t-form}} component', function(assert) {
  let $defaultForm;

  assert.expect(2);

  visit('/form');
  andThen(() => {
    $defaultForm = find('#form-default');

    assert.equal($defaultForm.hasClass('tcon-transform'), false);
    $defaultForm.click();
  });
  andThen(function() {
    assert.equal($defaultForm.hasClass('tcon-transform'), true);
  });
});

test('Verify default {{t-form}} component has correct template', function(assert) {
  assert.expect(2);

  visit('/form');
  andThen(() => {
    let $defaultForm = find('#form-default');

    assert.equal($defaultForm.find('span.tcon-search__item').attr('aria-hidden'), 'true');
    assert.equal($defaultForm.find('span.tcon-visuallyhidden').text(), 'toggle search');
  });
});
