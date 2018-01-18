import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { percySnapshot } from 'ember-percy';

module('Integration | Component | t grid', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);

    await render(hbs`{{t-grid}}`);

    assert.equal(this.element.querySelector('button').textContent.trim(), 'toggle grid');

    // Template block usage:
    await render(hbs`
      {{#t-grid}}
        template block text
      {{/t-grid}}
    `);

    assert.equal(this.element.querySelector('button').textContent.trim(), 'toggle grid');
  });

  test('it creates a grid transformicon with defaults', async function(assert) {
    assert.expect(6);

    await render(hbs`{{t-grid}}`);
    percySnapshot(assert);

    let button = this.element.querySelector('button');

    assert.equal(button.getAttribute('type'), 'button');
    assert.equal(button.getAttribute('aria-label'), 'toggle grid');
    assert.ok(button.classList.contains('tcon'));
    assert.ok(button.classList.contains('tcon-grid'));
    assert.ok(button.classList.contains('tcon-grid--rearrange'));
    assert.notOk(button.classList.contains('tcon-transform'));
  });

  test('it creates a grid transformicon with `is-open=true`', async function(assert) {
    assert.expect(1);

    await render(hbs`{{t-grid is-open=true}}`);
    percySnapshot(assert);

    let button = this.element.querySelector('button');

    assert.ok(button.classList.contains('tcon-transform'));
  });

  test('it creates a grid transformicon with a non-default animation `a="collapse"`', async function(assert) {
    assert.expect(1);

    await render(hbs`{{t-grid a="collapse"}}`);

    let button = this.element.querySelector('button');

    assert.ok(button.classList.contains('tcon-grid--collapse'));
  });

  test('user can click on the transformicon', async function(assert) {
    assert.expect(2);

    await render(hbs`{{t-grid id="t-grid"}}`);

    let button = this.element.querySelector('#t-grid');
    assert.equal(button.classList.contains('tcon-transform'), false);

    await click('#t-grid');
    percySnapshot(assert);

    assert.equal(button.classList.contains('tcon-transform'), true);
  });
});
