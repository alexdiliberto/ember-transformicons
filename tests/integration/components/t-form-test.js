import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { percySnapshot } from 'ember-percy';

module('Integration | Component | t form', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);

    await render(hbs`{{t-form}}`);

    assert.dom('button').hasText('toggle search');

    // Template block usage:
    await render(hbs`
      {{#t-form}}
        template block text
      {{/t-form}}
    `);

    assert.dom('button').hasText('toggle search');
  });

  test('it creates a form transformicon with defaults', async function(assert) {
    assert.expect(5);

    await render(hbs`{{t-form}}`);
    percySnapshot(assert);

    assert.dom('button').hasAttribute('type', 'button');
    assert.dom('button').hasAttribute('aria-label', 'toggle search');
    assert.dom('button').hasClass('tcon');
    assert.dom('button').hasClass('tcon-search--xcross');
    assert.dom('button').hasNoClass('tcon-transform');
  });

  test('it creates a form transformicon with `is-searching=true`', async function(assert) {
    assert.expect(1);

    await render(hbs`{{t-form is-searching=true}}`);
    percySnapshot(assert);

    assert.dom('button').hasClass('tcon-transform');
  });

  test('user can click on the transformicon', async function(assert) {
    assert.expect(2);

    await render(hbs`{{t-form id="t-form"}}`);

    assert.dom('#t-form').hasNoClass('tcon-transform');

    await click('#t-form');
    percySnapshot(assert);

    assert.dom('#t-form').hasClass('tcon-transform');
  });
});
