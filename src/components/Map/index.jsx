import React, { PureComponent } from 'react';
import { Stage, Layer } from 'react-konva';
import { connect, ReactReduxContext, Provider } from 'react-redux';
import uuid from 'uuid';
import { createRect, resizeRect, appendRect } from '../../actions/rectActions';
import { ConnectedCover } from './Cover';

class Map extends PureComponent {
  handleMouseDown = (event) => {
    const { dispatch } = this.props;
    const { clientX, clientY } = event.evt;
    dispatch(
      createRect({
        x: clientX,
        y: clientY,
        width: 0,
        height: 0,
        id: uuid(),
        groupId: '1'
      })
    );
  };

  handleMouseMove = (event) => {
    const { dispatch } = this.props;
    const { clientX, clientY } = event.evt;
    dispatch(resizeRect({ x: clientX, y: clientY }));
  };

  handleMouseUp = () => {
    this.props.dispatch(appendRect());
  };

  render() {
    return (
      <ReactReduxContext.Consumer>
        {({ store }) => (
          <Stage
            width={960}
            height={540}
            onMouseDown={this.handleMouseDown}
            onMouseMove={this.handleMouseMove}
            onMouseUp={this.handleMouseUp}
          >
            <Provider store={store}>
              <Layer>
                {this.props.rects.map(({ x, y, width, height, groupId }) => (
                  <ConnectedCover
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                    groupId={groupId}
                  />
                ))}
              </Layer>
            </Provider>
          </Stage>
        )}
      </ReactReduxContext.Consumer>
    );
  }
}

const mapStateToProps = (state) => ({
  rects: state.rects
});

const ConnectedMap = connect(mapStateToProps)(Map);

export { ConnectedMap };
