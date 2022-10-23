import { app } from '../../lib/app';

/* eslint-disable no-undef */

describe('GET Week Schedule route', () => {
  afterEach(async () => {
    await app.ready();
  });

  it('should return this json structure', async () => {
    const response: any = await app.inject({
      method: 'GET',
      url: 'http://localhost:8396/schedule',
      query: {
        isoWeek: '44',
        isoYear: '2023',
      },
    });

    expect(response.json().ok).toBe(true);
  });

  afterAll(async () => {
    await app.close();
  });
});
