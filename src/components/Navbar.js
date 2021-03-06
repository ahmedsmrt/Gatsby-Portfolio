import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import MobileMenu from "./MobileMenu";


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
  

    #logo-link {
        text-decoration: none;
    }

 #logo {
    transition: .5s;
    transform: scale(.65);
    text-decoration: none;
 }

 #logo:hover {
    transition: .5s;
    stroke: #B88367;
    text-decoration: none;

 }

 #logoa:-webkit-any-link {
    text-decoration: none;

 }

  #desktop-nav {
    display: flex;
    justify-content: space-between;
    width: 94%;

  }

  #desktop-nav ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
    list-style: none;
  }

  #desktop-nav ul li {
    border: 1px solid #efecea;
    border-radius: 50px;
    padding: 3px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    transition: 0.2s;
  }

  #desktop-nav ul li a {
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

  #desktop-nav ul li:hover {
    border: 1px solid #346751;
  }

  #desktop-nav ul li:hover a {
    background: #8fb3a3;
    color: #efecea;
    transform: scale(.95);
  }

 
  @media (max-width: 768px) {
    #desktop-nav  ul{
        display: none;
    }

    #logo {
        position: relative;
        left: -30px;
    }


  }

    @media (min-width: 819px) and (max-width: 1020px) {
        #desktop-nav  ul{
        margin-right: 25px;
    }
}
`;


export default function Navbar() {

  return (
    <StyledHeader>
      <nav id="desktop-nav">
        <Link to="/" id="logo-link">
        <svg id="logo" xmlns="http://www.w3.org/2000/svg" width="54" height="82" viewBox="0 0 54 82">
  <text id="G" transform="translate(11 22)" fill="#8fb3a3" fontSize="50" fontFamily="Quasimoda-ExtraLight, Quasimoda" fontWeight="200"><tspan x="0" y="47">G</tspan></text>
  <text id="A" fill="#8fb3a3" fontSize="50" fontFamily="Quasimoda-ExtraLight, Quasimoda" fontWeight="200"><tspan x="0" y="47">A</tspan></text>
</svg>
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
      <MobileMenu ></ MobileMenu>
    </StyledHeader>
  );
}
