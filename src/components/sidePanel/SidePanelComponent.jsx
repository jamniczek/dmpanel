import React, { Component } from "react";
import Konva from "konva";
import SidePanelWrapper from "./styles/SidePanelWrapper";
import { Stage, Layer, Rect, Text, Circle, Line } from "react-konva";

export default class SidePanel extends Component {
  state = {
    herebenothing: false
  };
  sideWrapper = React.createRef();

  componentDidMount() {}

  render() {
    const { renderWidth = 300, renderHeight = 600 } = this.props;
    return (
      <SidePanelWrapper ref={this.sideWrapper}>
        <Stage width={renderWidth} height={renderHeight}>
          <Layer></Layer>
        </Stage>
      </SidePanelWrapper>
    );
  }
}
