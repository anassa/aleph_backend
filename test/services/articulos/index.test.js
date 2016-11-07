'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('articulos service', function() {
  it('registered the articulos service', () => {
    assert.ok(app.service('articulos'));
  });
});
