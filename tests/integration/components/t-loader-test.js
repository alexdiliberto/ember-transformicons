import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from 'ember-test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { find } from 'ember-native-dom-helpers';

module('Integration | Component | t loader', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);

    await render(hbs`{{t-loader}}`);

    assert.equal(find('span').textContent.trim(), 'loading');

    // Template block usage:
    await render(hbs`
      {{#t-loader}}
        template block text
      {{/t-loader}}
    `);

    assert.equal(find('span').textContent.trim(), 'loading');
  });

  test('it creates a loader transformicon with defaults', async function(assert) {
    assert.expect(2);

    await render(hbs`{{t-loader}}`);

    let span = find('span');

    assert.equal(span.getAttribute('aria-label'), 'loading');
    assert.ok(span.classList.contains('tcon-loader--spinner360'));
  });
});
