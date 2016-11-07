'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('proveedores service', function() {
  it('registered the proveedores service', () => {
    assert.ok(app.service('proveedores'));
  });
});
