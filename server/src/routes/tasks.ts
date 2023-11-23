import express from "express";

const tasks = express.Router();

tasks.post("/", (req, res) => {
  const result = { message: "Task is created" };
  // Logic to create a new task
  // Access data from req.body
  // Save to database
  res.status(201).json(result);
});

tasks.get("/:id", (req, res) => {
  const taskId = req.params.id;

  const result = { id: taskId, name: "John Doe" };
  // Logic to fetch task data from database
  // Send task data as response
  res.status(200).json(result);
});

tasks.get("/", (req, res) => {
  const result = [
    {
      id: 1,
      name: "John Doe",
    },
    {
      id: 2,
      name: "Sam Smith",
    },
  ];

  // Logic to fetch task data from database
  // Send task data as response
  res.status(200).json(result);
});

tasks.put("/:id", (req, res) => {
  const taskId = req.params.id;
  const result = { message: `Task ${taskId} has been updated` };
  // Logic to update a task
  // Access data from req.body
  // Update task in database
  res.status(200).json(result);
});

tasks.delete("/:id", (req, res) => {
  const taskId = req.params.id;
  const result = { message: `Task ${taskId} has been deleted` };
  // Logic to delete a task
  // Delete task from database
  res.status(200).json(result);
});

export default tasks;
