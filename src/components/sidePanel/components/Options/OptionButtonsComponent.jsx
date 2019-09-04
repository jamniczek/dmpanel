import React, { Component } from "react";
import { Container, Button } from "./styles/Styles";

class ActionButtons extends Component {
  render() {
    const { toggleModal } = this.props;
    return (
      <Container>
        <Button
          onMouseOver={evt => {
            evt.target.classList.add("mouseOver");
          }}
          onMouseOut={evt => {
            evt.target.classList.remove("mouseOver");
          }}
          onClick={() => {
            toggleModal("addToken");
          }}
        >
          <span>Create Token</span>
        </Button>
        <Button
          onMouseOver={evt => {
            evt.target.classList.add("mouseOver");
          }}
          onMouseOut={evt => {
            evt.target.classList.remove("mouseOver");
          }}
        >
          <span>Options</span>
        </Button>
      </Container>
    );
  }
}

export default ActionButtons;
