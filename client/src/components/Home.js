import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import styled from "@emotion/styled";
import bg from "../assets/pen.jpg";

const Home = props => {
  return (
    <Container>
      <StyledHome id="home" style={{ backgroundImage: `url(${bg})` }}>
        <h1 className="hero">Put your thoughts into the world.</h1>
        <h4>
          Prosescript is a lightweight, Posterous-like interface for Medium.
        </h4>

        <h4>
          It frees your writing experience from the shackles of a blogging
          platform. You can write wherever you work best, whether that's a word
          processor, email draft, tweetstorm, or mobile notes app. All you have
          to do is email us your writing and we'll handle publishing it.
        </h4>

        <h4>If you have a Medium account, you're good to go.</h4>

        <div id="signup">
          <a id="signup-button" href={props.signup}>
            <i className="fab fa-medium" />
            <p>Sign up with Medium</p>
          </a>
        </div>
        <Link to="/about" id="learn-more">
          Learn more about Prosescript
        </Link>
      </StyledHome>
    </Container>
  );
};

export default Home;

const StyledHome = styled.div`
  background-position: 100% 33%;
  background-size: 100% auto;
  height: 89.3vh;

  #signup {
    margin-top: 75px;
    width: 250px;
    border-radius: 50px;
    background: #00ab6b;
    padding: 15px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  #signup:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }

  #signup-button {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  #learn-more {
    font-size: 14px;
    display: inline-block;
    color: #00ab6b;
    margin: 20px 35px;
    padding-bottom: 5px;
    transition: all 0.3s;
  }

  #learn-more:hover {
    border-bottom: 2.5px solid #00ab6b;
  }

  .fab {
    font-size: 20px;
  }
`;
