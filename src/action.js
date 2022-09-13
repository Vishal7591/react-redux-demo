import * as types from "./actionTypes";
export const increment = () => {
  this.props.dispatch({
    type: types.INCREMENT,
  });
};
export const decrement = () => {
  this.props.dispatch({
    type: types.DECREMENT,
  });
};
