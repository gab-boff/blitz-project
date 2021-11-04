import React, { useState } from "react";

const Form = () => {
  const [taskData, setTaskData] = useState({
    title: "",
    task: "",
    creator: "",
  });

  const handleSubmite = () => {};

  return (
    <div>
      <form autoComplete="off" noValidate onSubmit={handleSubmite}>
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
    </div>
  );
};

export default Form;
