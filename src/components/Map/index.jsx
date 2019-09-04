import React, { PureComponent } from 'react';
import { Stage, Layer } from 'react-konva';
import { connect } from 'react-redux';
import { appendRect, resizeRect } from '../../actions/rectActions';
import { Cover } from './Cover';

class Map extends PureComponent {
  handleMouseDown = (event) => {
    console.log('elo', this.props);
    const { dispatch } = this.props;
    const { clientX, clientY } = event.evt;
    dispatch(
      appendRect({ x: clientX, y: clientY, width: 0, height: 0, id: 'test' })
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
        onMouseUp={(event) => console.log(event.evt.clientX, event.evt.clientY)}
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
