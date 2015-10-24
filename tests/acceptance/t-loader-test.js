import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';
import { run } from '../helpers/common';

module('Acceptance | t loader', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    run(this.application, 'destroy');
  }
});

test('visiting /loader', function(assert) {
  assert.expect(1);

  visit('/loader');
  andThen(() => {
    assert.equal(currentPath(), 'loader');
  });
});

test('Verify default {{t-loader}} component has correct template', function(assert) {
  assert.expect(1);

  visit('/loader');
  andThen(() => {
    let $defaultLoader = find('#loader-default');

    assert.equal($defaultLoader.find('span.tcon-visuallyhidden').text(), 'loading');
  });
});
