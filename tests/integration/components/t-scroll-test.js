import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { find, findAll } from 'ember-native-dom-helpers';

/*
 * {{t-scroll}}
 */
moduleForComponent('t-scroll', 'Integration | Component | t scroll', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{t-scroll}}`);

  assert.equal(find('span').textContent.trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#t-scroll}}
      template block text
    {{/t-scroll}}
  `);

  assert.equal(find('span').textContent.trim(), '');
});

test('it creates a scroll indicator transformicon with defaults', function(assert) {
  assert.expect(5);

  this.render(hbs`{{t-scroll}}`);

  let span = find('span');
  let svg = find('svg');
  let path = findAll('path');

  assert.equal(span.getAttribute('aria-label'), 'scroll');
  assert.equal(span.getAttribute('aria-hidden'), 'true');
  assert.ok(span.classList.contains('tcon-indicator'));
  assert.ok(svg.classList.contains('tcon-svgchevron'));
  assert.equal(path.length, 3);
});
