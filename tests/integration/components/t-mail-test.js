import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { percySnapshot } from 'ember-percy';
import { click, find } from 'ember-native-dom-helpers/test-support/helpers';

/*
 * {{t-mail}}
 */
moduleForComponent('t-mail', 'Integration | Component | t mail', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{t-mail}}`);

  assert.equal(find('button').textContent.trim(), 'open mailbox');

  // Template block usage:
  this.render(hbs`
    {{#t-mail}}
      template block text
    {{/t-mail}}
  `);

  assert.equal(find('button').textContent.trim(), 'open mailbox');
});

test('it creates a mail transformicon with defaults', function(assert) {
  assert.expect(6);

  this.render(hbs`{{t-mail}}`);
  percySnapshot(assert);

  let button = find('button');

  assert.equal(button.getAttribute('role'), 'button');
  assert.equal(button.getAttribute('type'), 'button');
  assert.equal(button.getAttribute('aria-label'), 'open mailbox');
  assert.ok(button.classList.contains('tcon'));
  assert.ok(button.classList.contains('tcon-mail--envelope'));
  assert.notOk(button.classList.contains('tcon-transform'));
});

test('it creates a mail transformicon with `is-open=false`', function(assert) {
  assert.expect(1);

  this.render(hbs`{{t-mail is-open=false}}`);
  percySnapshot(assert);

  let button = find('button');

  assert.ok(button.classList.contains('tcon-transform'));
});

test('user can click on the transformicon', function(assert) {
  assert.expect(2);

  this.render(hbs`{{t-mail id="t-mail"}}`);

  let button = find('#t-mail');
  assert.equal(button.classList.contains('tcon-transform'), false);

  click('#t-mail');
  percySnapshot(assert);

  assert.equal(button.classList.contains('tcon-transform'), true);
});
