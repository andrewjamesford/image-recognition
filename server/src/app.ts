import express from "express";
import tasks from "./routes/tasks";

const app = express();
app.use(express.json());

app.get("/", ({}, res) => {
  res.json({ message: "Hello World" });
});

app.use("/api/v1/tasks/", tasks);

export default app;
