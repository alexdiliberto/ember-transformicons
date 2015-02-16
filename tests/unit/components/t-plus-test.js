import {
  moduleForComponent,
  test
} from 'ember-qunit';
import { arrayContains } from '../../helpers/common';

moduleForComponent('t-plus', {});

test('it renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('it creates a add/remove transformicon with defaults', function(assert) {
  assert.expect(4);

  /**
    {{t-plus}}
  */
  var component = this.subject();
  var transformClass = component.get('transformClass');
  this.render();
  assert.equal(component.get('is-added'), false);
  assert.equal(component.get('animation'), 'minus');
  assert.equal(component.get('animationType'), 'tcon-plus tcon-plus--minus');
  assert.ok(!arrayContains(transformClass, component.get('classNames')));
});

test('it creates a add/remove transformicon with `is-added=true`', function(assert) {
  assert.expect(2);

  /**
    {{t-plus is-added=true}}
  */
  var component = this.subject({ 'is-added': true });
  var transformClass = component.get('transformClass');
  this.render();
  assert.equal(component.get('is-added'), true);
  assert.ok(arrayContains(transformClass, component.get('classNames')));
});

test('it creates a add/remove transformicon with a non-default animation `a="minus-fold"`', function(assert) {
  assert.expect(4);

  /**
    {{t-plus a='minus-fold'}}
  */
  var component = this.subject({ a: 'minus-fold' });
  var transformClass = component.get('transformClass');
  this.render();
  assert.equal(component.get('is-added'), false);
  assert.equal(component.get('animation'), 'minus-fold');
  assert.equal(component.get('animationType'), 'tcon-plus--minusfold');
  assert.ok(!arrayContains(transformClass, component.get('classNames')));
});
