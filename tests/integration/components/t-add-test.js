import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from 'ember-test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { percySnapshot } from 'ember-percy';
import { click, find } from 'ember-native-dom-helpers';

module('Integration | Component | t add', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);

    await render(hbs`{{t-add}}`);

    assert.equal(find('button').textContent.trim(), 'add item');

    // Template block usage:
    await render(hbs`
      {{#t-add}}
        template block text
      {{/t-add}}
    `);

    assert.equal(find('button').textContent.trim(), 'add item');
  });

  test('it creates an add transformicon with defaults', async function(assert) {
    assert.expect(6);

    await render(hbs`{{t-add}}`);
    percySnapshot(assert);

    let button = find('button');

    assert.equal(button.getAttribute('type'), 'button');
    assert.equal(button.getAttribute('aria-label'), 'add item');
    assert.ok(button.classList.contains('tcon'));
    assert.ok(button.classList.contains('tcon-plus'));
    assert.ok(button.classList.contains('tcon-plus--minus'));
    assert.notOk(button.classList.contains('tcon-transform'));
  });

  test('it creates an add transformicon with `is-added=true`', async function(assert) {
    assert.expect(1);

    await render(hbs`{{t-add is-added=true}}`);
    percySnapshot(assert);

    let button = find('button');

    assert.ok(button.classList.contains('tcon-transform'));
  });

  test('it creates an add transformicon with a non-default animation `a="check"`', async function(assert) {
    assert.expect(1);

    await render(hbs`{{t-add a="check"}}`);

    let button = find('button');

    assert.ok(button.classList.contains('tcon-plus--check'));
  });

  test('user can click on the transformicon', async function(assert) {
    assert.expect(2);

    await render(hbs`{{t-add id="t-add"}}`);

    let button = find('#t-add');
    assert.equal(button.classList.contains('tcon-transform'), false);

    click('#t-add');
    percySnapshot(assert);

    assert.equal(button.classList.contains('tcon-transform'), true);
  });
});
