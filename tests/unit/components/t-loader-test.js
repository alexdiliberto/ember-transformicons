import {
  moduleForComponent,
  test
} from 'ember-qunit';
import { arrayContains } from '../../helpers/common';

var component;

moduleForComponent('t-loader', {
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

test('it renders a loader transformicon with defaults', function(assert) {
  assert.expect(2);

  this.render();

  assert.equal(component.get('aria-label'), 'loading');
  assert.ok(arrayContains('tcon-loader--spinner360', component.get('classNames')));
});
