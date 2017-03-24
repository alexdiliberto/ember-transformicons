import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { percySnapshot } from 'ember-percy';
import { click, find } from 'ember-native-dom-helpers';

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

  assert.equal(find('button').textContent.trim(), 'toggle search');

  // Template block usage:
  this.render(hbs`
    {{#t-form}}
      template block text
    {{/t-form}}
  `);

  assert.equal(find('button').textContent.trim(), 'toggle search');
});

test('it creates a form transformicon with defaults', function(assert) {
  assert.expect(5);

  this.render(hbs`{{t-form}}`);
  percySnapshot(assert);

  let button = find('button');

  assert.equal(button.getAttribute('type'), 'button');
  assert.equal(button.getAttribute('aria-label'), 'toggle search');
  assert.ok(button.classList.contains('tcon'));
  assert.ok(button.classList.contains('tcon-search--xcross'));
  assert.notOk(button.classList.contains('tcon-transform'));
});

test('it creates a form transformicon with `is-searching=true`', function(assert) {
  assert.expect(1);

  this.render(hbs`{{t-form is-searching=true}}`);
  percySnapshot(assert);

  let button = find('button');

  assert.ok(button.classList.contains('tcon-transform'));
});

test('user can click on the transformicon', function(assert) {
  assert.expect(2);

  this.render(hbs`{{t-form id="t-form"}}`);

  let button = find('#t-form');
  assert.equal(button.classList.contains('tcon-transform'), false);

  click('#t-form');
  percySnapshot(assert);

  assert.equal(button.classList.contains('tcon-transform'), true);
});
