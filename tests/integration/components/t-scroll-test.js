import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from 'ember-test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { find, findAll } from 'ember-native-dom-helpers';

module('Integration | Component | t scroll', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);

    await render(hbs`{{t-scroll}}`);

    assert.equal(find('span').textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#t-scroll}}
        template block text
      {{/t-scroll}}
    `);

    assert.equal(find('span').textContent.trim(), '');
  });

  test('it creates a scroll indicator transformicon with defaults', async function(assert) {
    assert.expect(5);

    await render(hbs`{{t-scroll}}`);

    let span = find('span');
    let svg = find('svg');
    let path = findAll('path');

    assert.equal(span.getAttribute('aria-label'), 'scroll');
    assert.equal(span.getAttribute('aria-hidden'), 'true');
    assert.ok(span.classList.contains('tcon-indicator'));
    assert.ok(svg.classList.contains('tcon-svgchevron'));
    assert.equal(path.length, 3);
  });
});
