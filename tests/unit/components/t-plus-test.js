import {
  moduleForComponent,
  test
} from 'ember-qunit';

var component;

moduleForComponent('t-plus', {
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

test('it renders a add/remove transformicon with defaults', function(assert) {
  assert.expect(3);

  this.render();

  assert.equal(component.get('is-added'), false);
  assert.equal(component.get('animation'), 'minus');
  assert.equal(component.get('animationType'), 'tcon-plus tcon-plus--minus');
});
