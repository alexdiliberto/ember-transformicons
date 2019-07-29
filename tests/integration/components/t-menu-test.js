import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { percySnapshot } from 'ember-percy';

module('Integration | Component | t menu', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);

    await render(hbs`
      <TMenu />
    `);

    assert.dom('button').hasText('toggle menu');

    // Template block usage:
    await render(hbs`
      <TMenu>
        template block text
      </TMenu>
    `);

    assert.dom('button').hasText('toggle menu');
  });

  test('it creates a menu transformicon with defaults', async function(assert) {
    assert.expect(5);

    await render(hbs`
      <TMenu />
    `);
    percySnapshot(assert);

    assert.dom('button').hasAttribute('type', 'button');
    assert.dom('button').hasAttribute('aria-label', 'toggle menu');
    assert.dom('button').hasClass('tcon');
    assert.dom('button').hasClass('tcon-menu--xbutterfly');
    assert.dom('button').hasNoClass('tcon-transform');
  });

  test('it creates a menu transformicon with `isOpen=true`', async function(assert) {
    assert.expect(1);

    await render(hbs`
      <TMenu @isOpen={{true}} />
    `);
    percySnapshot(assert);

    assert.dom('button').hasClass('tcon-transform');
  });

  test('it creates a menu transformicon with a non-default animation `a="butterfly"`', async function(assert) {
    assert.expect(2);

    await render(hbs`
      <TMenu @a="arrow-360-left" />
    `);

    assert.dom('button').hasClass('tcon-menu--arrow');
    assert.dom('button').hasClass('tcon-menu--arrow360left');
  });

  test('user can click on the transformicon', async function(assert) {
    assert.expect(2);

    await render(hbs`
      <TMenu id="t-menu" />
    `);

    assert.dom('#t-menu').hasNoClass('tcon-transform');

    await click('#t-menu');
    percySnapshot(assert);

    assert.dom('#t-menu').hasClass('tcon-transform');
  });
});
