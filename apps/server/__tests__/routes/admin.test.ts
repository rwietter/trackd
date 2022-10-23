/* eslint-disable no-undef */
import { app } from '../../lib/app';

let token = '';
const email = `mauriciobw${Math.floor(Math.random() * 100)}@gmail.com`;
const password = '12345678';
const name = 'Mauricio';

describe('Admin routes', () => {
  afterEach(async () => {
    await app.ready();
  });

  it('Should admin signup', async () => {
    const response: any = await app.inject({
      method: 'POST',
      url: 'http://localhost:3000/admin/signup',
      payload: {
        email,
        password,
        name,
      },
    });

    const res = response.json();

    expect(response.statusCode).toBe(201);
    expect(res.ok).toBe(true);
  });

  it('Should admin signin', async () => {
    const response: any = await app.inject({
      method: 'POST',
      url: 'http://localhost:3000/admin/signin',
      payload: {
        email,
        password,
      },
    });
    const res = response.json();
    token = res.payload.token;

    expect(typeof res.payload.token).toBe('string');
    expect(response.statusCode).toBe(200);
    expect(res.ok).toBe(true);
  });

  it('should to create schedule', async () => {
    const response: any = await app.inject({
      method: 'POST',
      url: 'http://localhost:3000/admin/create-schedule',
      payload: {
        isoWeek: String(Math.round(Math.random() * 57)),
        isoYear: String(Math.round(Math.random() * 2025)),
        week: {
          monday: String(Math.round(Math.random() * 10)),
          tuesday: String(Math.round(Math.random() * 10)),
          wednesday: String(Math.round(Math.random() * 10)),
          thursday: String(Math.round(Math.random() * 10)),
          friday: String(Math.round(Math.random() * 10)),
        },
        weekAvailable: {
          monday: String(Math.round(Math.random() * 5)),
          tuesday: String(Math.round(Math.random() * 5)),
          wednesday: String(Math.round(Math.random() * 5)),
          thursday: String(Math.round(Math.random() * 5)),
          friday: String(Math.round(Math.random() * 5)),
        },
      },
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    expect(response.statusCode).toBe(201);
  });

  afterAll(async () => {
    await app.close();
  });
});
