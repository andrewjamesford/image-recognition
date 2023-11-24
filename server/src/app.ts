import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import tasks from "./routes/tasks";
import computerVision from "./routes/computerVision";

const app = express();
app.use(bodyParser.json({ limit: "4mb" }));
app.use(bodyParser.urlencoded({ limit: "4mb", extended: true }));
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

app.get("/", ({}, res) => {
  res.json({ message: "Hello World" });
});

app.use("/api/v1/tasks/", tasks);
app.use("/api/v1/computerVision/", computerVision);

export default app;
