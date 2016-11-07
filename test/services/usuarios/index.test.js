'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('usuarios service', function() {
  it('registered the usuarios service', () => {
    assert.ok(app.service('usuarios'));
  });
});
