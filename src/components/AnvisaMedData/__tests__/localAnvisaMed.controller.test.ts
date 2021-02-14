import { responseControllerMock } from "./__mocks__/localAnvisaMedServiceMock";
import request from 'supertest';
import app from "../../../app";

jest.mock("../localAnvisaMed.service", () => {
  return {
    findFiltered: jest.fn().mockImplementation((filter, value) => {
      if (filter === 'EAN 1' && value === '7891106000956')
        return Promise.resolve(responseControllerMock);
      else
        return Promise.resolve([]);
    })
  };
});


describe("CONTROLLER: Med Anvisa Price", () => {
  it("Should return mocked", async (done) => {
    const res = await request(app)
      .get('/medication')
      .query({
        filter: 'EAN 1',
        value: '7891106000956'
      })
      .send();
    expect(res.body.data).toEqual(responseControllerMock);
    expect(res.body.rows).toBe(1);
    expect(res.body.status).toBe('ok');
    expect(res.status).toBe(200);
    done();
  });
});
