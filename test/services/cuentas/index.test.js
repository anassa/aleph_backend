'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('cuentas service', function() {
  it('registered the cuentas service', () => {
    assert.ok(app.service('cuentas'));
  });
});
