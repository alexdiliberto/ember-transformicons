import {
  moduleForComponent,
  test
} from 'ember-qunit';
import { arrayContains } from '../../helpers/common';

moduleForComponent('t-mail', {});

test('it renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('it creates a mail transformicon with defaults', function(assert) {
  assert.expect(3);

  /**
    {{t-mail}}
  */
  var component = this.subject();
  var transformClass = component.get('transformClass');
  this.render();
  assert.equal(component.get('is-open'), true);
  assert.ok(arrayContains('tcon-mail--envelope', component.get('classNames')));
  assert.ok(!arrayContains(transformClass, component.get('classNames')));
});

test('it creates a mail transformicon with `is-open=false`', function(assert) {
  assert.expect(2);

  /**
    {{t-mail is-open=false}}
  */
  var component = this.subject({ 'is-open': false });
  var transformClass = component.get('transformClass');
  this.render();
  assert.equal(component.get('is-open'), false);
  assert.ok(arrayContains(transformClass, component.get('classNames')));
});
