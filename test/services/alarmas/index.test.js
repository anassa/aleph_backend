'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('alarmas service', function() {
  it('registered the alarmas service', () => {
    assert.ok(app.service('alarmas'));
  });
});
