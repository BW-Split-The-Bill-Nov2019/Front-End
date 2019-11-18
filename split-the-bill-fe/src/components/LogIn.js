import React from "react";
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import styled from "styled-components";
import Dropdown from './Dropdown';

const Title = styled.h1`
  color: #177c84;
  font-size: 44px;
`;
const Div1 = styled.div`
  //   box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5);
    width: 30%;
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
  font-size: 15px;
  margin-top: 2%;
`;

const Label3 = styled.label`
  margin-right: 170px;
  margin-top: 1.5%;
`;
const Label4 = styled.label`
  margin-top: 1.5%;
  margin-right: 140px;
`;

const Button = styled.button`
  border: none;
  color: red;
  font-weight: bold;
`;

const LogIn = ({ values }) => {
  return (
    <Div1>
      <Dropdown />
      <Subtitle>Log In to your Account</Subtitle>
      <Form>
        <Div2>
          <Label3>Email </Label3>
          <FieldInfo type="text" name="email" />

          <Label4>Password</Label4>
          <FieldInfo type="password" name="password" />
          <Button> Forgot Password?</Button>
        </Div2>
        <Fieldbutton className="field" as="button" type="submit" name="submit">
          Create Account
        </Fieldbutton>
      </Form>
      <Button> Already have an account? Sign In</Button>
    </Div1>
  );
};
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
})(LogIn);
export default FormikLogIn;
