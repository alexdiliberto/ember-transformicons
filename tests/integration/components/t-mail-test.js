import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { percySnapshot } from 'ember-percy';

module('Integration | Component | t mail', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);

    await render(hbs`
      <TMail />
    `);

    assert.dom('button').hasText('open mailbox');

    // Template block usage:
    await render(hbs`
      <TMail>
        template block text
      </TMail>
    `);

    assert.dom('button').hasText('open mailbox');
  });

  test('it creates a mail transformicon with defaults', async function(assert) {
    assert.expect(6);

    await render(hbs`
      <TMail />
    `);
    percySnapshot(assert);

    assert.dom('button').hasAttribute('role', 'button');
    assert.dom('button').hasAttribute('type', 'button');
    assert.dom('button').hasAttribute('aria-label', 'open mailbox');
    assert.dom('button').hasClass('tcon');
    assert.dom('button').hasClass('tcon-mail--envelope');
    assert.dom('button').hasClass('tcon-transform');
  });

  test('it creates a mail transformicon with `isOpen=false`', async function(assert) {
    assert.expect(1);

    await render(hbs`
      <TMail @isOpen={{false}} />
    `);
    percySnapshot(assert);

    assert.dom('button').hasClass('tcon-transform');
  });

  test('user can click on the transformicon', async function(assert) {
    assert.expect(2);

    this.isOpen = true;

    await render(hbs`
      <TMail
        id="t-mail"
        @isOpen={{this.isOpen}}
        {{on "click" (fn (mut this.isOpen) (not this.isOpen))}}
      />
    `);

    assert.dom('#t-mail').hasNoClass('tcon-transform');

    await click('#t-mail');
    percySnapshot(assert);

    assert.dom('#t-mail').hasClass('tcon-transform');
  });
});
