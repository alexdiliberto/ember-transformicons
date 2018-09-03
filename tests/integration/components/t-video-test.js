import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { percySnapshot } from 'ember-percy';

module('Integration | Component | t video', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);

    await render(hbs`
      <TVideo />
    `);

    assert.dom('button').hasText('play video');

    // Template block usage:
    await render(hbs`
      <TVideo>
        template block text
      </TVideo>
    `);

    assert.dom('button').hasText('play video');
  });

  test('it creates a video transformicon with defaults', async function(assert) {
    assert.expect(6);

    await render(hbs`
      <TVideo />
    `);
    percySnapshot(assert);

    assert.dom('button').hasAttribute('role', 'button');
    assert.dom('button').hasAttribute('type', 'button');
    assert.dom('button').hasAttribute('aria-label', 'play video');
    assert.dom('button').hasClass('tcon');
    assert.dom('button').hasClass('tcon-vid--play');
    assert.dom('button').hasNoClass('tcon-transform');
  });

  test('it creates a video transformicon with `is-playing=true`', async function(assert) {
    assert.expect(1);

    await render(hbs`
      <TVideo @is-playing={{true}} />
    `);
    percySnapshot(assert);

    assert.dom('button').hasClass('tcon-transform');
  });

  test('user can click on the transformicon', async function(assert) {
    assert.expect(2);

    // FIXME: https://github.com/rwjblue/ember-angle-bracket-invocation-polyfill/issues/4#issue-328822657
    // Currently necessary to use `<TAdd @id="t-add" />` syntax when specifying an `id` but the `aid` prefix shouldn't be necessary -- should be able to say `<TAdd @id="t-add" />`. Fix after this issue is closed.
    await render(hbs`
      <TVideo @id="t-video" />
    `);

    assert.dom('#t-video').hasNoClass('tcon-transform');

    await click('#t-video');
    percySnapshot(assert);

    assert.dom('#t-video').hasClass('tcon-transform');
  });
});
