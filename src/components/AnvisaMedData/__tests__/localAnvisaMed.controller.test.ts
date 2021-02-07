import { findFiltered } from "../localAnvisaMed.service";

jest.mock("../localAnvisaMed.service", () => {
  return {
    findFiltered: jest.fn().mockImplementation(() => {
      return Promise.resolve("Aheia");
    })
  };
});

describe("CONTROLLER: Med Anvisa Price", () => {
  it("Should return mocked", async (done) => {

    expect(await findFiltered("REGISTRO", "1705600230032")).toBe(null);
    done();
  });
});
