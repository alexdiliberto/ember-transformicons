import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { percySnapshot } from 'ember-percy';

module('Integration | Component | t-add', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
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

  test('it creates an add transformicon with defaults', async function (assert) {
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

  test('it creates an add transformicon with `isAdded=true`', async function (assert) {
    assert.expect(1);

    await render(hbs`
      <TAdd @isAdded={{true}} />
    `);
    percySnapshot(assert);

    assert.dom('button').hasClass('tcon-transform');
  });

  test('it creates an add transformicon with a non-default animation `animation="check"`', async function (assert) {
    assert.expect(1);

    await render(hbs`
      <TAdd @animation="check" />
    `);

    assert.dom('button').hasClass('tcon-plus--check');
  });

  test('user can click on the transformicon', async function (assert) {
    assert.expect(2);

    this.isAdded = false;

    await render(hbs`
      <TAdd
        id="t-add"
        @isAdded={{this.isAdded}}
        {{on "click" (fn (mut this.isAdded) (not this.isAdded))}}
      />
    `);

    assert.dom('#t-add').hasNoClass('tcon-transform');

    await click('#t-add');
    percySnapshot(assert);

    assert.dom('#t-add').hasClass('tcon-transform');
  });
});
