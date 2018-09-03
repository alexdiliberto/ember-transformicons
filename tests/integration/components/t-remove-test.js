import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { percySnapshot } from 'ember-percy';

module('Integration | Component | t remove', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);

    await render(hbs`
      <TRemove />
    `);

    assert.dom('button').hasText('remove item');

    // Template block usage:
    await render(hbs`
      <TRemove>
        template block text
      </TRemove>
    `);

    assert.dom('button').hasText('remove item');
  });

  test('it creates a remove transformicon with defaults', async function(assert) {
    assert.expect(5);

    await render(hbs`
      <TRemove />
    `);
    percySnapshot(assert);

    assert.dom('button').hasAttribute('type', 'button');
    assert.dom('button').hasAttribute('aria-label', 'remove item');
    assert.dom('button').hasClass('tcon-remove');
    assert.dom('button').hasClass('tcon-remove--check');
    assert.dom('button').hasNoClass('tcon-transform');
  });

  test('it creates a remove transformicon with `is-removed=true`', async function(assert) {
    assert.expect(1);

    await render(hbs`
      <TRemove @is-removed={{true}} />
    `);
    percySnapshot(assert);

    assert.dom('button').hasClass('tcon-transform');
  });

  test('it creates a remove transformicon with a non-default animation `a="chevron-right"`', async function(assert) {
    assert.expect(1);

    await render(hbs`
      <TRemove @a="chevron-right" />
    `);

    assert.dom('button').hasClass('tcon-remove--chevron-right');
  });

  test('user can click on the transformicon', async function(assert) {
    assert.expect(2);

    // FIXME: https://github.com/rwjblue/ember-angle-bracket-invocation-polyfill/issues/4#issue-328822657
    // Currently necessary to use `<TAdd @id="t-add" />` syntax when specifying an `id` but the `aid` prefix shouldn't be necessary -- should be able to say `<TAdd @id="t-add" />`. Fix after this issue is closed.
    await render(hbs`
      <TRemove @id="t-remove" />
    `);

    assert.dom('#t-remove').hasNoClass('tcon-transform');

    await click('#t-remove');
    percySnapshot(assert);

    assert.dom('#t-remove').hasClass('tcon-transform');
  });
});
