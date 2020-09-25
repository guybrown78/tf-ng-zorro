import { GetUsersFullNamePipe } from './get-users-full-name.pipe';

describe('GetUsersFullNamePipe', () => {
  it('create an instance', () => {
    const pipe = new GetUsersFullNamePipe();
    expect(pipe).toBeTruthy();
  });
});
