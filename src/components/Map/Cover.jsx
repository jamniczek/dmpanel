import React, { Component } from 'react';
import { Rect } from 'react-konva';
import { connect } from 'react-redux';
// import { addRect } from '../actions/example';

// class Cover extends Component {
//   handleClick = () => {
//     this.setState({
//       color: 'red'
//     });
//   };
//   render() {
//     return (
//       <Rect
//         x={20}
//         y={20}
//         width={50}
//         height={50}
//         fill="#000"
//         onClick={this.handleClick}
//       />
//     );
//   }
// }

const Cover = ({ x, y, width, height }) => (
  <Rect x={x} y={y} width={width} height={height} fill="#000" />
);

const mapStateToProps = (state) => {
  return {
    rect: state.rects
  };
};
const ConnectedExample = connect(mapStateToProps)(Cover);

export { Cover };
