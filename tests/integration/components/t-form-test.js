import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { percySnapshot } from 'ember-percy';
import { click, find } from 'ember-native-dom-helpers/test-support/helpers';

/*
 * {{t-form}}
 */
moduleForComponent('t-form', 'Integration | Component | t form', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{t-form}}`);

  assert.equal(this.$().text().trim(), 'toggle search');

  // Template block usage:
  this.render(hbs`
    {{#t-form}}
      template block text
    {{/t-form}}
  `);

  assert.equal(this.$().text().trim(), 'toggle search');
});

test('it creates a form transformicon with defaults', function(assert) {
  assert.expect(4);

  this.render(hbs`{{t-form}}`);
  percySnapshot(assert);

  let compButton = this.$('button');

  assert.equal(compButton.attr('type'), 'button');
  assert.equal(compButton.attr('aria-label'), 'toggle search');
  assert.ok(compButton.hasClass('tcon'));
  assert.ok(compButton.hasClass('tcon-search--xcross'));
});

test('it creates a form transformicon with `is-searching=true`', function(assert) {
  assert.expect(1);

  this.render(hbs`{{t-form is-searching=true}}`);
  percySnapshot(assert);

  let compButton = this.$('button');

  assert.ok(compButton.hasClass('tcon-transform'));
});

test('user can click on the transformicon', function(assert) {
  assert.expect(2);

  this.render(hbs`{{t-form id="t-form"}}`);

  let elem = find('#t-form');
  assert.equal(this.$(elem).hasClass('tcon-transform'), false);

  click('#t-form');
  percySnapshot(assert);

  assert.equal(this.$(elem).hasClass('tcon-transform'), true);
});
