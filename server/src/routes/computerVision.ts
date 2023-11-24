import express from "express";
import multer from "multer";
import config from "../config";
import fs from "fs";

const computerVision = express.Router();

const upload = multer({ dest: "uploads/" });

computerVision.post(
  "/getImageTags",
  upload.single("imageFile"),
  async (req, res) => {
    if (!req.file) {
      res.status(400).json({ error: "No image file provided" });
      return;
    }
    const imageFilePath = req.file.path;
    const imageFileData = fs.readFileSync(imageFilePath);
    const imageBase64Data = Buffer.from(imageFileData).toString("base64");

    const imageFile =
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.v5IqxXoTPlVn9MK6qUcK-QHaE8%26pid%3DApi&f=1&ipt=2a110bc5b82ae462420540ecc84521dc8b60860317bb86d0d56680486696ff3c&ipo=images";

    const headersInit: HeadersInit = {
      "Content-Type": "application/json",
      "Ocp-Apim-Subscription-Key": config.apiKey,
    };
    const init: RequestInit = {
      method: "POST",
      headers: headersInit,
      body: JSON.stringify({
        url: imageBase64Data,
      }),
    };
    const apiUrl = `${config.endpoint}computervision/imageanalysis:analyze?overload=stream&api-version=2023-02-01-preview&features=Tags`;
    const response = await fetch(apiUrl, init);

    const data = await response.json();
    if (data.error) {
      res.status(400).json({ error: data.error });
    }

    // Logic to create a new task
    // Access data from req.body
    // Save to database
    // res.status(200).json(data);
    res.status(200).json({ message: "getImageTags", data: data });
  }
);

computerVision.get("/test", (req, res) => {
  const result = { message: "computerVision test" };

  // Logic to fetch task data from database
  // Send task data as response
  res.status(200).json(result);
});

export default computerVision;
