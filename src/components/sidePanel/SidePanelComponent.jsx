import React from "react";
import SidePanelWrapper from "./styles/SidePanelWrapper";
import { Stage, Layer } from "react-konva";
import GenericToken from "../common/tokens/GenericToken";
import Options from "./components/Options/OptionButtonsComponent";
import { toggleModal } from "../../actions/modals";
import { connect } from "react-redux";

class SidePanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 750
    };
    this.sideWrapper = React.createRef();
    this.setDimensions = this.setDimensions.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  componentDidMount() {
    this.setDimensions();
    window.addEventListener("resize", this.setDimensions);
  }

  onMouseOver(event, tokenState, tokenRef) {
    this.setState({ ...this.state, tooltipBoundary: tokenRef });
    this.toggleTooltip();
  }

  setDimensions() {
    const { height, width } = this.sideWrapper.current.getBoundingClientRect();
    this.setState({ height, width });
  }

  paintTokens() {
    const { height, width } = this.state;
    return this.props.tokens.map(tokenProps => {
      return (
        <GenericToken
          onMouseOver={(event, tokenState) => {
            this.onMouseOver(event, tokenState);
          }}
          key={tokenProps.id}
          draggable
          x={width / 2}
          y={height / 2}
          {...tokenProps}
        ></GenericToken>
      );
    });
  }

  render() {
    const { toggleModal } = this.props;
    const { width, height, tokens } = this.state;
    return (
      <>
        <SidePanelWrapper ref={this.sideWrapper}>
          <Options tokens={tokens} toggleModal={toggleModal} />
          <Stage width={width} height={height - 66}>
            <Layer>{this.paintTokens()}</Layer>
          </Stage>
        </SidePanelWrapper>
      </>
    );
  }
}

const mapStateToProps = state => ({
  tokens: state.tokens
});

export default connect(
  mapStateToProps,
  { toggleModal }
)(SidePanel);
