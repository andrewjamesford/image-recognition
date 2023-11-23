import request from "supertest";

import app from "../app";

describe("Computer Vision Router", () => {
  it("Should return image analysis", (done) => {
    const expected = { message: "Task is created" };
    request(app)
      .post("/api/v1/computervision/imageanalysis")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, expected, done);
  });

  it("Should get test", (done) => {
    const expected = { message: "computerVision test" };
    request(app)
      .get("/api/v1/computervision/test")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, expected, done);
  });
});
