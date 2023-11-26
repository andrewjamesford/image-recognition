import express from "express";
import config from "../config";
import fs from "fs";
import { Request, Response } from "express";

const computerVision = express.Router();

// type for the tag object
type Tag = {
  name: string;
  confidence: number;
};

computerVision.post("/getImageTags", async (req: Request, res: Response) => {
  // check if request body is empty
  if (!req) {
    res.status(400).json({ error: "No image url provided" });
    return;
  }
  // get image url from request body
  const imageUrl = req.body.imageUrl;

  const headersInit: HeadersInit = {
    "Content-Type": "application/json",
    "Ocp-Apim-Subscription-Key": config.apiKey,
  };
  // create object to send to computer vision api
  const init: RequestInit = {
    method: "POST",
    headers: headersInit,
    body: JSON.stringify({
      url: imageUrl,
    }),
  };
  const apiUrl = `${config.endpoint}computervision/imageanalysis:analyze?overload=stream&api-version=2023-02-01-preview&features=Tags`;
  const response = await fetch(apiUrl, init);

  const data = await response.json();
  if (data.error || data === undefined) {
    res.status(400).json({ error: data.error });
  }

  // Get data from response
  const tags: Tag[] = data?.tagsResult.values ? data.tagsResult.values : [];

  // Logic to create a new task
  // Access data from req.body
  // Save to database
  // res.status(200).json(data);
  res.status(200).json({ data: tags });
});

computerVision.get("/test", (req, res) => {
  const result = { message: "computerVision test" };

  // Logic to fetch task data from database
  // Send task data as response
  res.status(200).json(result);
});

export default computerVision;
