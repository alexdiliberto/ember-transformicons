import {
  moduleForComponent,
  test
} from 'ember-qunit';
import { arrayContains } from '../../helpers/common';

moduleForComponent('t-loader', {});

test('it renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('it creates a loader transformicon with defaults', function(assert) {
  assert.expect(2);

  /**
    {{t-loader}}
  */
  var component = this.subject();
  assert.equal(component.get('aria-label'), 'loading');
  assert.ok(arrayContains('tcon-loader--spinner360', component.get('classNames')));
});
