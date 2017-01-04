import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { percySnapshot } from 'ember-percy';

/*
 * {{t-video animation="collapse"}}
 */
moduleForComponent('t-video', 'Integration | Component | t video', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{t-video}}`);

  assert.equal(this.$().text().trim(), 'play video');

  // Template block usage:
  this.render(hbs`
    {{#t-video}}
      template block text
    {{/t-video}}
  `);

  assert.equal(this.$().text().trim(), 'play video');
});

test('it creates a video transformicon with defaults', function(assert) {
  assert.expect(5);

  this.render(hbs`{{t-video}}`);
  percySnapshot(assert);

  let compButton = this.$('button');

  assert.equal(compButton.attr('role'), 'button');
  assert.equal(compButton.attr('type'), 'button');
  assert.equal(compButton.attr('aria-label'), 'play video');
  assert.ok(compButton.hasClass('tcon'));
  assert.ok(compButton.hasClass('tcon-vid--play'));
});

test('it creates a video transformicon with `is-playing=true`', function(assert) {
  assert.expect(1);

  this.render(hbs`{{t-video is-playing=true}}`);
  percySnapshot(assert);

  let compButton = this.$('button');

  assert.ok(compButton.hasClass('tcon-transform'));
});
