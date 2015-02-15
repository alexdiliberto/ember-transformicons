import {
  moduleForComponent,
  test
} from 'ember-qunit';
import { arrayContains } from 'dummy/tests/helpers/common';

var component;

moduleForComponent('t-mail', {
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

test('it renders a mail transformicon with defaults', function(assert) {
  assert.expect(2);

  this.render();

  assert.equal(component.get('is-open'), true);
  assert.ok(arrayContains('tcon-mail--envelope', component.get('classNames')));
});
