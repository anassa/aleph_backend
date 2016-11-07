'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('tarjetas service', function() {
  it('registered the tarjetas service', () => {
    assert.ok(app.service('tarjetas'));
  });
});
