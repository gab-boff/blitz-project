const reducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;

    case "CREATE":
      return [...state, action.payload];

    case "UPDATE":
      return state.map((task) =>
        task._id === action.payload._id ? action.payload : task
      );

    case "DELETE":
      return state.filter((task) => task._id !== action.payload._id);

    default:
      return state;
  }
};

export default reducer;
