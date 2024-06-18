import { main } from './main';

describe('Main', () => {
  it('should work', () => {
    expect(() => main()).not.toThrow();
  });
});
