import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./action";

class ClassBased extends PureComponent {
  render() {
    return (
      <center>
        <h1>0</h1>
        <button onClick={increment} style={{ marginRight: "10px" }}>
          increment
        </button>
        <button onClick={decrement}>decrement</button>
      </center>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(ClassBased);
