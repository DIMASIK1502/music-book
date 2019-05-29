import React, { Component } from "react";
import { Menu, Dropdown, Icon, Avatar } from "antd";
import Cookie from "js-cookie";

import "antd/es/menu/style/css";
import "antd/es/dropdown/style/css";
import "antd/es/avatar/style/css";
import "antd/es/icon/style/css";

import "./Header.scss";

const menu = (
  <Menu>
    <Menu.Item key="0">Выход</Menu.Item>
  </Menu>
);

export default class Header extends Component {
  state = {
    user: "noname"
  };
  componentDidMount() {
    const { user } = this.props;
    const cacheUser = Cookie.getJSON("user");
    this.setState({ user: user ? user : cacheUser ? cacheUser : "noname" });
  }
  render() {
    return (
      <div className="header-container">
        <div className="logo">MusicBook</div>
        <div>
          <Dropdown className="profile-dropdown" overlay={menu} trigger={["click"]}>
            <div>
              <Avatar size="large">D</Avatar>
              <span className="profile-name"> {this.state.user.username}</span>

              <Icon type="down" />
            </div>
          </Dropdown>
        </div>
      </div>
    );
  }
}
