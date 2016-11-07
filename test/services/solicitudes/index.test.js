'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('solicitudes service', function() {
  it('registered the solicitudes service', () => {
    assert.ok(app.service('solicitudes'));
  });
});
