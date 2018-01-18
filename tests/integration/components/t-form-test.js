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

    assert.equal(this.element.querySelector('button').textContent.trim(), 'toggle search');

    // Template block usage:
    await render(hbs`
      {{#t-form}}
        template block text
      {{/t-form}}
    `);

    assert.equal(this.element.querySelector('button').textContent.trim(), 'toggle search');
  });

  test('it creates a form transformicon with defaults', async function(assert) {
    assert.expect(5);

    await render(hbs`{{t-form}}`);
    percySnapshot(assert);

    let button = this.element.querySelector('button');

    assert.equal(button.getAttribute('type'), 'button');
    assert.equal(button.getAttribute('aria-label'), 'toggle search');
    assert.ok(button.classList.contains('tcon'));
    assert.ok(button.classList.contains('tcon-search--xcross'));
    assert.notOk(button.classList.contains('tcon-transform'));
  });

  test('it creates a form transformicon with `is-searching=true`', async function(assert) {
    assert.expect(1);

    await render(hbs`{{t-form is-searching=true}}`);
    percySnapshot(assert);

    let button = this.element.querySelector('button');

    assert.ok(button.classList.contains('tcon-transform'));
  });

  test('user can click on the transformicon', async function(assert) {
    assert.expect(2);

    await render(hbs`{{t-form id="t-form"}}`);

    let button = this.element.querySelector('#t-form');
    assert.equal(button.classList.contains('tcon-transform'), false);

    await click('#t-form');
    percySnapshot(assert);

    assert.equal(button.classList.contains('tcon-transform'), true);
  });
});
