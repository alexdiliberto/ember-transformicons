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

  assert.equal(this.$().text().trim(), 'open mailbox');

  // Template block usage:
  this.render(hbs`
    {{#t-mail}}
      template block text
    {{/t-mail}}
  `);

  assert.equal(this.$().text().trim(), 'open mailbox');
});

test('it creates a mail transformicon with defaults', function(assert) {
  assert.expect(5);

  this.render(hbs`{{t-mail}}`);
  percySnapshot(assert);

  let compButton = this.$('button');

  assert.equal(compButton.attr('role'), 'button');
  assert.equal(compButton.attr('type'), 'button');
  assert.equal(compButton.attr('aria-label'), 'open mailbox');
  assert.ok(compButton.hasClass('tcon'));
  assert.ok(compButton.hasClass('tcon-mail--envelope'));
});

test('it creates a mail transformicon with `is-open=false`', function(assert) {
  assert.expect(1);

  this.render(hbs`{{t-mail is-open=false}}`);
  percySnapshot(assert);

  let compButton = this.$('button');

  assert.ok(compButton.hasClass('tcon-transform'));
});

test('user can click on the transformicon', function(assert) {
  assert.expect(2);

  this.render(hbs`{{t-mail id="t-mail"}}`);

  let elem = find('#t-mail');
  assert.equal(this.$(elem).hasClass('tcon-transform'), false);

  click('#t-mail');
  percySnapshot(assert);

  assert.equal(this.$(elem).hasClass('tcon-transform'), true);
});
