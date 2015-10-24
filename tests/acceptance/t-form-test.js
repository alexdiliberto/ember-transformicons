import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';
import { run } from '../helpers/common';

module('Acceptance | t form', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    run(this.application, 'destroy');
  }
});

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
