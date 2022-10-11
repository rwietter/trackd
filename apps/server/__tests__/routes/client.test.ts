import { app } from '../../lib/app';

/* eslint-disable no-undef */

describe('GET Week Schedule route', () => {
  afterEach(async () => {
    await app.ready();
  });

  it('should return this json structure', async () => {
    const response = await app.inject({
      method: 'GET',
      url: 'http://localhost:8396/week-schedule',
    });

    expect(response.statusCode).toBe(200);
  });

  afterAll(async () => {
    await app.close();
  });
});
