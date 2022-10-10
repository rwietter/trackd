/* eslint-disable no-undef */
import { app } from '../../lib/app';

let token = ``;
const email = `mauriciobw${Math.floor(Math.random() * 100)}@gmail.com`;
const password = `12345678`;
const name = `Mauricio`;

describe(`Admin routes`, () => {
  afterEach(async () => {
    await app.ready();
  });

  it(`Should admin signup`, async () => {
    const response = await app.inject({
      method: `POST`,
      url: `http://localhost:8396/admin/signup`,
      payload: {
        email,
        password,
        name,
      },
    });

    expect(response.statusCode).toBe(200);
  });

  it(`Should admin signin`, async () => {
    const response = await app.inject({
      method: `POST`,
      url: `http://localhost:8396/admin/signin`,
      payload: {
        email,
        password,
      },
    });

    token = response.json().token;

    expect(response.statusCode).toBe(200);
  });

  it(`should to create schedule`, async () => {
    const response = await app.inject({
      method: `POST`,
      url: `http://localhost:8396/admin/create-schedule`,
      payload: {
        day: `08`,
        month: `09`,
        year: `2022`,
        week: {
          monday: `5`,
          tuesday: `5`,
          wednesday: `5`,
          thursday: `5`,
          friday: `4`,
        },
        weekAvailable: {
          monday: `2`,
          tuesday: `3`,
          wednesday: `4`,
          thursday: `5`,
          friday: `0`,
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
