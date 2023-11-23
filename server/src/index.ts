import app from "./app";
import * as dotenv from "dotenv";
import config from "./config";

dotenv.config();

const port = config.port;

app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});
