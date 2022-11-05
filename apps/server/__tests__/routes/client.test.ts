import { app } from '../../lib/app';

describe('GET Week Schedule route', () => {
  afterEach(async () => {
    await app.ready();
  });

  it('should return this json structure', async () => {
    const response = await app.inject({
      method: 'GET',
      url: 'http://localhost:8396/schedule',
      query: {
        isoWeek: '48',
        isoYear: '2022',
      },
    });

    const data = response.json();

    expect(data.ok).toBe(true);
    expect(data.name).toBe('SUCCESS_SCHEDULE_FOUND');
  });

  afterAll(async () => {
    await app.close();
  });
});
