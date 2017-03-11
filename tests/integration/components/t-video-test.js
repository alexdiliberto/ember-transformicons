import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { percySnapshot } from 'ember-percy';
import { click, find } from 'ember-native-dom-helpers/test-support/helpers';

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

  assert.equal(find('button').textContent.trim(), 'play video');

  // Template block usage:
  this.render(hbs`
    {{#t-video}}
      template block text
    {{/t-video}}
  `);

  assert.equal(find('button').textContent.trim(), 'play video');
});

test('it creates a video transformicon with defaults', function(assert) {
  assert.expect(6);

  this.render(hbs`{{t-video}}`);
  percySnapshot(assert);

  let button = find('button');

  assert.equal(button.getAttribute('role'), 'button');
  assert.equal(button.getAttribute('type'), 'button');
  assert.equal(button.getAttribute('aria-label'), 'play video');
  assert.ok(button.classList.contains('tcon'));
  assert.ok(button.classList.contains('tcon-vid--play'));
  assert.notOk(button.classList.contains('tcon-transform'));
});

test('it creates a video transformicon with `is-playing=true`', function(assert) {
  assert.expect(1);

  this.render(hbs`{{t-video is-playing=true}}`);
  percySnapshot(assert);

  let button = find('button');

  assert.ok(button.classList.contains('tcon-transform'));
});

test('user can click on the transformicon', function(assert) {
  assert.expect(2);

  this.render(hbs`{{t-video id="t-video"}}`);

  let button = find('#t-video');
  assert.equal(button.classList.contains('tcon-transform'), false);

  click('#t-video');
  percySnapshot(assert);

  assert.equal(button.classList.contains('tcon-transform'), true);
});
