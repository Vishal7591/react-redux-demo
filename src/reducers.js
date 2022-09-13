let initialState = { count: 0 };
export const reducers = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      count: state.count + 1
    };
  }
  if (action.type === "INCREMENT") {
    return {
      count: state.count - 1
    };
  }

  return state;
};
