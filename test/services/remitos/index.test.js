'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('remitos service', function() {
  it('registered the remitos service', () => {
    assert.ok(app.service('remitos'));
  });
});
