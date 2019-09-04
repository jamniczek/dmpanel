import React, { Component } from "react";

import { Circle } from "react-konva";

class GenericToken extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onDragEnd = this.onDragEnd.bind(this);
    this.ref = React.createRef();
  }

  componentDidMount() {
    const { onMouseOver, ...props } = this.props;
    this.setState({ ...props });
  }

  onDragEnd(e) {
    const {
      currentTarget: {
        attrs: { x, y }
      }
    } = e;
    this.setState(state => {
      this.takeStateDump();
      return { ...state, x, y };
    });
  }

  takeStateDump() {
    console.log(this.state);
  }

  render() {
    const { Component, onMouseOver, ...rest } = this.props;
    return (
      <>
        <Circle
          ref={this.ref}
          onMouseOver={evt => {
            return onMouseOver(evt, this.state, this.ref);
          }}
          onDragEnd={this.onDragEnd}
          {...rest}
        />
      </>
    );
  }
}

export default GenericToken;
