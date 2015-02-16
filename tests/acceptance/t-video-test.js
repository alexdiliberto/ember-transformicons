import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';
import { run } from '../helpers/common';

var application;

module('Acceptance: TVideo', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    run(application, 'destroy');
  }
});

test('Toggle the default {{t-video}} component', function(assert) {
  assert.expect(2);

  visit('/video');

  var $defaultVideo = find('#video-default');

  assert.equal($defaultVideo.hasClass('tcon-transform'), false);
  $defaultVideo.click();
  andThen(function() {
    assert.equal($defaultVideo.hasClass('tcon-transform'), true);
  });
});

test('Verify default {{t-video}} component has correct template', function(assert) {
  assert.expect(1);

  visit('/video');

  var $defaultVideo = find('#video-default');

  assert.equal($defaultVideo.find('span.tcon-visuallyhidden').text(), 'play video');
});
