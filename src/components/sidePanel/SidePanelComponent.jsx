import React, { Component } from 'react';
import SidePanelWrapper from './styles/SidePanelWrapper';
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';
import OptionButtons from './components/OptionButtons/OptionButtonsComponent';
import GenericToken from '../common/tokens/GenericToken';

export default class SidePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 750,
      tokens: []
    };
    this.sideWrapper = React.createRef();
    // this.addToken = this.addToken.bind(this);
  }

  addToken = () => {
    const { tokens, width, height } = this.state;
    tokens.push(<GenericToken x={width / 2} y={height / 2} />);
    this.setState({ tokens });
  };

  componentDidMount() {
    const { height, width } = this.sideWrapper.current.getBoundingClientRect();
    this.setState({ height, width });
  }

  render() {
    const { width, height, tokens } = this.state;
    return (
      <SidePanelWrapper ref={this.sideWrapper}>
        <OptionButtons addToken={this.addToken} />
        <Stage width={width} height={height}>
          {tokens.map((token) => {
            const { width, height, x, y } = token;
            return (
              <Layer width={width} height={height} draggable x={x} y={y}>
                {token}
              </Layer>
            );
          })}
        </Stage>
      </SidePanelWrapper>
    );
  }
}
