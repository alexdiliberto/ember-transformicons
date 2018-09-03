import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | t scroll', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);

    await render(hbs`
      <TScroll />
    `);

    assert.dom('span').hasText('');

    // Template block usage:
    await render(hbs`
      <TScroll>
        template block text
      </TScroll>
    `);

    assert.dom('span').hasText('');
  });

  test('it creates a scroll indicator transformicon with defaults', async function(assert) {
    assert.expect(5);

    await render(hbs`
      <TScroll />
    `);

    assert.dom('span').hasAttribute('aria-label', 'scroll');
    assert.dom('span').hasAttribute('aria-hidden', 'true');
    assert.dom('span').hasClass('tcon-indicator');
    assert.dom('svg').hasClass('tcon-svgchevron');
    assert.dom('path').exists({ count: 3 });
  });
});
