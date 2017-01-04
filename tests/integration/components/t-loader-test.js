import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

/*
 * {{t-loader}}
 */
moduleForComponent('t-loader', 'Integration | Component | t loader', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{t-loader}}`);

  assert.equal(this.$().text().trim(), 'loading');

  // Template block usage:
  this.render(hbs`
    {{#t-loader}}
      template block text
    {{/t-loader}}
  `);

  assert.equal(this.$().text().trim(), 'loading');
});

test('it creates a loader transformicon with defaults', function(assert) {
  assert.expect(2);

  this.render(hbs`{{t-loader}}`);

  let compSpan = this.$('span');

  assert.equal(compSpan.attr('aria-label'), 'loading');
  assert.ok(compSpan.hasClass('tcon-loader--spinner360'));
});
