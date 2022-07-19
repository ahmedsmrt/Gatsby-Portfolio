import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Navbar from "./Navbar";
import SocialLeft from "./SocialLeft";
import SocialRight from "./SocialRight";

const theme = {};

const GlobalStyles = createGlobalStyle`
  :root {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

 body{
  background: #071624;
  color: #EFECEA;
  font-family: quasimoda, sans-serif;
  overflow-x: hidden;
  min-height: 100%;
  margin: 0px;
  scroll-behavior: smooth;
 }

 body::-webkit-scrollbar
{
	width: 6px;
	background-color: #071624;
  cursor: pointer;
}

body::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #375570;
  cursor: pointer;
}


  h2,h3,h4 {
    font-family: quasimoda, sans-serif;
    font-weight: 100;
    line-height: 20px;
  }
 .content {
  padding: 0;
 }

 main {
  max-width: 1600px;
  min-height: 100vh;
  margin: 0 auto;
  overflow-x: hidden;
 }

 .footer-text {
  text-align: center;
    position: relative;
    bottom: 20px;
  }
 


  .special-span {
    color: #8fb3a3;
    cursor: pointer;
    transition: 0.2s;
    position: relative;
  }

  .special-span:hover {
    color: #4e9073;
  }

  .special-span::before {
    content: "";
    position: absolute;
    bottom: 4%;
    height: 1px;
    width: 0;
    background-color: #8fb3a3;
    transition: 0.4s;
    opacity: 0;
  }

  .special-span:hover::before {
    width: 100%;
    opacity: 1;
  }

  @media (max-width: 768px) {

    .footer-text {

      font-size: .8rem;
    }
  }

`;

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <GlobalStyles />
      <SocialLeft />
      <SocialRight />
      <div className="content">
        <main>
        {children}
        </main>
      </div>
      <div className="footer-text">
      &#169; Devloped by Ahmed Gasim 2022
      </div>
    </ThemeProvider>
  );
}
