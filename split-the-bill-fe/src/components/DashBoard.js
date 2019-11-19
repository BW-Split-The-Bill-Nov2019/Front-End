import React from "react";
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import styled from "styled-components";
import YouOwe from "./YouOwe";
import OwedToYou from "./OwedToYou";
import YouPaid from "./YouPaid";
import PaidToYou from "./PaidToYou";

const Title = styled.h1`
  color: #177c84;
  font-size: 44px;
`;
const Div1 = styled.div`
  //   box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5);
  //   width: 30%;
  //   padding: 3%;
  //
`;
const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const InnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 220px;
`;
const OutterDiv = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  margin-top: -25px;
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
const H4 = styled.h4`
  margin-top: 50px;
`;
const H3 = styled.h3`
  margin-top: 50px;
`;
const DashBoard = ({ values }) => {
  return (
    <Div1>
      <Title>Split-The-Bill</Title>
      <Form>
        <Fieldbutton className="field" as="button" type="submit" name="submit">
          Create a Table
        </Fieldbutton>
        <Div2>
          <Label3>Search</Label3>
          <FieldInfo type="text" name="email" />
        </Div2>
      </Form>
      <H3>Pending</H3>
      <OutterDiv>
        <InnerDiv>
          <h4>You Owe</h4>
          <YouOwe />
          <H4>Owed to You</H4>
          <OwedToYou />
        </InnerDiv>
      </OutterDiv>
      <H3>Paid</H3>
      <OutterDiv>
        <InnerDiv>
          <h4>You Paid</h4>
          <YouPaid />
          <H4>Paid to You</H4>
          <PaidToYou />
        </InnerDiv>
      </OutterDiv>
    </Div1>
  );
};
const FormikDashBoard = withFormik({
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
})(DashBoard);
export default FormikDashBoard;
