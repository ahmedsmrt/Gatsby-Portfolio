import React, { useState } from "react";
import { Link } from "gatsby";

import styled from "styled-components";

const MobileNavStyles = styled.div`
  position: relative;
  display: none;
  flex-direction: column;
  gap: 7px;
  left: -60px;
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
    background: ${({nav}) => nav ? "#071624" : "#b88367"};
    transform: ${({nav}) => nav ? "rotate(135deg) translateY(-.25px)" : "rotate(0deg)"};

  }

  span:nth-child(2) {
    width: ${({nav}) => nav ? "30px" : "25px"};
    background: ${({nav}) => nav ? "#071624" : "#b88367"};
    transform: ${({nav}) => nav ? "rotate(45deg)" : "rotate(0deg)"};
  }

  span:nth-child(3) {
    width: 20px;
    display: ${({nav}) => nav ? "none" : "inherit"};
  }

  @media (max-width: 768px) {
    display: flex;

    .mobile-menu-animate-div {
      position: relative;
      border: 1px solid #b88367;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
    }

    .mobile-menu-animate-span {
      transition: 0.3s;
      position: absolute;
      height: 1px;
    }

    .mobile-menu-animate-span-first {
      transform: rotate(45deg);
      background: #071624;
    }

    .mobile-menu-animate-span-second {
      transform: rotate(135deg);
      background: #071624;
      width: 30px;
    }

    .mobile-menu-animate-span-third {
      display: none;
    }
  }
`;

const MobileNavLinkStyles = styled.div`
  position: fixed;
  background-color: #efecea;
  height: 40%;
  width: 175px;
  right: 0;
  z-index: 2;
  border-bottom-left-radius: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  transform: ${({nav}) => nav ? "translateX(0)" : "translateX(100%)"};
  transition: 0.4s;

 

  nav {
    position: relative;
    left: -10px;
  }

  nav ul {
    display: flex;
    flex-direction: column;
    gap: 50px;
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
    transform: translateY(3px);
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
      </MobileNavLinkStyles>
    </>
  );
}
