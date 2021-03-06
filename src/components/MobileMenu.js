import React, { useState } from "react";
import { Link } from "gatsby";

import styled from "styled-components";

const MobileNavStyles = styled.div`
will-change: transform; 
  position: relative;
  display: none;
  flex-direction: column;
  gap: 7px;
  left: -70px;
  top: -10px;
  align-items: flex-end;
  cursor: pointer;
  z-index: 5;
  border: ${({nav}) => nav ? "1px solid #b88367" : "none"};
  border-radius: ${({nav}) => nav ? "50%" : "none"};
  width: ${({nav}) => nav ? "30px" : ""};
  height: ${({nav}) => nav ? "30px" : ""};
  justify-content: ${({nav}) => nav ? "center" : ""};
  transition: .3s;

  span {
    width: 30px;
    height: ${({nav}) => nav ? "1px" : "2px"};
    background-color: #b88367;
    position: ${({nav}) => nav ? "absolute" : ""};
    transition: .2s;
    z-index: 4;
  }

  span:nth-child(1) {
    will-change: transform; 
    background: ${({nav}) => nav ? "#071624" : "#b88367"};
    transform: ${({nav}) => nav ? "rotate(135deg) translateY(-.25px)" : "rotate(0deg)"};

  }

  span:nth-child(2) {
    will-change: transform; 
    width: ${({nav}) => nav ? "30px" : "25px"};
    background: ${({nav}) => nav ? "#071624" : "#b88367"};
    transform: ${({nav}) => nav ? "rotate(45deg)" : "rotate(0deg)"};
  }

  span:nth-child(3) {
    will-change: transform; 
    width: 20px;
    display: ${({nav}) => nav ? "none" : "inherit"};
  }

  @media (max-width: 768px) {
    display: flex;

   
  }
`;

const MobileNavLinkStyles = styled.div`
  position: fixed;
  background-color: #efecea;
  height: 65%;
  width: 40%;
  right: 0;
  z-index: 2;
  border-bottom-left-radius: 35px;
  display: none;
  justify-content: center;
  align-items: center;
  top: 0px;
  transform: ${({nav}) => nav ? "translateX(0)" : "translateX(100%)"};
  transition: 0.4s;

 
  @media (max-width: 768px) {
    display: flex;

   
  }

  nav {
    position: relative;
    left: -10px;
  }

  nav ul {
    display: flex;
    flex-direction: column;
    gap: 30px;
    z-index: 6;
    list-style: none;
    position: relative;
  }

  nav ul li a {
    font-family: quasimoda, sans-serif;
    font-weight: 300;
    font-size: 1.15rem;
    color: #071624;
    text-decoration: none;
  }

  nav ul li:hover::before {
    background: #b88367;
  }

  nav ul li::before {
    content: "";
    position: absolute;
    border: 1px solid #b88367;
    left: 25px;
    transform: translateY(9px);
    border-radius: 50%;
    width: 6px;
    height: 6px;
    transition: 0.55s;
    z-index: 12;
  }
`;

export default function MobileMenu() {
  const [nav, showNav] = useState(false);

  return (
    <>
      <MobileNavStyles nav={nav} onClick={() => showNav(!nav)}>
        <span></span>
        <span></span>
        <span></span>
      </MobileNavStyles>
      <MobileNavLinkStyles nav={nav}>
        <nav>
          <ul>
            <li>
              <Link to="#about" nav={nav} onClick={() => showNav(!nav)}>About</Link>
            </li>
            <li>
              <Link to="#skills" nav={nav} onClick={() => showNav(!nav)}>Skills</Link>
            </li>
            <li>
              <Link to="#projects" nav={nav} onClick={() => showNav(!nav)}>Projects</Link>
            </li>
            <li>
              <Link to="#contact" nav={nav} onClick={() => showNav(!nav)}>Contact</Link>
            </li>
          </ul>
        </nav>
      </MobileNavLinkStyles>
    </>
  );
}
