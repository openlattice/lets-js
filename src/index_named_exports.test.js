import PACKAGE from '../package.json';

import * as Index from './index';

describe('lets-js named exports', () => {

  test('should export the correct version', () => {
    expect(Index.version).toEqual(PACKAGE.version);
  });

});
