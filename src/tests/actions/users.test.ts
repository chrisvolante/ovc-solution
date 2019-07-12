import { fetchUsers } from '../../actions';

describe('fetchUsers() using async/await', () => {
  it('should load user data', async () => {
    const data = await fetchUsers();
    expect(data).toBeDefined();
  })
});