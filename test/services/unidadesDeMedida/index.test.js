'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('unidadesDeMedida service', function() {
  it('registered the unidadesDeMedidas service', () => {
    assert.ok(app.service('unidadesDeMedidas'));
  });
});
