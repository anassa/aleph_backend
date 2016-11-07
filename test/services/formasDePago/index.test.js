'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('formasDePago service', function() {
  it('registered the formasDePagos service', () => {
    assert.ok(app.service('formasDePagos'));
  });
});
