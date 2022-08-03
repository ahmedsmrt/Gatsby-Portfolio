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


  .footerSocialIcons {
    display: none;
  }

  @media (max-width: 768px) {

    .footer-text {

      font-size: .8rem;
    }

    
  .footerSocialIcons {
    display: flex;
    width: 200px;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
  }

  .footerSocialIcons  ul {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        gap: 20px;
        margin: 15px 0px -10px 0px;
        padding: 0;
     
    }

    .footerSocialIcons li {
        list-style: none;
    }

    .footerSocialIcons svg {
        transform:scale(1.5);
        cursor: pointer;
    }

    .footerSocialIcons svg:hover {
        transform: scale(1.5);
        stroke: #B88367;

    }

   .footerSocialIcons svg:hover path, svg:hover rect, svg:hover ellipse, svg:hover line {
        stroke: #B88367;
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
        <main>{children}</main>
      </div>
      <div className="footer-text">
        &#169; Devloped by Ahmed Gasim 2022
        <div className="footerSocialIcons">
          <ul>
            <li>
              <a
                href="https://github.com/ahmedsmrt"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13.153"
                  height="13.777"
                  viewBox="0 0 13.153 13.777"
                >
                  <path
                    id="Path_2"
                    data-name="Path 2"
                    d="M6.325,11.915C3.236,12.825,3.236,10.4,2,10.094m8.65,3.642V11.387A2.024,2.024,0,0,0,10.069,9.8c1.94-.212,3.979-.935,3.979-4.249a3.271,3.271,0,0,0-.926-2.276A3.027,3.027,0,0,0,13.066.989s-.729-.212-2.416.9a8.411,8.411,0,0,0-4.325,0C4.638.777,3.909.989,3.909.989a3.027,3.027,0,0,0-.056,2.288,3.271,3.271,0,0,0-.927,2.294c0,3.29,2.039,4.012,3.979,4.249a2.025,2.025,0,0,0-.581,1.566v2.349"
                    transform="translate(-1.395 -0.459)"
                    fill="rgba(239,236,234,0)"
                    stroke="#efecea"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ahmed-gasim-b601ab129/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13.357"
                  height="12.532"
                  viewBox="0 0 13.357 12.532"
                >
                  <g
                    id="Group_11"
                    data-name="Group 11"
                    transform="translate(0.5 0.5)"
                  >
                    <path
                      id="Path_4"
                      data-name="Path 4"
                      d="M13.707,8a3.675,3.675,0,0,1,3.707,3.642V15.89H14.943V11.642a1.236,1.236,0,0,0-2.471,0V15.89H10V11.642A3.675,3.675,0,0,1,13.707,8Z"
                      transform="translate(-5.057 -4.358)"
                      fill="none"
                      stroke="#efecea"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                    />
                    <rect
                      id="Rectangle_4"
                      data-name="Rectangle 4"
                      width="2.471"
                      height="7.284"
                      transform="translate(0 4.249)"
                      fill="none"
                      stroke="#efecea"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                    />
                    <ellipse
                      id="Ellipse_2"
                      data-name="Ellipse 2"
                      cx="1.236"
                      cy="1.214"
                      rx="1.236"
                      ry="1.214"
                      fill="none"
                      stroke="#efecea"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                    />
                  </g>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/a.g.sudani/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13.357"
                  height="13.139"
                  viewBox="0 0 13.357 13.139"
                >
                  <g
                    id="Group_10"
                    data-name="Group 10"
                    transform="translate(0.5 0.5)"
                  >
                    <rect
                      id="Rectangle_3"
                      data-name="Rectangle 3"
                      width="12.357"
                      height="12.139"
                      rx="5"
                      fill="none"
                      stroke="#efecea"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                    />
                    <path
                      id="Path_3"
                      data-name="Path 3"
                      d="M12.959,10.028a2.417,2.417,0,0,1-1.334,2.525A2.5,2.5,0,0,1,8.767,12.1a2.4,2.4,0,0,1-.46-2.808,2.483,2.483,0,0,1,2.57-1.31A2.45,2.45,0,0,1,12.959,10.028Z"
                      transform="translate(-4.309 -4.341)"
                      fill="none"
                      stroke="#efecea"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                    />
                    <line
                      id="Line_8"
                      data-name="Line 8"
                      x2="0.006"
                      transform="translate(9.577 2.731)"
                      fill="none"
                      stroke="#efecea"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                    />
                  </g>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </ThemeProvider>
  );
}
