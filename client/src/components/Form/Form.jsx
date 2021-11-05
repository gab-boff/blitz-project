import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createTask, updateTask } from "../../actions/tasks.action";

import { Button } from "react-bootstrap";

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
      <form
        autoComplete="off"
        noValidate
        onSubmit={handleSubmite}
        className=" col-md-6 col-md-offset-3 column"
      >
        <h3>{currentId ? "Editing" : "Creating"} a Task</h3>

        <input
          className="input-group-text mb-3"
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
          className="input-group-text mb-3"
          type="text"
          name="title"
          placeholder="Title"
          label="Title"
          value={taskData.title}
          onChange={(e) => setTaskData({ ...taskData, title: e.target.value })}
        />

        <input
          className="input-group-text mb-3"
          type="text"
          name="task"
          placeholder="Task"
          label="Task"
          value={taskData.task}
          onChange={(e) => setTaskData({ ...taskData, task: e.target.value })}
        />

        <Button type="submit">Submit</Button>
      </form>
      {/* <Button onClick={clear} className="">
        Clear
      </Button> */}
    </div>
  );
};

export default Form;
