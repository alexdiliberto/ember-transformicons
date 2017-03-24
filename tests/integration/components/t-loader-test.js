import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { find } from 'ember-native-dom-helpers';

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

  assert.equal(find('span').textContent.trim(), 'loading');

  // Template block usage:
  this.render(hbs`
    {{#t-loader}}
      template block text
    {{/t-loader}}
  `);

  assert.equal(find('span').textContent.trim(), 'loading');
});

test('it creates a loader transformicon with defaults', function(assert) {
  assert.expect(2);

  this.render(hbs`{{t-loader}}`);

  let span = find('span');

  assert.equal(span.getAttribute('aria-label'), 'loading');
  assert.ok(span.classList.contains('tcon-loader--spinner360'));
});
