import {
  moduleForComponent,
  test
} from 'ember-qunit';
import { arrayContains } from '../../helpers/common';

moduleForComponent('t-remove', {});

test('it renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('it creates a remove transformicon with defaults', function(assert) {
  assert.expect(3);

  /**
    {{t-remove}}
  */
  var component = this.subject();
  var transformClass = component.get('transformClass');
  this.render();
  assert.equal(component.get('is-removed'), false);
  assert.ok(arrayContains('tcon-remove--check', component.get('classNames')));
  assert.ok(!arrayContains(transformClass, component.get('classNames')));
});

test('it creates a remove transformicon with `is-removed=true`', function(assert) {
  assert.expect(2);

  /**
    {{t-remove is-removed=true}}
  */
  var component = this.subject({ 'is-removed': true });
  var transformClass = component.get('transformClass');
  this.render();
  assert.equal(component.get('is-removed'), true);
  assert.ok(arrayContains(transformClass, component.get('classNames')));
});
