import React, { Component } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";

import axios from "axios";
class FormExampleForm extends Component {
  state = {
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    Pays: "",
    Email: "",
    Domaine: "",
    specialite: "",
    Etablissement: "",
    compagnie: "",
    errors: {
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      Pays: "",
      Email: "",
      Domaine: "",
      specialite: "",
      Etablissement: "",
      compagnie: "",
    },
    redirect: false,
    authError: false,
    isLoading: false,
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
      event.preventDefault();
      this.setState({ isLoading: true });
      const url = "http://localhost:3000/users/signup ";
      let bodyFormData = {
        username: this.state.username,
        password: this.state.password,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        Pays: this.state.Pays,
        Email: this.state.Email,
        specialite: this.state.specialite,
        Domaine: this.state.Domaine,
        Etablissement: this.state.Etablissement,
        compagnie: this.state.compagnie,
      };

      axios
        .post(url, bodyFormData)
        .then((result) => {
          this.setState({ isLoading: false });
          if (result.data.status !== "fail") {
            this.setState({ redirect: true, authError: true });
          } else {
            this.setState({ redirect: false, authError: true });
          }
        })
        .catch((error) => {
          console.log(error);
          this.setState({ authError: true, isLoading: false });
        });
    } else {
      console.error("Invalid Form");
      alert("Invalid Form");
    }
  };
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
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
      case "firstname":
        errors.firstname =
          value.length < 8 ? "firstname must be 8 characters long!" : "";
        break;
      case "lastname":
        errors.lastname =
          value.length < 8 ? "lastname must be 8 characters long!" : "";
        break;

      case "Pays":
        errors.Pays = value.length < 8 ? "Pays must be 8 characters long!" : "";
        break;
      case "Email":
        errors.Email =
          value.length < 8 ? "Email must be 8 characters long!" : "";
        break;
      case "specialite":
        errors.specialite =
          value.length < 8 ? " specialite be 8 characters long!" : "";
        break;

      case "Domaine":
        errors.Domaine =
          value.length < 8 ? " Domaine be 8 characters long!" : "";
        break;
      case "Etablissement":
        errors.Etablissement =
          value.length < 8 ? " Etablissement be 8 characters long!" : "";
        break;

      case "compagnie":
        errors.compagnie =
          value.length < 8 ? "compagnie be 8 carachters long !!!" : "";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value }, () => {
      console.log(this.state.errors);
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Field>
            <label>User Name </label>
            <input
              placeholder="UserName"
              name="username"
              value={this.state.UserName}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              placeholder="Password"
              name="password"
              type="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </Form.Field>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field>
            <label> FirstName </label>
            <input
              placeholder="FirstName"
              name="firstname"
              value={this.state.firstname}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>LastName</label>
            <input
              placeholder="LastName"
              name="lastname"
              value={this.state.lastname}
              onChange={this.handleChange}
            />
          </Form.Field>
        </Form.Group>
        <Form.Field>
          <label> Email </label>
          <input
            placeholder="m.meguitif@esi-sba.dz"
            name="Email"
            value={this.state.Email}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Group widths="fifteen">
          <Form.Field>
            <label>Domain</label>
            <input
              placeholder="Domain"
              name="Domaine"
              value={this.state.Domaine}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Specialization</label>
            <input
              placeholder="Specialization"
              name="specialite"
              value={this.state.specialite}
              onChange={this.handleChange}
            />
          </Form.Field>
        </Form.Group>
        <Form.Field>
          <label>Establishment</label>
          <input
            placeholder="Establishment"
            name="Etablissement"
            value={this.state.Etablissement}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Company</label>
          <input
            placeholder="Company"
            name="compagnie"
            value={this.state.compagnie}
            onChange={this.handleChange}
          />
        </Form.Field>

        <Form.Field>
          <label>Country</label>
          <input
            placeholder="Country"
            name="Pays"
            value={this.state.Pays}
            onChange={this.handleChange}
          />
        </Form.Field>

        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" slider />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

export default FormExampleForm;
