import {
  moduleForComponent,
  test
} from 'ember-qunit';
import { arrayContains } from '../../helpers/common';

var component;

moduleForComponent('t-grid', {
  beforeEach: function() {
    component = this.subject();
  }
});

test('it renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  assert.equal(component._state, 'preRender');

  // renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('it renders a grid transformicon with defaults', function(assert) {
  assert.expect(4);

  this.render();

  assert.equal(component.get('is-open'), false);
  assert.equal(component.get('animation'), 'rearrange');
  assert.equal(component.get('animationType'), 'tcon-grid--rearrange');
  assert.ok(arrayContains('tcon-grid', component.get('classNames')));
});
