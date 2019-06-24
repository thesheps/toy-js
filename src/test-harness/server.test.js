const request = require("supertest");
const app = require("./app");

describe("Test the root path", () => {
  test("It should return the test harness html page", done => {
    request(app)
      .get("/")
      .then(response => {
        expect(response.text).toContain("<!DOCTYPE html>");
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
