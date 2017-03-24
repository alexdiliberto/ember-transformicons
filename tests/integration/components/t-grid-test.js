import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { percySnapshot } from 'ember-percy';
import { click, find } from 'ember-native-dom-helpers';

/*
 * {{t-grid animation="collapse"}}
 */
moduleForComponent('t-grid', 'Integration | Component | t grid', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{t-grid}}`);

  assert.equal(find('button').textContent.trim(), 'toggle grid');

  // Template block usage:
  this.render(hbs`
    {{#t-grid}}
      template block text
    {{/t-grid}}
  `);

  assert.equal(find('button').textContent.trim(), 'toggle grid');
});

test('it creates a grid transformicon with defaults', function(assert) {
  assert.expect(6);

  this.render(hbs`{{t-grid}}`);
  percySnapshot(assert);

  let button = find('button');

  assert.equal(button.getAttribute('type'), 'button');
  assert.equal(button.getAttribute('aria-label'), 'toggle grid');
  assert.ok(button.classList.contains('tcon'));
  assert.ok(button.classList.contains('tcon-grid'));
  assert.ok(button.classList.contains('tcon-grid--rearrange'));
  assert.notOk(button.classList.contains('tcon-transform'));
});

test('it creates a grid transformicon with `is-open=true`', function(assert) {
  assert.expect(1);

  this.render(hbs`{{t-grid is-open=true}}`);
  percySnapshot(assert);

  let button = find('button');

  assert.ok(button.classList.contains('tcon-transform'));
});

test('it creates a grid transformicon with a non-default animation `a="collapse"`', function(assert) {
  assert.expect(1);

  this.render(hbs`{{t-grid a="collapse"}}`);

  let button = find('button');

  assert.ok(button.classList.contains('tcon-grid--collapse'));
});

test('user can click on the transformicon', function(assert) {
  assert.expect(2);

  this.render(hbs`{{t-grid id="t-grid"}}`);

  let button = find('#t-grid');
  assert.equal(button.classList.contains('tcon-transform'), false);

  click('#t-grid');
  percySnapshot(assert);

  assert.equal(button.classList.contains('tcon-transform'), true);
});
