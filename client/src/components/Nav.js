import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "@emotion/styled";

let Nav = props => {
  return (
    <StyledNav>
      <Link to="/">
        <h1 id="logo">Prosescript</h1>
      </Link>
      <div className="links">
        <NavLink
          className="navlink"
          activeStyle={{ border: "1px solid #00ab6c", color: "#00ab6c" }}
          exact
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="navlink"
          activeStyle={{ border: "1px solid #00ab6c", color: "#00ab6c" }}
          to="/about"
        >
          About
        </NavLink>
        <a className="navlink" href={props.signup}>
          Sign Up
        </a>
      </div>
    </StyledNav>
  );
};

export default Nav;

const StyledNav = styled.nav`
  background: #fefdfa;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
  height: 80px;
  width: 100vw;
  z-index: 10;
  position: fixed;
  top: 0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16), 0 1px 2px rgba(0, 0, 0, 0.23);

  .links {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    width: 350px;
  }

  .navlink {
    border: 1px solid #fefdfa;
    padding: 5px 15px;
    border-radius: 3px;
    transition: all 0.2s;
    text-align: center;
    color: #123;
    width: 100px;
  }

  .navlink:hover {
    border: 1px solid #00ab6b;
    color: #00ab6b;
    background: #fefdfa;
  }

  #logo {
    margin-bottom: 50px;
    margin-left: 30px;
    color: #00ab6b;
    font-family: "Expletus Sans", cursive;
    font-size: 40px;
    margin: 0;
  }

  @media (max-width: 800px) {
    padding: 0 40px;

    .links {
      width: 30%;
    }

    .navlink {
      :last-of-type {
        display: none;
      }
    }

    #logo {
      font-size: 30px;
    }
  }

  @media (max-width: 500px) {
    padding: 0 20px;
    justify-content: center;

    .links {
      display: none;
    }

    #logo {
      font-size: 35px;
    }
  }
`;
