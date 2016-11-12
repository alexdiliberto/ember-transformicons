import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

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

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#t-scroll}}
      template block text
    {{/t-scroll}}
  `);

  assert.equal(this.$().text().trim(), '');
});

test('it creates a scroll indicator transformicon with defaults', function(assert) {
  assert.expect(5);

  this.render(hbs`{{t-scroll}}`);
  const compSpan = this.$('span');

  assert.equal(compSpan.attr('aria-label'), 'scroll');
  assert.equal(compSpan.attr('aria-hidden'), 'true');
  assert.ok(compSpan.hasClass('tcon-indicator'));
  assert.ok(compSpan.find('svg')[0].classList.contains('tcon-svgchevron')); // jQuery `.hasClass()` method has issues when used on <svg> elemments - SEE: https://github.com/jquery/jquery/issues/2199
  assert.equal(compSpan.find('path').length, 3);
});
