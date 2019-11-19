import React from "react";
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import styled from "styled-components";

const Div1 = styled.div``;
const Div2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const User = styled(Field)`
  border-radius: 20px;
  border: 1px solid gray;
  width: 150px;
  padding: 10px;
`;
const Amountp = styled.p`
  color: #177c84;
  margin-right: 160px;
`;

const TableUserCard = props => {
  const { values } = props;
  return (
    <Div1 style={{ display: props.hidden ? "none" : "block" }}>
      <Form>
        <Amountp>Amount:</Amountp>
        <Div2>
          <i
            class="far fa-user"
            style={{ color: "#177c84", fontSize: "45px", marginRight: "10px" }}
          ></i>
          <User type="text" name="title" placeholder="Name" />

        </Div2>
      </Form>
    </Div1>
  );
};
const FormikTableUserCard = withFormik({
  mapPropsToValues({ title }) {
    return {
      title: title || ""
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
})(TableUserCard);

export default FormikTableUserCard;
