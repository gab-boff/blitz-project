import React from "react";

// import moment from "moment";

import { useDispatch } from "react-redux";
import { deleteTask } from "../../../actions/tasks.action";

import { Button } from "react-bootstrap";

const Task = ({ task, setCurrentId }) => {
  const dispatch = useDispatch();

  return (
    <div className="border border-secondary p-3 rounded container-fluid">
      <h3>{`Título: ${task.title}`}</h3>
      <h4>{`Por: ${task.creator}`}</h4>
      <h4>
        Tarefa: <p>{task.task}</p>
      </h4>
      <Button onClick={() => setCurrentId(task._id)} className="pl-3 pr-3 m-1">
        Edit
      </Button>
      {/* <div>{moment(task.createdAt).fromNow()}</div> */}
      <Button
        onClick={() => {
          dispatch(deleteTask(task._id));
          window.location.reload();
        }}
        className="pl-3 pr-3 m-1"
      >
        Delete
      </Button>
    </div>
  );
};

export default Task;
