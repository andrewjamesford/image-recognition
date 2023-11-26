import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT || 3002,
  apiKey: process.env.VISION_KEY ? process.env.VISION_KEY : "",
  endpoint: process.env.VISION_ENDPOINT,
};
