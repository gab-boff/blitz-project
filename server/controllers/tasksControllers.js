import mongoose from "mongoose";
import TaskMessage from "../models/taskMessage.js";

export const getTasks = async (req, res) => {
  try {
    const taskMessages = await TaskMessage.find();

    res.status(200).json(taskMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  const body = req.body;

  const newTask = new TaskMessage(body);

  try {
    await newTask.save();

    res.status(201).json(newTask);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  const { id: _id } = req.params;
  const task = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("Nonexistent id");

  const updateTask = await TaskMessage.findByIdAndUpdate(
    _id,
    { ...task, _id },
    {
      new: true,
    }
  );

  res.json(updateTask);
};

export const deleteTask = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("Nonexistent id");

  await TaskMessage.findByIdAndRemove(id);

  res.json({ message: "Task deleted" });
};
