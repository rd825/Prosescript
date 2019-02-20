import React from "react";
import styled from "@emotion/styled";
import rings from "../assets/rings.svg";
import check from "../assets/check.svg";

const Status = props => {
  return (
    <Container loading={props.loading}>
      <img alt="status icon" src={props.loading ? rings : check} />
      <p>{props.children}</p>
    </Container>
  );
};

export default Status;

const Container = styled.div`
  display: flex;
  position: relative;
  flex-flow: row nowrap;
  align-items: center;
  line-height: 1.25;
  width: 60%;
  background: ${props => (props.loading ? "#333333" : "#00ab6b")};
  padding: 12.5px 25px;
  border-radius: 5px;
  box-shadow: 0 0px 3px 0 rgba(0, 0, 0, 0.15);
  margin: 30px 0 60px;

  p {
    color: white;
    margin-left: 25px;
    font-size: 15px;
  }

  img {
    height: 50px;
    width: 50px;
  }

  @media (max-width: 900px) {
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    min-width: 290px;
    width: 100%;
    text-align: center;
    padding: 7.5px 15px;

    p {
      margin: 1rem 0;
    }
  }
`;
