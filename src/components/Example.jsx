import React, { Component } from "react";

import { connect } from "react-redux";
import { setText } from "../actions/example";

class Example extends Component {
  render() {
    return (
      <div className="App">
        {this.props.text}
        <button
          onClick={() => {
            this.props.dispatch(setText("Hello"));
          }}
        >
          Hello
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    text: state.text
  };
};
const ConnectedExample = connect(mapStateToProps)(Example);

export { ConnectedExample };
