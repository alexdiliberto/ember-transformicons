import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from 'ember-test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { percySnapshot } from 'ember-percy';
import { click, find } from 'ember-native-dom-helpers';

module('Integration | Component | t video', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);

    await render(hbs`{{t-video}}`);

    assert.equal(find('button').textContent.trim(), 'play video');

    // Template block usage:
    await render(hbs`
      {{#t-video}}
        template block text
      {{/t-video}}
    `);

    assert.equal(find('button').textContent.trim(), 'play video');
  });

  test('it creates a video transformicon with defaults', async function(assert) {
    assert.expect(6);

    await render(hbs`{{t-video}}`);
    percySnapshot(assert);

    let button = find('button');

    assert.equal(button.getAttribute('role'), 'button');
    assert.equal(button.getAttribute('type'), 'button');
    assert.equal(button.getAttribute('aria-label'), 'play video');
    assert.ok(button.classList.contains('tcon'));
    assert.ok(button.classList.contains('tcon-vid--play'));
    assert.notOk(button.classList.contains('tcon-transform'));
  });

  test('it creates a video transformicon with `is-playing=true`', async function(assert) {
    assert.expect(1);

    await render(hbs`{{t-video is-playing=true}}`);
    percySnapshot(assert);

    let button = find('button');

    assert.ok(button.classList.contains('tcon-transform'));
  });

  test('user can click on the transformicon', async function(assert) {
    assert.expect(2);

    await render(hbs`{{t-video id="t-video"}}`);

    let button = find('#t-video');
    assert.equal(button.classList.contains('tcon-transform'), false);

    click('#t-video');
    percySnapshot(assert);

    assert.equal(button.classList.contains('tcon-transform'), true);
  });
});
