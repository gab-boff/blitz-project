import React from "react";
import Task from "./Task/Task";
import { useSelector } from "react-redux";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  console.log(tasks);

  return (
    <>
      <h1>Task List</h1>
      <Task />
      <Task />
    </>
  );
};

export default TaskList;
