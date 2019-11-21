import React, { useState } from "react";
import styled from "styled-components";
import Switch from "./Switch";

import "../App.css";

const PDiv = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: center;
  border-bottom: 2px solid gray;
  border-top: 2px solid gray;
  padding: 0px 5px;
  width: 220px;
  margin-bottom: 20px;
  border: 2px solid red;
`;
const ToggleDiv = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid red;
`;
const S = styled.span`
  font-weight: bold;
`;
const Smoney = styled.span`
  color: gray;
  font-weight: bold;
`;
const P = styled.p`
  margin-right: 15px;
`;

const OwedToYou = props => {
  const [value, setValue] = useState(false);
  return (
    <div>
      <PDiv>
        <P>{props.Date}</P>
        <P>
          <S>{props.Name}</S>
        </P>
        <P>
          <Smoney>{props.Amount}</Smoney>
        </P>
        <ToggleDiv>
          <Switch isOn={value} handleToggle={() => setValue(!value)} />
        </ToggleDiv>
      </PDiv>
    </div>
  );
};

export default OwedToYou;
