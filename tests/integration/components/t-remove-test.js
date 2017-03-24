import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { percySnapshot } from 'ember-percy';
import { click, find } from 'ember-native-dom-helpers';

/*
 * {{t-remove animation="collapse"}}
 */
moduleForComponent('t-remove', 'Integration | Component | t remove', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{t-remove}}`);

  assert.equal(find('button').textContent.trim(), 'remove item');

  // Template block usage:
  this.render(hbs`
    {{#t-remove}}
      template block text
    {{/t-remove}}
  `);

  assert.equal(find('button').textContent.trim(), 'remove item');
});

test('it creates a remove transformicon with defaults', function(assert) {
  assert.expect(5);

  this.render(hbs`{{t-remove}}`);
  percySnapshot(assert);

  let button = find('button');

  assert.equal(button.getAttribute('type'), 'button');
  assert.equal(button.getAttribute('aria-label'), 'remove item');
  assert.ok(button.classList.contains('tcon-remove'));
  assert.ok(button.classList.contains('tcon-remove--check'));
  assert.notOk(button.classList.contains('tcon-transform'));
});

test('it creates a remove transformicon with `is-removed=true`', function(assert) {
  assert.expect(1);

  this.render(hbs`{{t-remove is-removed=true}}`);
  percySnapshot(assert);

  let button = find('button');

  assert.ok(button.classList.contains('tcon-transform'));
});

test('it creates a remove transformicon with a non-default animation `a="chevron-right"`', function(assert) {
  assert.expect(1);

  this.render(hbs`{{t-remove a="chevron-right"}}`);

  let button = find('button');

  assert.ok(button.classList.contains('tcon-remove--chevron-right'));
});

test('user can click on the transformicon', function(assert) {
  assert.expect(2);

  this.render(hbs`{{t-remove id="t-remove"}}`);

  let button = find('#t-remove');
  assert.equal(button.classList.contains('tcon-transform'), false);

  click('#t-remove');
  percySnapshot(assert);

  assert.equal(button.classList.contains('tcon-transform'), true);
});
