import React, { PureComponent } from 'react';
import { Rect } from 'react-konva';
import PropTypes from 'prop-types';
import { connect, ReactReduxContext } from 'react-redux';
import { removeRects } from '../../actions/rectActions';

class Cover extends PureComponent {
  handleOnClick = () => {
    const { dispatch, groupId } = this.props;
    console.log(groupId);
    dispatch(removeRects(groupId));
  };
  render() {
    const { x, y, width, height } = this.props;
    return (
      <Rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill="#000"
        onClick={this.handleOnClick}
      />
    );
  }
}

Cover.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number
};

Cover.defaultProps = {
  x: 0,
  y: 0,
  width: 0,
  height: 0
};

const mapStateToProps = (state, ownProps) => ({
  rects: state.rects
});

const ConnectedCover = connect(mapStateToProps)(Cover);

export { ConnectedCover };
