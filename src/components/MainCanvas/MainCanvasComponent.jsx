import React, { useState, useEffect } from 'react';
import { Stage, Layer, Text, Group } from 'react-konva';
import Konva from 'konva';
import { connect } from 'react-redux';
import SidePanelLayer from '../sidePanel/SidePanelComponent';

Konva.

const MainCanvas = (props) => {
  const [state, setState] = useState({
    width: 1200,
    height: 700,
    showTooltip: false,
    tooltipContent: '',
    mousePos: { x: 0, y: 0 }
  });

  const setMousePos = (evt) => {
    const {
      evt: { layerX: x, layerY: y }
    } = evt;
    setState({ ...state, mousePos: { x, y } });
  };

  return (
    <Stage
      width={1200}
      height={700}
      onMouseMove={setMousePos}
    >
      <SidePanelLayer width={state.width} height={state.height} />
    </Stage>
  );
};

export default MainCanvas;
