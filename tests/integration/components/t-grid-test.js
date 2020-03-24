import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { percySnapshot } from 'ember-percy';

module('Integration | Component | t grid', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
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

  test('it creates a grid transformicon with defaults', async function (assert) {
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

  test('it creates a grid transformicon with `isOpen=true`', async function (assert) {
    assert.expect(1);

    await render(hbs`
      <TGrid @isOpen={{true}} />
    `);
    percySnapshot(assert);

    assert.dom('button').hasClass('tcon-transform');
  });

  test('it creates a grid transformicon with a non-default animation `animation="collapse"`', async function (assert) {
    assert.expect(1);

    await render(hbs`
      <TGrid @animation="collapse" />
    `);

    assert.dom('button').hasClass('tcon-grid--collapse');
  });

  test('user can click on the transformicon', async function (assert) {
    assert.expect(2);

    this.isOpen = false;

    await render(hbs`
      <TGrid
        id="t-grid"
        @isOpen={{this.isOpen}}
        {{on "click" (fn (mut this.isOpen) (not this.isOpen))}}
      />
    `);

    assert.dom('#t-grid').hasNoClass('tcon-transform');

    await click('#t-grid');
    percySnapshot(assert);

    assert.dom('#t-grid').hasClass('tcon-transform');
  });
});
