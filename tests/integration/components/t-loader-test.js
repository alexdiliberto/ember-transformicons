import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | t loader', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);

    await render(hbs`{{t-loader}}`);

    assert.dom('span').hasText('loading');

    // Template block usage:
    await render(hbs`
      {{#t-loader}}
        template block text
      {{/t-loader}}
    `);

    assert.dom('span').hasText('loading');
  });

  test('it creates a loader transformicon with defaults', async function(assert) {
    assert.expect(2);

    await render(hbs`{{t-loader}}`);

    assert.dom('span').hasAttribute('aria-label', 'loading');
    assert.dom('span').hasClass('tcon-loader--spinner360');
  });
});
