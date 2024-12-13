import { doSomething } from './main';

describe('Main', () => {
  it('do something', () => {
    expect(() => doSomething()).toThrow('Not implemented');
  });
});
