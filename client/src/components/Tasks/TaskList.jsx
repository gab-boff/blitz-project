import React from "react";
import Task from "./Task/Task";
import { useSelector } from "react-redux";

const TaskList = ({ setCurrentId }) => {
  const tasks = useSelector((state) => state.tasks);
  console.log(tasks);

  return !tasks.length ? (
    <p>No tasks</p>
  ) : (
    <div>
      {tasks.map((task) => (
        <div key={task._id}>
          <Task task={task} setCurrentId={setCurrentId} />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
