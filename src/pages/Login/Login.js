import React, { Component } from "react";
import { Input, Button, Form, Icon, message } from "antd";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { authLogin } from "../../redux/actions/auth";
import Cookie from "js-cookie";

import "antd/es/input/style/css";
import "antd/es/button/style/css";
import "antd/es/form/style/css";
import "antd/es/icon/style/css";
import "antd/es/message/style/css";

import "./Login.scss";

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        await this.props.authLogin(values);
        console.log(this.props);
        if (this.props.error) {
          message.error(this.props.error);
        } else {
          message.success("Авторизация прошла успешно");
          Cookie.set("token", this.props.token);
          Cookie.set("user", JSON.stringify(this.props.user));
        }
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-container">
        <div className="login-form">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator("username", {
                rules: [
                  { required: true, message: "Please input your username!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Username"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "Please input your Password!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button mr-3"
              >
                Войти
              </Button>
              Или <Link to="/register">Зарегистрироваться</Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}
const LoginForm = Form.create({ name: "login" })(Login);
function mapStateToProps(state) {
  return {
    user: state.auth.user,
    token: state.auth.token,
    error: state.auth.error
  };
}

export default connect(
  mapStateToProps,
  {
    authLogin
  }
)(LoginForm);
