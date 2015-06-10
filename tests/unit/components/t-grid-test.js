import {
  moduleForComponent,
  test
} from 'ember-qunit';
import { arrayContains } from '../../helpers/common';

moduleForComponent('t-grid', {});

test('it renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('it creates a grid transformicon with defaults', function(assert) {
  assert.expect(5);

  /**
    {{t-grid}}
  */
  var component = this.subject();
  var transformClass = component.get('transformClass');
  this.render();
  assert.equal(component.get('is-open'), false);
  assert.equal(component.get('animation'), 'rearrange');
  assert.equal(component.get('animationType'), 'tcon-grid--rearrange');
  assert.ok(arrayContains('tcon-grid', component.get('classNames')));
  assert.ok(!arrayContains(transformClass, component.get('classNames')));
});

test('it creates a grid transformicon with `is-open=true`', function(assert) {
  assert.expect(2);

  /**
    {{t-grid is-open=true}}
  */
  var component = this.subject({ 'is-open': true });
  var transformClass = component.get('transformClass');
  this.render();
  assert.equal(component.get('is-open'), true);
  assert.ok(arrayContains(transformClass, this.$().attr('class')));
});

test('it creates a grid transformicon with a non-default animation `a="collapse"`', function(assert) {
  assert.expect(4);

  /**
    {{t-grid a='collapse'}}
  */
  var component = this.subject({ a: 'collapse' });
  var transformClass = component.get('transformClass');
  this.render();
  assert.equal(component.get('is-open'), false);
  assert.equal(component.get('animation'), 'collapse');
  assert.equal(component.get('animationType'), 'tcon-grid--collapse');
  assert.ok(!arrayContains(transformClass, component.get('classNames')));
});
