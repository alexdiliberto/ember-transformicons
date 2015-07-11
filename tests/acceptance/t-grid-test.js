import { module, test } from 'qunit';
import startApp from '../helpers/start-app';
import { run } from '../helpers/common';

var application;

module('Acceptance: TGrid', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    run(application, 'destroy');
  }
});

test('visiting /grid', function(assert) {
  assert.expect(1);

  visit('/grid');
  andThen(() => {
    assert.equal(currentPath(), 'grid');
  });
});

test('Toggle the default {{t-grid}} component', function(assert) {
  let $defaultGrid;

  assert.expect(2);

  visit('/grid');
  andThen(() => {
    $defaultGrid = find('#grid-default');

    assert.equal($defaultGrid.hasClass('tcon-transform'), false);
    $defaultGrid.click();
  });
  andThen(() => {
    assert.equal($defaultGrid.hasClass('tcon-transform'), true);
  });
});

test('Verify default {{t-grid}} component has correct template', function(assert) {
  assert.expect(2);

  visit('/grid');
  andThen(() => {
    let $defaultGrid = find('#grid-default');

    assert.equal($defaultGrid.find('span.tcon-grid__item').attr('aria-hidden'), 'true');
    assert.equal($defaultGrid.find('span.tcon-visuallyhidden').text(), 'toggle grid');
  });
});
