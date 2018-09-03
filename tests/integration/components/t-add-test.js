import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { percySnapshot } from 'ember-percy';

module('Integration | Component | t add', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);

    await render(hbs`
      <TAdd />
    `);

    assert.dom('button').hasText('add item');

    // Template block usage:
    await render(hbs`
      <TAdd>
        template block text
      </TAdd>
    `);

    assert.dom('button').hasText('add item');
  });

  test('it creates an add transformicon with defaults', async function(assert) {
    assert.expect(6);

    await render(hbs`
      <TAdd />
    `);
    percySnapshot(assert);

    assert.dom('button').hasAttribute('type', 'button');
    assert.dom('button').hasAttribute('aria-label', 'add item');
    assert.dom('button').hasClass('tcon');
    assert.dom('button').hasClass('tcon-plus');
    assert.dom('button').hasClass('tcon-plus--minus');
    assert.dom('button').hasNoClass('tcon-transform');
  });

  test('it creates an add transformicon with `is-added=true`', async function(assert) {
    assert.expect(1);

    await render(hbs`
      <TAdd @is-added={{true}} />
    `);
    percySnapshot(assert);

    assert.dom('button').hasClass('tcon-transform');
  });

  test('it creates an add transformicon with a non-default animation `a="check"`', async function(assert) {
    assert.expect(1);

    await render(hbs`
      <TAdd @a="check" />
    `);

    assert.dom('button').hasClass('tcon-plus--check');
  });

  test('user can click on the transformicon', async function(assert) {
    assert.expect(2);

    // FIXME: https://github.com/rwjblue/ember-angle-bracket-invocation-polyfill/issues/4#issue-328822657
    // Currently necessary to use `<TAdd @id="t-add" />` syntax when specifying an `id` but the `aid` prefix shouldn't be necessary -- should be able to say `<TAdd @id="t-add" />`. Fix after this issue is closed.
    await render(hbs`
      <TAdd @id="t-add" />
    `);

    assert.dom('#t-add').hasNoClass('tcon-transform');

    await click('#t-add');
    percySnapshot(assert);

    assert.dom('#t-add').hasClass('tcon-transform');
  });
});
