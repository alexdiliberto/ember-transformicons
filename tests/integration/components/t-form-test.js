import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { percySnapshot } from 'ember-percy';

module('Integration | Component | t form', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);

    await render(hbs`
      <TForm />
    `);

    assert.dom('button').hasText('toggle search');

    // Template block usage:
    await render(hbs`
      <TForm>
        template block text
      </TForm>
    `);

    assert.dom('button').hasText('toggle search');
  });

  test('it creates a form transformicon with defaults', async function(assert) {
    assert.expect(5);

    await render(hbs`
      <TForm />
    `);
    percySnapshot(assert);

    assert.dom('button').hasAttribute('type', 'button');
    assert.dom('button').hasAttribute('aria-label', 'toggle search');
    assert.dom('button').hasClass('tcon');
    assert.dom('button').hasClass('tcon-search--xcross');
    assert.dom('button').hasNoClass('tcon-transform');
  });

  test('it creates a form transformicon with `is-searching=true`', async function(assert) {
    assert.expect(1);

    await render(hbs`
      <TForm @is-searching={{true}} />
    `);
    percySnapshot(assert);

    assert.dom('button').hasClass('tcon-transform');
  });

  test('user can click on the transformicon', async function(assert) {
    assert.expect(2);

    // FIXME: https://github.com/rwjblue/ember-angle-bracket-invocation-polyfill/issues/4#issue-328822657
    // Currently necessary to use `<TAdd @id="t-add" />` syntax when specifying an `id` but the `aid` prefix shouldn't be necessary -- should be able to say `<TAdd @id="t-add" />`. Fix after this issue is closed.
    await render(hbs`
      <TForm @id="t-form" />
    `);

    assert.dom('#t-form').hasNoClass('tcon-transform');

    await click('#t-form');
    percySnapshot(assert);

    assert.dom('#t-form').hasClass('tcon-transform');
  });
});
