import express from "express";
import config from "../config";

const computerVision = express.Router();

computerVision.post("/getImageTags", async (req, res) => {
  // const { image } = req.body;
  const image =
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.v5IqxXoTPlVn9MK6qUcK-QHaE8%26pid%3DApi&f=1&ipt=2a110bc5b82ae462420540ecc84521dc8b60860317bb86d0d56680486696ff3c&ipo=images";
  console.log("apiKey", config.apiKey);

  const headersInit: HeadersInit = {
    "Content-Type": "application/json",
    "Ocp-Apim-Subscription-Key": config.apiKey,
  };
  const init: RequestInit = {
    method: "POST",
    headers: headersInit,
    body: JSON.stringify({
      url: image,
    }),
  };

  const apiUrl = `${config.endpoint}computervision/imageanalysis:analyze?api-version=2023-02-01-preview&features=Tags`;
  console.log("apiUrl", apiUrl);
  const response = await fetch(apiUrl, init);

  const data = await response.json();

  // Logic to create a new task
  // Access data from req.body
  // Save to database
  res.status(200).json(data);
});

computerVision.get("/test", (req, res) => {
  const result = { message: "computerVision test" };

  // Logic to fetch task data from database
  // Send task data as response
  res.status(200).json(result);
});

export default computerVision;
