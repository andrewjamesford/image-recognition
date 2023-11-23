import request from "supertest";

import app from "./app";

describe("Tasks Router", () => {
  it("should get hello world", (done) => {
    // Expected value to test
    const expected = { message: "Hello World" };
    request(app)
      .get("/")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, expected, done);
  });
});
