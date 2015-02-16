import {
  moduleForComponent,
  test
} from 'ember-qunit';
import { arrayContains } from '../../helpers/common';

moduleForComponent('t-video', {});

test('it renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('it creates a video transformicon with defaults', function(assert) {
  assert.expect(3);

  /**
    {{t-video}}
  */
  var component = this.subject();
  var transformClass = component.get('transformClass');
  this.render();
  assert.equal(component.get('is-playing'), false);
  assert.ok(arrayContains('tcon-vid--play', component.get('classNames')));
  assert.ok(!arrayContains(transformClass, component.get('classNames')));
});

test('it creates a video transformicon with `is-playing=true`', function(assert) {
  assert.expect(2);

  /**
    {{t-video is-playing=true}}
  */
  var component = this.subject({ 'is-playing': true });
  var transformClass = component.get('transformClass');
  this.render();
  assert.equal(component.get('is-playing'), true);
  assert.ok(arrayContains(transformClass, component.get('classNames')));
});
