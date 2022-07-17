import React from "react";
import styled from "styled-components";


export const StyledSocialDiv = styled.div`
    display: flex;
    flex-direction: column-reverse;
    position: fixed;
    bottom: 0;
    left: 60px;

    ul {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        gap: 15px;
        margin: 0;
        padding: 0;
        top: -10px;
        left: -5px;
    }

    li {
        list-style: none;
    }

    svg {
        transform:scale(1.3);
        cursor: pointer;
    }

    svg:hover {
        transform: scale(1.5);
        stroke: #B88367;

    }

    svg:hover path, svg:hover rect, svg:hover ellipse, svg:hover line {
        stroke: #B88367;
    }
`

export const StyledSocialSpan = styled.span`
    width: 1px;
    height: 7rem;
    background-color: #346751;
`

export default function SocialLeft() {
  return (
    <StyledSocialDiv>
      <StyledSocialSpan />
      <ul>
        <li>
          <a href="https://github.com/ahmedsmrt" target="_blank" rel="noopener noreferrer">
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
          <a href="https://www.linkedin.com/in/ahmed-gasim-b601ab129/" target="_blank" rel="noopener noreferrer">
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
          <a href="https://www.instagram.com/a.g.sudani/?hl=en" target="_blank" rel="noopener noreferrer">
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
    </StyledSocialDiv>
  );
}
