import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";


export const StyledSocialDivRight = styled.div`
    display: flex;
    flex-direction: column-reverse;
    position: fixed;
    bottom: 0;
    right: 50px;
    width: 13px;

    
    @media (max-width: 768px) {
    display: none;
}
  

    a {
      text-decoration: none;
      color: #EFECEA;
      font-family: proxima-nova, sans-serif;
      font-weight:100!important;
      font-size: 14px;
      position: relative;
      left:-7px;
      transition: .3s;
      margin: 10px auto;
    letter-spacing: 0.225em;
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;
    }

    a:hover {
      color: #B88367;
      transform: translateY(-5px);
    }
`

export const StyledSocialSpanRight = styled.span`
    width: 1px;
    height: 7rem;
    background-color: #346751;
`

export default function SocialLeft() {
  return (
    <StyledSocialDivRight>
      <StyledSocialSpanRight />
      <Link to="mailto:sabrthruit@gmail.com">sabrthruit@gmail.com</Link>
    </StyledSocialDivRight>
  );
}
