import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getTasks } from "./actions/tasks.action";

import TaskList from "./components/Tasks/TaskList";
import Form from "./components/Form/Form";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <div>
      <h1>App</h1>
      <TaskList />
      <Form />
    </div>
  );
};

export default App;
