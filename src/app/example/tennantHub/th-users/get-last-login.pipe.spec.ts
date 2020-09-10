import { GetLastLoginPipe } from './get-last-login.pipe';

describe('GetLastLoginPipe', () => {
  it('create an instance', () => {
    const pipe = new GetLastLoginPipe();
    expect(pipe).toBeTruthy();
  });
});
