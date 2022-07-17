import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledHeader = styled.header`

    position: fixed;
    top: 0px;
    z-index: 11;
    padding: 0px 50px;
    height: 100px;
    background-color: #071624;
    width:100%;
    display: flex;
    align-items: center;

  nav {
    display: flex;
    justify-content: space-between;
    width: 94%;

  }

  nav ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
    list-style: none;
  }

  nav ul li {
    border: 1px solid #efecea;
    border-radius: 50px;
    padding: 3px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    transition: 0.2s;
  }

  nav ul li a {
    position: relative;
    color: #071624;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: quasimoda, sans-serif;
    font-size: 15px;
    text-decoration: none;
    padding: 0px 10px;
    padding-top: 2px;
    background: #efecea;
    border-radius: 25px;
    height: 24px;
    transition: 0.3s;
  }

  nav ul li:hover {
    border: 1px solid #346751;
  }

  nav ul li:hover a {
    background: #8fb3a3;
    color: #efecea;
    transform: scale(.95);
  }
`;


export default function Navbar() {
  return (
    <StyledHeader>
      <nav>
        <Link to="/">
          <h1>Sabr Dev</h1>
        </Link>
        <ul>
          <li>
            <Link to="#about">About</Link>
          </li>
          <li>
            <Link to="#skills">Skills</Link>
          </li>
          <li>
            <Link to="#projects">Projects</Link>
          </li>
          <li>
            <Link to="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
}
