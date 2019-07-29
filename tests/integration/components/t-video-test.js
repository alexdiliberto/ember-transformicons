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

  test('it creates a video transformicon with `isPlaying=true`', async function(assert) {
    assert.expect(1);

    await render(hbs`
      <TVideo @isPlaying={{true}} />
    `);
    percySnapshot(assert);

    assert.dom('button').hasClass('tcon-transform');
  });

  test('user can click on the transformicon', async function(assert) {
    assert.expect(2);

    await render(hbs`
      <TVideo id="t-video" />
    `);

    assert.dom('#t-video').hasNoClass('tcon-transform');

    await click('#t-video');
    percySnapshot(assert);

    assert.dom('#t-video').hasClass('tcon-transform');
  });
});
