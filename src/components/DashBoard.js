import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import styled from "styled-components";
import YouOwe from "./YouOwe";
import OwedToYou from "./OwedToYou";
import YouPaid from "./YouPaid";
import PaidToYou from "./PaidToYou";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import dummyData from "../dummyData";
import axiosWithAuth from "../utils/axiosWithAuth";
import SearchForm from "./SearchForm";
import { UserContext } from "../App";

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
  const { user } = React.useContext(UserContext);

  // const [owedToYou, setOwedToYou] = useState(dummyData.pending.owesYou);
  const [owedToYou, setOwedToYou] = useState([[]]);
  const [youOwe, setYouOwe] = useState(dummyData.pending.youOwe);
  const [paidToYou, setPaidToYou] = useState(dummyData.paid.paidYou);
  const [youPaid, setYouPaid] = useState(dummyData.paid.youPaid);

  React.useEffect(() => {
    console.log("USER", user);
    axiosWithAuth()
      .get(`/api/bills/pending/${user.username}`)
      .then(res => {
        console.log("PENDING PAYMENTS", res.data.friendsThatOweYou);
        setOwedToYou(res.data.friendsThatOweYou);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <Div1>
      <Dropdown />
      <Title>Split-The-Bill</Title>
      <Form>
        <Link to="/table">
          <Fieldbutton
            className="field"
            as="button"
            type="submit"
            name="submit"
          >
            Create a Table
          </Fieldbutton>
        </Link>
        <Div2>
          <Label3>Search</Label3>
          <FieldInfo type="text" name="email" />
          {/* <SearchForm
            onSubmit={handleSubmit}
            onChange={handleChange}
            value={searchTerm}
          /> */}
        </Div2>
      </Form>

      <H3>Pending</H3>
      <OutterDiv>
        <InnerDiv>
          <h4>You Owe</h4>
          {youOwe.map((Cv, index) => (
            <YouOwe
              key={index}
              Amount={Cv.amount}
              Name={Cv.friend}
              Date={Cv.date}
            />
          ))}

          <H4>Owed to You</H4>

          {!owedToYou.length ? (
            <p>No pending payments at the moment</p>
          ) : (
            owedToYou.map(x =>
              x.map((payment, index) => (
                <OwedToYou
                  key={index}
                  billId={payment.billId}
                  Amount={payment.amountDue}
                  Name={payment.username}
                  Date={payment.date.split("-").join("/")}
                />
              ))
            )
          )}
        </InnerDiv>
      </OutterDiv>
      <H3>Paid</H3>
      <OutterDiv>
        <InnerDiv>
          <h4>You Paid</h4>
          {youPaid.map((Cv, index) => (
            <YouPaid
              key={index}
              Amount={Cv.amount}
              Name={Cv.friend}
              Date={Cv.date}
            />
          ))}

          <H4>Paid to You</H4>
          {paidToYou.map((Cv, index) => (
            <PaidToYou
              key={index}
              Amount={Cv.amount}
              Name={Cv.friend}
              Date={Cv.date}
            />
          ))}
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
    axiosWithAuth()
      .put("/api/bills/:id", values)
      .then(res => {
        setStatus(res.data);
        console.log(res);
      })
      .catch(err => console.log(err.response));
  }
})(DashBoard);

export default FormikDashBoard;
