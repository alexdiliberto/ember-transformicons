import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { percySnapshot } from 'ember-percy';

module('Integration | Component | t grid', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);

    await render(hbs`
      <TGrid />
    `);

    assert.dom('button').hasText('toggle grid');

    // Template block usage:
    await render(hbs`
      <TGrid>
        template block text
      </TGrid>
    `);

    assert.dom('button').hasText('toggle grid');
  });

  test('it creates a grid transformicon with defaults', async function(assert) {
    assert.expect(6);

    await render(hbs`
      <TGrid />
    `);
    percySnapshot(assert);

    assert.dom('button').hasAttribute('type', 'button');
    assert.dom('button').hasAttribute('aria-label', 'toggle grid');
    assert.dom('button').hasClass('tcon');
    assert.dom('button').hasClass('tcon-grid');
    assert.dom('button').hasClass('tcon-grid--rearrange');
    assert.dom('button').hasNoClass('tcon-transform');
  });

  test('it creates a grid transformicon with `is-open=true`', async function(assert) {
    assert.expect(1);

    await render(hbs`
      <TGrid @is-open={{true}} />
    `);
    percySnapshot(assert);

    assert.dom('button').hasClass('tcon-transform');
  });

  test('it creates a grid transformicon with a non-default animation `a="collapse"`', async function(assert) {
    assert.expect(1);

    await render(hbs`
      <TGrid @a="collapse" />
    `);

    assert.dom('button').hasClass('tcon-grid--collapse');
  });

  test('user can click on the transformicon', async function(assert) {
    assert.expect(2);

    // FIXME: https://github.com/rwjblue/ember-angle-bracket-invocation-polyfill/issues/4#issue-328822657
    // Currently necessary to use `<TAdd @id="t-add" />` syntax when specifying an `id` but the `aid` prefix shouldn't be necessary -- should be able to say `<TAdd @id="t-add" />`. Fix after this issue is closed.
    await render(hbs`
      <TGrid @id="t-grid" />
    `);

    assert.dom('#t-grid').hasNoClass('tcon-transform');

    await click('#t-grid');
    percySnapshot(assert);

    assert.dom('#t-grid').hasClass('tcon-transform');
  });
});
