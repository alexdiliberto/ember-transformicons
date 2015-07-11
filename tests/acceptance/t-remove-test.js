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

test('visiting /remove', function(assert) {
  assert.expect(1);

  visit('/remove');
  andThen(() => {
    assert.equal(currentPath(), 'remove');
  });
});

test('Toggle the default {{t-remove}} component', function(assert) {
  let $defaultRemove;

  assert.expect(2);

  visit('/remove');
  andThen(() => {
    $defaultRemove = find('#remove-default');

    assert.equal($defaultRemove.hasClass('tcon-transform'), false);
    $defaultRemove.click();
  });
  andThen(() => {
    assert.equal($defaultRemove.hasClass('tcon-transform'), true);
  });
});

test('Verify default {{t-remove}} component has correct template', function(assert) {
  assert.expect(1);

  visit('/remove');
  andThen(() => {
    let $defaultRemove = find('#remove-default');

    assert.equal($defaultRemove.find('span.tcon-visuallyhidden').text(), 'remove item');
  });
});
