import request from "supertest";

import app from "../app";

describe("Computer Vision Router", () => {
  it("Should return image analysis", (done) => {
    const expected = {
      data: [
        { name: "vehicle", confidence: 0.998054563999176 },
        { name: "land vehicle", confidence: 0.9960635304450989 },
        { name: "wheel", confidence: 0.9911214709281921 },
        { name: "transport", confidence: 0.9910901784896851 },
        { name: "car", confidence: 0.9878605604171753 },
        { name: "automotive design", confidence: 0.9745607376098633 },
        { name: "sky", confidence: 0.959567666053772 },
        { name: "alloy wheel", confidence: 0.9382985830307007 },
        { name: "outdoor", confidence: 0.9301073551177979 },
        { name: "sports car", confidence: 0.9255248308181763 },
        { name: "tire", confidence: 0.9215425252914429 },
        { name: "city car", confidence: 0.909125804901123 },
        { name: "luxury vehicle", confidence: 0.9041302800178528 },
        { name: "mid-size car", confidence: 0.9032028913497925 },
        { name: "red", confidence: 0.8980225324630737 },
        { name: "road", confidence: 0.881583571434021 },
        { name: "performance car", confidence: 0.8774687051773071 },
        { name: "rim", confidence: 0.8680191040039062 },
        { name: "hood", confidence: 0.8543214797973633 },
        { name: "sports sedan", confidence: 0.852562427520752 },
        { name: "coupa", confidence: 0.8444720506668091 },
      ],
    };

    const imageUrl =
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.UREsdoBZ9x1lK0pbglOlsQHaE7%26pid%3DApi&f=1&ipt=cfbbb4784bac8d2a9ba6e04b67427796df7113619459c43e1a7d3a8c96462c3c&ipo=images";
    request(app)
      .post(`/api/v1/computervision/getImageTags`)
      .send({
        imageUrl: imageUrl,
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, expected, done);
  });

  it("Should NOT return image analysis", (done) => {
    const expected = {
      error: {
        code: "InvalidRequest",
        message: "Image format is not valid.",
        innererror: {
          code: "InvalidImageFormat",
          message: "Input data is not a valid image.",
        },
      },
    };
    const imageUrl = "https://duckduckgo.com";
    request(app)
      .post(`/api/v1/computervision/getImageTags`)
      .send({
        imageUrl: imageUrl,
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400, expected, done);
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
