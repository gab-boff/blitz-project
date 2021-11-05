import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { getTasks } from "./actions/tasks.action";

import TaskList from "./components/Tasks/TaskList";
import Form from "./components/Form/Form";

const App = () => {
  const [currentId, setCurrentId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, [currentId, dispatch]);

  return (
    <div>
      <Form currentId={currentId} setCurrentId={setCurrentId} />
      <TaskList setCurrentId={setCurrentId} />
    </div>
  );
};

export default App;
