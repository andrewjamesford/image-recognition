import request from "supertest";

import app from "../app";

describe("Tasks Router", () => {
  it("Should create a new task", (done) => {
    const expected = { message: "Task is created" };
    request(app)
      .post("/api/v1/tasks/")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(201, expected, done);
  });

  it("should get task by id", (done) => {
    const expected = { id: "1", name: "John Doe" };
    request(app)
      .get("/api/v1/tasks/1")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, expected, done);
  });

  it("should get all tasks", (done) => {
    const expected = [
      {
        id: 1,
        name: "John Doe",
      },
      {
        id: 2,
        name: "Sam Smith",
      },
    ];
    request(app)
      .get("/api/v1/tasks/")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, expected, done);
  });

  it("Should update a new task", (done) => {
    const expected = { message: `Task 5 has been updated` };
    request(app)
      .put("/api/v1/tasks/5")
      .set("Accept", "application/json")
      .expect(200, expected, done);
  });

  it("Should delete a task", (done) => {
    const expected = { message: `Task 6 has been deleted` };
    request(app)
      .delete("/api/v1/tasks/6")
      .set("Accept", "application/json")
      .expect(200, expected, done);
  });
});
