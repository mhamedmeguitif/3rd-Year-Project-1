import React, { Component } from "react";

import { Menu, Input, Icon, Button, Form } from "semantic-ui-react";
import "./Nav.css";
import ModelLogin from "./LoginModel";
import RegisterModal from "./RegisterModal";

export default class MenuExampleStackable extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div className="test">
        <Menu stackable>
          <Menu.Item header>ESI SBA</Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item
              name="Log-in"
              active={activeItem === "sign-in"}
              onClick={this.handleItemClick}
            >
              <ModelLogin />
            </Menu.Item>
            <Menu.Item
              name="Log-in"
              active={activeItem === "sign-in"}
              onClick={this.handleItemClick}
            >
              <RegisterModal />
            </Menu.Item>

            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
