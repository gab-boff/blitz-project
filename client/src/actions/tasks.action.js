import * as api from "../api/api";

export const getTasks = () => async (dispatch) => {
  try {
    const { data } = await api.fecthTasks();

    dispatch({
      type: "FETCH_ALL",
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
