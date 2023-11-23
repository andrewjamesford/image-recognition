import request from "supertest";

import app from "../app";

describe("Computer Vision Router", () => {
  it("Should return image analysis", (done) => {
    const expected = {
      modelVersion: "2023-02-01-preview",
      metadata: { width: 474, height: 316 },
      tagsResult: {
        values: [
          { name: "vehicle", confidence: 0.9952896237373352 },
          { name: "land vehicle", confidence: 0.9946422576904297 },
          { name: "wheel", confidence: 0.9885607957839966 },
          { name: "car", confidence: 0.977277398109436 },
          { name: "tire", confidence: 0.9688079357147217 },
          { name: "city car", confidence: 0.9545201063156128 },
          { name: "automotive design", confidence: 0.9258102178573608 },
          { name: "outdoor", confidence: 0.9158064126968384 },
          { name: "hatchback", confidence: 0.915408730506897 },
          { name: "alloy wheel", confidence: 0.9092137217521667 },
          { name: "bumper", confidence: 0.906722903251648 },
          { name: "auto part", confidence: 0.8922797441482544 },
          { name: "mazda", confidence: 0.8874824643135071 },
          { name: "rim", confidence: 0.8842110633850098 },
          { name: "compact car", confidence: 0.8772927522659302 },
          { name: "subcompact car", confidence: 0.8759688138961792 },
          { name: "hyundai", confidence: 0.873110294342041 },
          { name: "transport", confidence: 0.8651080131530762 },
          { name: "hood", confidence: 0.8632758855819702 },
          { name: "hot hatch", confidence: 0.8611188530921936 },
          { name: "scion", confidence: 0.8602896928787231 },
          { name: "nissan", confidence: 0.8489663004875183 },
          { name: "supermini", confidence: 0.8484306335449219 },
          { name: "blue", confidence: 0.6438427567481995 },
        ],
      },
    };
    request(app)
      .post("/api/v1/computervision/getImageTags")
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
