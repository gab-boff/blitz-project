import React from "react";

const Task = () => {
  const handleSubmite = () => {};

  return (
    <div>
      <form autoComplete="off" noValidate onSubmit={handleSubmite}>
        <input type="text" name="creator" />
      </form>
    </div>
  );
};

export default Task;
