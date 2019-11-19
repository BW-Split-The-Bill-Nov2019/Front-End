import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import styled from "styled-components";
import TableUserCard from "./TableUserCard";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
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
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Div3 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 240px;
  margin-top: 20px;
`;
const Div4 = styled.div`
  display: flex;
  color: #177c84;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const FieldInfo = styled(Field)`
  border-radius: 20px;
  border: 1px solid gray;
  width: 200px;
  height: 10px;
  padding: 15px;
  margin-top: 5px;
`;
const DateAndTotal = styled(Field)`
  border-radius: 20px;
  border: 1px solid gray;
  width: 125px;
  height: 10px;
  padding: 15px;
  margin: 5px;
`;
const Addbutton = styled(Field)`
  background: none;
  border: none;
  margin: 5px;
  padding: none;
  &:active {
    outline: none;
    border: none;
  }
`;
const Fieldbutton = styled(Field)`
  border-radius: 20px;
  border: 1px solid #bdc3c7;
  width: 200px;
  padding: 10px;
  background: #177c84;
  color: white;
  font-size: 15px;
  margin-top: 20px;
`;

const Label3 = styled.label`
  margin-right: 150px;
  color: #177c84;
`;

const LogIn = ({ values }) => {
  const [hiddenUsers, setHiddenUsers] = useState(new Array(16).fill(true));

  const toggleHide = () => {
    const nextIndex = hiddenUsers.findIndex(displayed => {
      return displayed === true;
    });
    const nextArray = hiddenUsers;
    nextArray[nextIndex] = !nextArray[nextIndex];
    setHiddenUsers(nextArray);
  };
  return (
    <Div1>
      <Dropdown />
      <Title>Split-The-Bill</Title>
      <Form>
        <Div2>
          <Label3>Split Title </Label3>
          <FieldInfo type="text" name="title" placeholder="what's this for?" />
        </Div2>
        <Div>
          <Div3>
            <Div4>
              <label>Date</label>
              <DateAndTotal type="date" name="date" />
            </Div4>
            <Div4>
              <label> Total </label>
              <DateAndTotal type="text" name="total" placeholder="$" />
            </Div4>
          </Div3>
        </Div>
        <TableUserCard />
        {hiddenUsers.map((user, index) => (
          <TableUserCard hidden={hiddenUsers[index]} />
        ))}
        <div>
          <Addbutton
            type="submit"
            name="button"
            as="button"
            onClick={toggleHide}
          >
            <i
              class="material-icons"
              style={{
                color: "#177c84",
                fontSize: "45px",
                marginLeft: "180px"
              }}
            >
              add
            </i>
          </Addbutton>
        </div>
        <div>
          <textarea
            id="txtArea"
            rows="8"
            cols="38"
            placeholder=" Leave a comment..."
          ></textarea>
        </div>
        ​
        <Fieldbutton as="button" type="submit" name="submit">
          Submit Table
        </Fieldbutton>
      </Form>
    </Div1>
  );
};
const FormikLogIn = withFormik({
  mapPropsToValues({ title, total, date }) {
    return {
      title: title || "",
      total: total || "",
      date: date || ""
    };
  },
  handleSubmit(values, { setStatus }) {
    console.log("values", values);
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        setStatus(res.data);
        console.log(res);
        //redirect user to dashboard with history.push
      })
      .catch(err => console.log(err.response));
  }
})(LogIn);

export default FormikLogIn;
