import React from "react";
import styled from "styled-components";

const HeroStyles = styled.section`
  margin: 0 auto;
  position: relative;
  max-width: 1145px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  -webkit-box-align:center;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;

  section {
    margin: 0 auto;
    padding: 0 25px;
  }

  div {
    margin:0 auto;
  }

  span {
    color: #8fb3a3;
    transition: .3s;
  }

  span:hover {
    color: #346751;
    cursor: pointer;
  }

  h1 {
    font-family:  proxima-nova, sans-serif;
    font-size: 45px;
    font-weight: 100;
    font-style: normal;
    margin: 0;
  }


  h4 {
    font-size: 1.5rem;
    margin-bottom: .75em;
    font-weight: 100;
  }

  h3 {
    padding: 0;
    font-weight: 100;
    font-size:1.1rem;
  }

  .special_btn {
    position: relative;
    left: 55%;
    top: -10px;
    margin: 0.5rem 0;
    padding: 0.5rem;
    border: none;
    border-radius: 0.25rem;
    font-family: quasimoda, sans-serif;
    font-size: 1.15rem;
    background-color: transparent;
    cursor: pointer;
    color: #EFECEA;
    text-decoration: none;
  }

  .special_btn::before {
    content: "";
    position: absolute;
    bottom: 18%;
    left: 6.5%;
    width: 51%;
    height: 5%;
    background-color: #b88367;
    transition: .75s;
}

  .special_btn::after {
    content: "";
    position: absolute;
    top: 40%;
    left: 102%;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background-color: #EFECEA;
    transition: .75s;
}

.special_btn:hover::before {
    left: 62%;
    background-color: #b88367;
    width: 33%;
}

.special_btn:hover::after {
    top: 50%;
    left: 5%;
    border-radius: 0;
    width: 52%;
    height: 6%;
    background-color: #346751;
}

`;

export default function Hero() {
  return (
    <HeroStyles>
      <section>
        <div>
          <h4>Hello, my name is</h4>
          <h1>
            <span>Ahmed Gasim</span> and I am a . . .
          </h1>
          <h3>Creative Front End Engineer</h3>
          <h3>Junior Developer</h3>
          <h3>UI & UX Enthusiast</h3>
        </div>
        <a href="#about" className="special_btn">Find out More</a>
      </section>
    </HeroStyles>
  );
}
