import {
  moduleForComponent,
  test
} from 'ember-qunit';

var component;

moduleForComponent('t-menu', {
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

test('it renders a menu transformicon with defaults', function(assert) {
  assert.expect(3);

  this.render();

  assert.equal(component.get('is-open'), false);
  assert.equal(component.get('animation'), 'butterfly');
  assert.equal(component.get('animationType'), 'tcon-menu--xbutterfly');
});
