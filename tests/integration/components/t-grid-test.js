import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { percySnapshot } from 'ember-percy';
import { click, find } from 'ember-native-dom-helpers/test-support/helpers';

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

  assert.equal(this.$().text().trim(), 'toggle grid');

  // Template block usage:
  this.render(hbs`
    {{#t-grid}}
      template block text
    {{/t-grid}}
  `);

  assert.equal(this.$().text().trim(), 'toggle grid');
});

test('it creates a grid transformicon with defaults', function(assert) {
  assert.expect(5);

  this.render(hbs`{{t-grid}}`);
  percySnapshot(assert);

  let compButton = this.$('button');

  assert.equal(compButton.attr('type'), 'button');
  assert.equal(compButton.attr('aria-label'), 'toggle grid');
  assert.ok(compButton.hasClass('tcon'));
  assert.ok(compButton.hasClass('tcon-grid'));
  assert.ok(compButton.hasClass('tcon-grid--rearrange'));
});

test('it creates a grid transformicon with `is-open=true`', function(assert) {
  assert.expect(1);

  this.render(hbs`{{t-grid is-open=true}}`);
  percySnapshot(assert);

  let compButton = this.$('button');

  assert.ok(compButton.hasClass('tcon-transform'));
});

test('it creates a grid transformicon with a non-default animation `a="collapse"`', function(assert) {
  assert.expect(1);

  this.render(hbs`{{t-grid a="collapse"}}`);

  let compButton = this.$('button');

  assert.ok(compButton.hasClass('tcon-grid--collapse'));
});

test('user can click on the transformicon', function(assert) {
  assert.expect(2);

  this.render(hbs`{{t-grid id="t-grid"}}`);

  let elem = find('#t-grid');
  assert.equal(this.$(elem).hasClass('tcon-transform'), false);

  click('#t-grid');
  percySnapshot(assert);

  assert.equal(this.$(elem).hasClass('tcon-transform'), true);
});
