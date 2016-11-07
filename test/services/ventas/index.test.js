'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('ventas service', function() {
  it('registered the ventas service', () => {
    assert.ok(app.service('ventas'));
  });
});
