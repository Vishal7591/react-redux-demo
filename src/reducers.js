import * as types from "./actionTypes";

let initialState = { count: 0 };
export const reducers = (state = initialState, action) => {
  if (action.type === types.INCREMENT) {
    return {
      count: state.count + 1,
    };
  }
  if (action.type === types.DECREMENT) {
    return {
      count: state.count - 1,
    };
  }

  return state;
};
