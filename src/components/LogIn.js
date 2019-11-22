import React from "react";
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import { UserContext } from "../App";

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
const Fieldbutton = styled.button`
  border-radius: 20px;
  border: 1px solid #bdc3c7;
  width: 200px;
  padding: 10px;
  background: #177c84;
  color: white;
  margin-top: 2%;
  font-size: 20px;
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

let userCtx = null;

function Login() {
  const _userCtx = React.useContext(UserContext);
  userCtx = _userCtx;

  return (
    <Div1>
      <Dropdown />
      <Subtitle>Log In to your Account</Subtitle>
      <Form>
        <Div2>
          <Label3>Username</Label3>
          <FieldInfo type="text" name="username" />

          <Label4>Password</Label4>
          <FieldInfo type="password" name="password" />
          <Button>
            <Span>Forgot Password?</Span>
          </Button>
        </Div2>

        <Fieldbutton className="field" as="button" type="submit" name="submit">
          Log In
        </Fieldbutton>
      </Form>
    </Div1>
  );
}
const FormikLogIn = withFormik({
  mapPropsToValues({ username, password }) {
    console.log({ username, password });
    return {
      username: username || "",
      password: password || ""
    };
  },
  handleSubmit(values, formikBag) {
    console.log("VALUES", values);
    axios
      .post("https://bw-split-the-bill.herokuapp.com/api/auth/login", values)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        // formikBag.props.setUser(res.data);
        userCtx.setUser(res.data);

        console.log(res);
        console.log("formikBag Props", formikBag.props);
        formikBag.props.history.push("/dashboard");
      })
      .catch(err => console.log(err.response));
  }
})(Login);
export default FormikLogIn;
