import React from "react";
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";

const Div1 = styled.div`
  //box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5);
  min-width: 35%;
  padding: 3%;
  margin: 0 auto;
`;

const Subtitle = styled.h3`
  color: #177c84;
  font-size: 24px;
  margin: 0 auto;
  margin-top: 25px;
`;

const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FieldInfo = styled(Field)`
  border-radius: 20px;
  border: 1px solid gray;
  width: 200px;
  padding: 10px;
`;
const Fieldbutton = styled(Field)`
  border-radius: 20px;
  border: 1px solid #bdc3c7;
  width: 200px;
  padding: 10px;
  background: #177c84;
  color: white;
  font-size: 20px;
  margin-top: 2%;
`;

const Label3 = styled.label`
  margin-right: 170px;
  margin-top: 30px;
`;
const Label4 = styled.label`
  margin-top: 1.5%;
  margin-right: 140px;
`;

const Button = styled.button`
  border: none;
  color: red;
  font-weight: bold;
  margin-top: 15px;
  background: none;
`;

const Span = styled.span`
  text-decoration: underline;
`;

class Login extends React.Component {
  state = {
    credentials: {
      email: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", this.state.credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
      })
      .catch(err => console.log(err.response));
  };

  render() {
    return (
      <Div1>
        <Dropdown />
        <Subtitle>Log In to your Account</Subtitle>
        <Form onSubmit={this.login}>
          <Div2>
            <Label3>Email</Label3>
            <FieldInfo
              type="text"
              name="email"
              value={this.state.credentials.email}
              onChange={this.handleChange}
            />

            <Label4>Password</Label4>
            <FieldInfo
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
            <Button>
              <Span>Forgot Password?</Span>
            </Button>
          </Div2>
          <Link to="/dashboard">
            <Fieldbutton
              className="field"
              as="button"
              type="submit"
              name="submit"
            >
              Log In
            </Fieldbutton>
          </Link>
        </Form>
      </Div1>
    );
  }
}
const FormikLogIn = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    };
  },
  handleSubmit(values, { setStatus }) {
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        setStatus(res.data);
        console.log(res);
      })
      .catch(err => console.log(err.response));
  }
})(Login);
export default FormikLogIn;
