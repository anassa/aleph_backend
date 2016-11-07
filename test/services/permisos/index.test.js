'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('permisos service', function() {
  it('registered the permisos service', () => {
    assert.ok(app.service('permisos'));
  });
});
