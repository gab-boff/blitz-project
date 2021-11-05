import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  title: String,
  task: String,
  creator: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const TaskMessage = mongoose.model("TaskMessage", taskSchema);

export default TaskMessage;
