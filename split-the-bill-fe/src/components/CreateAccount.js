import React from "react";
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import styled from "styled-components";
import Dropdown from './Dropdown';

const Title = styled.h1`
  color: #177c84;
  font-size: 44px;
  margin: 0 auto;
`;
const Subtitle = styled.h3`
  color: #177c84;
  font-size: 24px;
  margin: 0 auto;
  margin-top: 25px;
`;
const Div1 = styled.div`
    // box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.2);
    width: 30%;
    padding: 3%;
    margin: 0 auto;
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
const Label1 = styled.label`
  margin-right: 135px;
`;
const Label2 = styled.label`
  margin-right: 135px;
  margin-top: 1.5%;
`;
const Label3 = styled.label`
  margin-right: 170px;
  margin-top: 1.5%;
`;
const Label4 = styled.label`
  margin-top: 1.5%;
  margin-right: 140px;
`;
const Label5 = styled.label`
  margin-top: 1.5%;
  margin-right: 80px;
`;
const Button = styled.button`
  border: none;
  color: red;
  font-weight: bold;
`;

const CreateAccount = ({ values }) => {
  return (
    <Div1>
      <Dropdown />
      <Subtitle>Create your Account</Subtitle>
      <Form>
        <Div2>
          <Label1>First Name</Label1>
          <FieldInfo type="text" name="firstName" />

          <Label2>Last Name</Label2>
          <FieldInfo type="text" name="lastName" />

          <Label3>Email </Label3>
          <FieldInfo type="text" name="email" />

          <Label4>Password</Label4>
          <FieldInfo type="password" name="password" />

          <Label5>Confirm Password</Label5>
          <FieldInfo type="password" name="confirmPassword" />
        </Div2>
        <Fieldbutton className="field" as="button" type="submit" name="submit">
          Create Account
        </Fieldbutton>
      </Form>
      <Button> Already have an account? Sign In</Button>
    </Div1>
  );
};
const FormikCreateAccount = withFormik({
  mapPropsToValues({ firstName, lastName, email, password, confirmPassword }) {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      email: email || "",
      password: password || "",
      confirmPassword: confirmPassword || ""
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
})(CreateAccount);
export default FormikCreateAccount;
