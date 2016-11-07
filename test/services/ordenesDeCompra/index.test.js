'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('ordenesDeCompra service', function() {
  it('registered the ordenesDeCompras service', () => {
    assert.ok(app.service('ordenesDeCompras'));
  });
});
