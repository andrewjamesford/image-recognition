import dotenv from "dotenv";

dotenv.config();

console.log("ENV", process.env);

export default {
  port: process.env.PORT || 3001,
  apiKey: process.env.VISION_KEY ? process.env.VISION_KEY : "",
  endpoint: process.env.VISION_ENDPOINT,
};
