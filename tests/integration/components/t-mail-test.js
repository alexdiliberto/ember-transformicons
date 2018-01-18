import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { percySnapshot } from 'ember-percy';

module('Integration | Component | t mail', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);

    await render(hbs`{{t-mail}}`);

    assert.equal(this.element.querySelector('button').textContent.trim(), 'open mailbox');

    // Template block usage:
    await render(hbs`
      {{#t-mail}}
        template block text
      {{/t-mail}}
    `);

    assert.equal(this.element.querySelector('button').textContent.trim(), 'open mailbox');
  });

  test('it creates a mail transformicon with defaults', async function(assert) {
    assert.expect(6);

    await render(hbs`{{t-mail}}`);
    percySnapshot(assert);

    let button = this.element.querySelector('button');

    assert.equal(button.getAttribute('role'), 'button');
    assert.equal(button.getAttribute('type'), 'button');
    assert.equal(button.getAttribute('aria-label'), 'open mailbox');
    assert.ok(button.classList.contains('tcon'));
    assert.ok(button.classList.contains('tcon-mail--envelope'));
    assert.notOk(button.classList.contains('tcon-transform'));
  });

  test('it creates a mail transformicon with `is-open=false`', async function(assert) {
    assert.expect(1);

    await render(hbs`{{t-mail is-open=false}}`);
    percySnapshot(assert);

    let button = this.element.querySelector('button');

    assert.ok(button.classList.contains('tcon-transform'));
  });

  test('user can click on the transformicon', async function(assert) {
    assert.expect(2);

    await render(hbs`{{t-mail id="t-mail"}}`);

    let button = this.element.querySelector('#t-mail');
    assert.equal(button.classList.contains('tcon-transform'), false);

    await click('#t-mail');
    percySnapshot(assert);

    assert.equal(button.classList.contains('tcon-transform'), true);
  });
});
