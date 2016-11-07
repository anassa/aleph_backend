'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('clientes service', function() {
  it('registered the clientes service', () => {
    assert.ok(app.service('clientes'));
  });
});
