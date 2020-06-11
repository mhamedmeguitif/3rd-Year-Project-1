import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import Axios from "axios";
class FormExampleClearOnSubmit extends Component {
  state = {
    username: "",
    password: "",
    errors: {
      username: " ",
      password: " ",
    },
  };
 

  

  handleChange = (event) => {
    event.preventDefault();
    var { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      case "username":
        errors.username =
          value.length < 5 ? "Username must be 5 characters long!" : "";
        break;
      case "password":
        errors.password =
          value.length < 8 ? "Password must be 8 characters long!" : "";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let valid = true;

    Object.values(this.state.errors).forEach(
      // if we have an error string set valid to false
      (val) => val.length > 0 && (valid = false)
    );

    if (valid) {
      console.info("Valid Form");
      let data = {
        username: this.state.username,
        password: this.state.password,
      };
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let url = "http://localhost:3000/users/login";
      Axios.create({
        headers: {
          "Content-Type": "application/json",
        },
      })
        .request({
          url,
          method: "post",
          data: data,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.error("Invalid Form");
      alert("Invalid Form");
    }
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          placeholder="Username"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
          noValidate
        />
        {this.state.errors.username.length > 0 && (
          <span className="error">{this.state.errors.username}</span>
        )}

        <Form.Input
          placeholder="Password"
          name="password"
          value={this.state.Password}
          onChange={this.handleChange}
          type="Password"
          noValidate
        />
        {this.state.errors.password.length > 0 && (
          <span className="error">{this.state.errors.password}</span>
        )}
        <Form.Button content="Submit" />
      </Form>
    );
  }
}

export default FormExampleClearOnSubmit;
