import {
  moduleForComponent,
  test
} from 'ember-qunit';
import { arrayContains } from '../../helpers/common';

moduleForComponent('t-add', {});

test('it renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('it creates an add transformicon with defaults', function(assert) {
  assert.expect(4);

  /**
    {{t-add}}
  */
  var component = this.subject();
  var transformClass = component.get('transformClass');
  this.render();
  assert.equal(component.get('is-added'), false);
  assert.equal(component.get('animation'), 'minus');
  assert.equal(component.get('animationType'), 'tcon-plus--minus');
  assert.ok(!arrayContains(transformClass, component.get('classNames')));
});

test('it creates an add transformicon with `is-added=true`', function(assert) {
  assert.expect(2);

  /**
    {{t-add is-added=true}}
  */
  var component = this.subject({ 'is-added': true });
  var transformClass = component.get('transformClass');
  this.render();
  assert.equal(component.get('is-added'), true);
  assert.ok(arrayContains(transformClass, component.get('classNames')));
});

test('it creates an add transformicon with a non-default animation `a="check"`', function(assert) {
  assert.expect(4);

  /**
    {{t-add a='check'}}
  */
  var component = this.subject({ a: 'check' });
  var transformClass = component.get('transformClass');
  this.render();
  assert.equal(component.get('is-added'), false);
  assert.equal(component.get('animation'), 'check');
  assert.equal(component.get('animationType'), 'tcon-plus--check');
  assert.ok(!arrayContains(transformClass, component.get('classNames')));
});
