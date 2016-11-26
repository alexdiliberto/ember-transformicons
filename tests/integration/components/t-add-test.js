import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { percySnapshot } from 'ember-percy';

/*
 * {{t-add animation="minus"}}
 */
moduleForComponent('t-add', 'Integration | Component | t add', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{t-add}}`);

  assert.equal(this.$().text().trim(), 'add item');

  // Template block usage:
  this.render(hbs`
    {{#t-add}}
      template block text
    {{/t-add}}
  `);

  assert.equal(this.$().text().trim(), 'add item');
});

test('it creates an add transformicon with defaults', function(assert) {
  assert.expect(5);

  this.render(hbs`{{t-add}}`);
  percySnapshot(assert);

  const compButton = this.$('button');

  assert.equal(compButton.attr('type'), 'button');
  assert.equal(compButton.attr('aria-label'), 'add item');
  assert.ok(compButton.hasClass('tcon'));
  assert.ok(compButton.hasClass('tcon-plus'));
  assert.ok(compButton.hasClass('tcon-plus--minus'));
});

test('it creates an add transformicon with `is-added=true`', function(assert) {
  assert.expect(1);

  this.render(hbs`{{t-add is-added=true}}`);
  percySnapshot(assert);

  const compButton = this.$('button');

  assert.ok(compButton.hasClass('tcon-transform'));
});

test('it creates an add transformicon with a non-default animation `a="check"`', function(assert) {
  assert.expect(1);

  this.render(hbs`{{t-add a="check"}}`);
  percySnapshot(assert);

  const compButton = this.$('button');

  assert.ok(compButton.hasClass('tcon-plus--check'));
});
