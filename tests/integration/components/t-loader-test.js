import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | t loader', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    assert.expect(2);

    await render(hbs`
      <TLoader />
    `);

    assert.dom('span').hasText('loading');

    // Template block usage:
    await render(hbs`
      <TLoader>
        template block text
      </TLoader>
    `);

    assert.dom('span').hasText('loading');
  });

  test('it creates a loader transformicon with defaults', async function (assert) {
    assert.expect(2);

    await render(hbs`
      <TLoader />
    `);

    assert.dom('span').hasAttribute('aria-label', 'loading');
    assert.dom('span').hasClass('tcon-loader--spinner360');
  });
});
