import React, { PureComponent } from 'react';
import { Stage, Layer } from 'react-konva';
import { connect } from 'react-redux';
import { appendRect, resizeRect } from '../../actions/rectActions';
import { Cover } from './Cover';
import uuid from 'uuid';

class Map extends PureComponent {
  handleMouseDown = (event) => {
    console.log('elo', this.props);
    const { dispatch } = this.props;
    const { clientX, clientY } = event.evt;
    dispatch(
      appendRect({ x: clientX, y: clientY, width: 0, height: 0, id: uuid() })
    );
  };

  handleMouseUp = (event) => {
    console.log('bye', this.props);
    const { dispatch } = this.props;
    const { clientX, clientY } = event.evt;
    dispatch(resizeRect({ x: clientX, y: clientY }));
  };
  render() {
    console.log(this.props, 'elo');
    return (
      <Stage
        width={960}
        height={540}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
      >
        <Layer>
          {this.props.rects.map(({ x, y, width, height }) => (
            <Cover x={x} y={y} width={width} height={height} />
          ))}
        </Layer>
      </Stage>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    rects: state.rects
  };
};
const ConnectedMap = connect(mapStateToProps)(Map);

export { ConnectedMap };
