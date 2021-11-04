import axios from "axios";

const url = "http://localhost:5000";

export const fecthTasks = () => axios.get(url);
export const createTask = (newTask) => axios.post(`${url}/posts`, newTask);
