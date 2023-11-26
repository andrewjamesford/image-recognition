import express from "express";
import cors from "cors";
import tasks from "./routes/tasks";
import computerVision from "./routes/computerVision";

const app = express();
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

app.get("/", ({}, res) => {
  res.json({ message: "Hello World" });
});

app.use("/api/v1/tasks/", tasks);
app.use("/api/v1/computerVision/", computerVision);

export default app;
