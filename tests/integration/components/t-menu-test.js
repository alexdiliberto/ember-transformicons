import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { percySnapshot } from 'ember-percy';

module('Integration | Component | t menu', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);

    await render(hbs`{{t-menu}}`);

    assert.equal(this.element.querySelector('button').textContent.trim(), 'toggle menu');

    // Template block usage:
    await render(hbs`
      {{#t-menu}}
        template block text
      {{/t-menu}}
    `);

    assert.equal(this.element.querySelector('button').textContent.trim(), 'toggle menu');
  });

  test('it creates a menu transformicon with defaults', async function(assert) {
    assert.expect(5);

    await render(hbs`{{t-menu}}`);
    percySnapshot(assert);

    let button = this.element.querySelector('button');

    assert.equal(button.getAttribute('type'), 'button');
    assert.equal(button.getAttribute('aria-label'), 'toggle menu');
    assert.ok(button.classList.contains('tcon'));
    assert.ok(button.classList.contains('tcon-menu--xbutterfly'));
    assert.notOk(button.classList.contains('tcon-transform'));
  });

  test('it creates a menu transformicon with `is-open=true`', async function(assert) {
    assert.expect(1);

    await render(hbs`{{t-menu is-open=true}}`);
    percySnapshot(assert);

    let button = this.element.querySelector('button');

    assert.ok(button.classList.contains('tcon-transform'));
  });

  test('it creates a menu transformicon with a non-default animation `a="butterfly"`', async function(assert) {
    assert.expect(2);

    await render(hbs`{{t-menu a="arrow-360-left"}}`);

    let button = this.element.querySelector('button');

    assert.ok(button.classList.contains('tcon-menu--arrow'));
    assert.ok(button.classList.contains('tcon-menu--arrow360left'));
  });

  test('user can click on the transformicon', async function(assert) {
    assert.expect(2);

    await render(hbs`{{t-menu id="t-menu"}}`);

    let button = this.element.querySelector('#t-menu');
    assert.equal(button.classList.contains('tcon-transform'), false);

    await click('#t-menu');
    percySnapshot(assert);

    assert.equal(button.classList.contains('tcon-transform'), true);
  });
});
