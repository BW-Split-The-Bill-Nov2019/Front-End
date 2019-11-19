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
  margin-bottom: 20px;
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
const YouOwe = props => {
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
      </PDiv>
    </div>
  );
};

export default YouOwe;
