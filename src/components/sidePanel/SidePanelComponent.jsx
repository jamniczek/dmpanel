import React from 'react';
import { Stage, Layer, Text } from 'react-konva';
import { connect } from 'react-redux';
import SidePanelWrapper from './styles/SidePanelWrapper';
import GenericToken from '../common/tokens/GenericToken';
import Options from './components/Options/OptionButtonsComponent';
import { toggleModal } from '../../actions/modals';

class SidePanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 750,
      showTooltip: false,
      tooltipContent: '',
      mousePos: { x: 0, y: 0 }
    };
    this.sideWrapper = React.createRef();
    this.setDimensions = this.setDimensions.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.setMousePos = this.setMousePos.bind(this);
  }

  setMousePos(evt) {
    const {
      evt: { layerX: x, layerY: y }
    } = evt;
    this.setState({ ...this.state, mousePos: { x, y } });
  }

  componentDidMount() {
    this.setDimensions();
    window.addEventListener('resize', this.setDimensions);
  }

  onMouseOut(event, tokenState) {
    this.setState({ showTooltip: false, tooltipContent: '' });
  }

  onMouseOver(event, tokenState) {
    this.setState({ showTooltip: true, tooltipContent: tokenState.maxHP });
  }

  setDimensions() {
    const { height, width } = this.sideWrapper.current.getBoundingClientRect();
    this.setState({ height, width });
  }

  paintTokens() {
    const { height, width } = this.state;
    return this.props.tokens.map((tokenProps) => (
      <>
        <GenericToken
          onMouseOver={(event, tokenState) => this.onMouseOver(event, tokenState)}
          onMouseOut={this.onMouseOut}
          key={tokenProps.id}
          draggable
          x={width / 2}
          y={height / 2}
          {...tokenProps}
        />
      </>
    ));
  }

  render() {
    const { toggleModal, width, height, } = this.props;
    const {
      tokens,
      mousePos: { x, y },
      showTooltip,
      tooltipContent
    } = this.state;
    return (
      <>
        {/* <SidePanelWrapper ref={this.sideWrapper}>
          <Options tokens={tokens} toggleModal={toggleModal} />
          <Stage
            width={width}
            height={height - 66}
            onMouseMove={this.setMousePos}
          > */}
        <Layer>
          {this.paintTokens()}
          {showTooltip && (
          <Text text={tooltipContent} x={x + 15} y={y + 15} />
          )}
        </Layer>
        {/* </Stage>
        </SidePanelWrapper> */}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  tokens: state.tokens
});

export default connect(
  mapStateToProps,
  { toggleModal }
)(SidePanel);
