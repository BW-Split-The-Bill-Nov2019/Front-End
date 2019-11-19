import React from "react";
import styled from "styled-components";
const PDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid gray;
  border-top: 2px solid gray;
  padding: 0px 5px;
  width: 220px;
`;
const S = styled.span`
  font-weight: bold;
`;
const Smoney = styled.span`
  color: red;
  font-weight: bold;
`;
const P = styled.p`
  margin-right: 15px;
`;
const YouPaid = props => {
  return (
    <div>
      <PDiv>
        <P>08/15/2019</P>
        <P>
          <S>Dan</S>
        </P>
        <P>
          <Smoney>-$7.55</Smoney>
        </P>
      </PDiv>
    </div>
  );
};

export default YouPaid;
