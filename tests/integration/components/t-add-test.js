import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { percySnapshot } from 'ember-percy';

module('Integration | Component | t add', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);

    await render(hbs`{{t-add}}`);

    assert.dom('button').hasText('add item');

    // Template block usage:
    await render(hbs`
      {{#t-add}}
        template block text
      {{/t-add}}
    `);

    assert.dom('button').hasText('add item');
  });

  test('it creates an add transformicon with defaults', async function(assert) {
    assert.expect(6);

    await render(hbs`{{t-add}}`);
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

    await render(hbs`{{t-add is-added=true}}`);
    percySnapshot(assert);

    let button = this.element.querySelector('button');

    assert.dom(button).hasClass('tcon-transform');
  });

  test('it creates an add transformicon with a non-default animation `a="check"`', async function(assert) {
    assert.expect(1);

    await render(hbs`{{t-add a="check"}}`);

    assert.dom('button').hasClass('tcon-plus--check');
  });

  test('user can click on the transformicon', async function(assert) {
    assert.expect(2);

    await render(hbs`{{t-add id="t-add"}}`);

    assert.dom('#t-add').hasNoClass('tcon-transform');

    await click('#t-add');
    percySnapshot(assert);

    assert.dom('#t-add').hasClass('tcon-transform');
  });
});
