import React from "react";

// import moment from "moment";

const Task = ({ task, setCurrentId }) => {
  return (
    <div>
      <div>{task.title}</div>
      <div>{task.creator}</div>
      <div>{task.task}</div>
      <button onClick={() => setCurrentId(task._id)}>Edit</button>
      {/* <div>{moment(task.createdAt).fromNow()}</div> */}
    </div>
  );
};

export default Task;
