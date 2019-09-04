import React, { Component } from "react";
import {
  Button,
  ModalHeader,
  ModalBody,
  ModalFooter,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import { addToken } from "../../../../../actions/tokenActions";

function generateID(count) {
  const symbols = "abcdefghijklmnopqrstuvwxyz123456789";

  return Array.from(new Array(count))
    .map(e => symbols[parseInt(Math.random() * symbols.length)])
    .join("");
}

class AddTokenOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Component: "Circle",
      name: "",
      maxHP: 10,
      radius: 20,
      fill: "white",
      stroke: "black",
      strokeWidth: 2,
      id: generateID(15)
    };
    this.changeStateValue = this.changeStateValue.bind(this);
  }

  changeStateValue(key, value) {
    this.setState({ [key]: value });
  }

  render() {
    const { toggleModal, addToken } = this.props;
    return (
      <>
        <ModalHeader>Create new token</ModalHeader>
        <ModalBody>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Name</InputGroupText>
            </InputGroupAddon>
            <Input
              required
              onChange={evt =>
                this.changeStateValue("name", String(evt.target.value))
              }
            />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Max HP</InputGroupText>
            </InputGroupAddon>
            <Input
              type="number"
              required
              onChange={evt =>
                this.changeStateValue("maxHP", Number(evt.target.value))
              }
            />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Radius</InputGroupText>
            </InputGroupAddon>
            <Input
              type="number"
              defaultValue={20}
              onChange={evt =>
                this.changeStateValue("radius", Number(evt.target.value))
              }
            />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Fill</InputGroupText>
            </InputGroupAddon>
            <Input
              type="color"
              defaultValue="white"
              onChange={evt =>
                this.changeStateValue("fill", String(evt.target.value))
              }
            />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Stroke</InputGroupText>
            </InputGroupAddon>
            <Input
              type="color"
              defaultValue="black"
              onChange={evt =>
                this.changeStateValue("stroke", String(evt.target.value))
              }
            />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Stroke Width</InputGroupText>
            </InputGroupAddon>
            <Input
              type="number"
              defaultValue={2}
              onChange={evt =>
                this.changeStateValue("strokeWidth", Number(evt.target.value))
              }
            />
          </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => {
              addToken(this.state);
              toggleModal("addToken");
            }}
          >
            Create
          </Button>
          <Button
            onClick={() => {
              toggleModal("addToken");
            }}
          >
            Cancel
          </Button>
        </ModalFooter>
      </>
    );
  }
}

export default connect(
  null,
  { addToken }
)(AddTokenOptions);
