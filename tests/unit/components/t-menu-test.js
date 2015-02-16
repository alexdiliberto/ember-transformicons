import {
  moduleForComponent,
  test
} from 'ember-qunit';
import { arrayContains } from '../../helpers/common';

moduleForComponent('t-menu', {});

test('it renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('it creates a menu transformicon with defaults', function(assert) {
  assert.expect(4);

  /**
    {{t-menu}}
  */
  var component = this.subject();
  var transformClass = component.get('transformClass');
  this.render();
  assert.equal(component.get('is-open'), false);
  assert.equal(component.get('animation'), 'butterfly');
  assert.equal(component.get('animationType'), 'tcon-menu--xbutterfly');
  assert.ok(!arrayContains(transformClass, component.get('classNames')));
});

test('it creates a menu transformicon with `is-open=true`', function(assert) {
  assert.expect(2);

  /**
    {{t-menu is-open=true}}
  */
  var component = this.subject({ 'is-open': true });
  var transformClass = component.get('transformClass');
  this.render();
  assert.equal(component.get('is-open'), true);
  assert.ok(arrayContains(transformClass, component.get('classNames')));
});

test('it creates a menu transformicon with a non-default animation `a="arrow-360-left"`', function(assert) {
  assert.expect(4);

  /**
    {{t-menu a='arrow-360-left'}}
  */
  var component = this.subject({ a: 'arrow-360-left' });
  var transformClass = component.get('transformClass');
  this.render();
  assert.equal(component.get('is-open'), false);
  assert.equal(component.get('animation'), 'arrow-360-left');
  assert.equal(component.get('animationType'), 'tcon-menu--arrow tcon-menu--arrow360left');
  assert.ok(!arrayContains(transformClass, component.get('classNames')));
});
