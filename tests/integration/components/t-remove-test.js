import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { percySnapshot } from 'ember-percy';

module('Integration | Component | t remove', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);

    await render(hbs`{{t-remove}}`);

    assert.equal(this.element.querySelector('button').textContent.trim(), 'remove item');

    // Template block usage:
    await render(hbs`
      {{#t-remove}}
        template block text
      {{/t-remove}}
    `);

    assert.equal(this.element.querySelector('button').textContent.trim(), 'remove item');
  });

  test('it creates a remove transformicon with defaults', async function(assert) {
    assert.expect(5);

    await render(hbs`{{t-remove}}`);
    percySnapshot(assert);

    let button = this.element.querySelector('button');

    assert.equal(button.getAttribute('type'), 'button');
    assert.equal(button.getAttribute('aria-label'), 'remove item');
    assert.ok(button.classList.contains('tcon-remove'));
    assert.ok(button.classList.contains('tcon-remove--check'));
    assert.notOk(button.classList.contains('tcon-transform'));
  });

  test('it creates a remove transformicon with `is-removed=true`', async function(assert) {
    assert.expect(1);

    await render(hbs`{{t-remove is-removed=true}}`);
    percySnapshot(assert);

    let button = this.element.querySelector('button');

    assert.ok(button.classList.contains('tcon-transform'));
  });

  test('it creates a remove transformicon with a non-default animation `a="chevron-right"`', async function(assert) {
    assert.expect(1);

    await render(hbs`{{t-remove a="chevron-right"}}`);

    let button = this.element.querySelector('button');

    assert.ok(button.classList.contains('tcon-remove--chevron-right'));
  });

  test('user can click on the transformicon', async function(assert) {
    assert.expect(2);

    await render(hbs`{{t-remove id="t-remove"}}`);

    let button = this.element.querySelector('#t-remove');
    assert.equal(button.classList.contains('tcon-transform'), false);

    await click('#t-remove');
    percySnapshot(assert);

    assert.equal(button.classList.contains('tcon-transform'), true);
  });
});
