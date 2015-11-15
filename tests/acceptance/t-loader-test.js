import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | t loader');

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
