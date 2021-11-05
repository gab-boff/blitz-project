import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createTask, updateTask } from "../../actions/tasks.action";

const Form = ({ currentId, setCurrentId }) => {
  const [taskData, setTaskData] = useState({
    title: "",
    task: "",
    creator: "",
  });

  const task = useSelector((state) =>
    currentId ? state.tasks.find((t) => t._id === currentId) : null
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (task) setTaskData(task);
  }, [task]);

  const handleSubmite = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updateTask(currentId, taskData));
    } else {
      dispatch(createTask(taskData));
    }

    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setTaskData({
      title: "",
      task: "",
      creator: "",
    });
  };

  return (
    <div>
      <form autoComplete="off" noValidate onSubmit={handleSubmite}>
        <h3>{currentId ? "Editing" : "Creating"} a Task</h3>
        <input
          type="text"
          name="creator"
          placeholder="Creator"
          label="Creator"
          value={taskData.creator}
          onChange={(e) =>
            setTaskData({ ...taskData, creator: e.target.value })
          }
        />

        <input
          type="text"
          name="title"
          placeholder="Title"
          label="Title"
          value={taskData.title}
          onChange={(e) => setTaskData({ ...taskData, title: e.target.value })}
        />

        <input
          type="text"
          name="task"
          placeholder="Task"
          label="Task"
          value={taskData.task}
          onChange={(e) => setTaskData({ ...taskData, task: e.target.value })}
        />

        <button type="submit">Submit</button>
      </form>
      <button onClick={clear}>Clear</button>
    </div>
  );
};

export default Form;
