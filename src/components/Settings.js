import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";
import axiosWithAuth from "../utils/axiosWithAuth";
import styled from "styled-components";

const Title = styled.h1`
  color: #177c84;
  font-size: 44px;
`;
const Div1 = styled.div`
  // box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.2);
  min-width: 35%;
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
  width: 230px;
  padding: 10px;
  background: #7eb2b7;
  color: white;
  font-size: 15px;
  margin-bottom: 20px;
`;

const Label3 = styled.label`
  margin-right: 170px;
  margin-bottom: 8px;
`;

const Settings = ({ values }) => {
  const [updateUser, setUpdateUser] = useState({
    firstName: " "
  });
  const [deleteUser, setDeleteUser] = useState([[]]);

  return (
    <Div1>
      <Title>Update User</Title>
      <Form>
        <Div2>
          <Label3>firstName</Label3>
          <FieldInfo type="text" first name="name" />
        </Div2>
        <Fieldbutton className="field" as="button" type="submit" name="submit">
          Update
        </Fieldbutton>
      </Form>
    </Div1>
  );
};
const FormikSettings = withFormik({
  mapPropsToValues({ firstName }) {
    return {
      firstName: firstName || ""
    };
  },
  handleSubmit(values, formikBag) {
    console.log("VALUES", values);
    axios
      .put("https://bw-split-the-bill.herokuapp.com/api/auth/login", values)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        // formikBag.props.setUser(res.data);

        console.log(res);
        console.log("formikBag Props", formikBag.props);
        formikBag.props.history.push("/dashboard");
      })
      .catch(err => console.log(err.response));
  }
})(Settings);

export default FormikSettings;
