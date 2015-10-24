import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';
import { run } from '../helpers/common';

module('Acceptance | t menu', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    run(this.application, 'destroy');
  }
});

test('visiting /menu', function(assert) {
  assert.expect(1);

  visit('/menu');
  andThen(() => {
    assert.equal(currentPath(), 'menu');
  });
});

test('Toggle the default {{t-menu}} component', function(assert) {
  let $defaultMenu;

  assert.expect(2);

  visit('/menu');
  andThen(() => {
    $defaultMenu = find('#menu-default');

    assert.equal($defaultMenu.hasClass('tcon-transform'), false);
    $defaultMenu.click();
  });
  andThen(() => {
    assert.equal($defaultMenu.hasClass('tcon-transform'), true);
  });
});

test('Verify default {{t-menu}} component has correct template', function(assert) {
  assert.expect(2);

  visit('/menu');
  andThen(() => {
    let $defaultMenu = find('#menu-default');

    assert.equal($defaultMenu.find('span.tcon-menu__lines').attr('aria-hidden'), 'true');
    assert.equal($defaultMenu.find('span.tcon-visuallyhidden').text(), 'toggle menu');
  });
});
