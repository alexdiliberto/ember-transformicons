'use strict';

const expect = require('chai').expect;
const setupTest = require('ember-fastboot-addon-tests').setupTest;

describe('transformicon', function() {
  setupTest('fastboot'/*, options */);

  it('renders', function() {
    return this.visit('/transformicon')
      .then(({ jQuery: $, response}) => {
        expect(response.statusCode).to.equal(200);
        expect($('body').length).to.equal(1);
        expect($('h1').text().trim()).to.equal('transformicon');
        expect($('#test-btn').attr('aria-label')).to.equal('toggle menu');
        expect($('#test-btn').hasClass('tcon')).to.true;
        expect($('#test-btn').hasClass('tcon-menu--arrow')).to.true;
        expect($('#test-btn').hasClass('tcon-menu--arrowleft')).to.true;
      });
  });
});
