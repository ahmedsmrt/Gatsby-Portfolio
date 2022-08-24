import React from "react";
import styled from "styled-components";
import ProjectWrapper from "../ProjectWrapper";


const ProjectsSectionStyles = styled.section`
  margin: 0 auto;
  position: relative;
  max-width: 1145px;
  max-height: 100%;
  display: flex;
  justify-content: center;
  -webkit-box-align: center;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 25px 0 0;

  section {
    position: relative;
    top: -100px;
    width: 100%;
    padding: 200px 0 0 0;
    font-family: proxima-nova, sans-serif;
  }

  .title-bar {
    left: 75px;
    display: flex;
    width: 80%;
    margin: 0 auto;
    align-items: center;
    gap: 15px;
  }

  .title-bar h2 {
    font-size: 1.75rem;
    font-weight: 500;
    margin: 0;
    font-family: proxima-nova, sans-serif;
  }

  .title-bar_line {
    position: relative;
    top: 3px;
    height: 1px;
    width: 75%;
    background: #707070;
  }

  .project-container {
    display: flex;
    margin: 0 auto;
    justify-content: space-around;
    flex-direction: column;
    padding: 75px 25px;
    column-gap: 10px;
  }

  .seperator {
    width: 15%;
    margin: 40px auto;
    height: 1px;
    background-color: #707070;
    display: flex;
    justify-content: center;
  }

`;

export default function Projects() {
  return (
    <ProjectsSectionStyles id="projects">
      <section>
        <div className="title-bar">
          <h2>Projects</h2> <span className="title-bar_line"></span>
        </div>
        <div className="project-container">
          <ProjectWrapper id="0" isReverse={false}/>
          <div className="seperator"></div>
          <ProjectWrapper id="1" isReverse={true}/>
          <div className="seperator"></div>
          <ProjectWrapper id="2" isReverse={false}/>
          <div className="seperator"></div>
          <ProjectWrapper id="3" isReverse={true}/>
          <div className="seperator"></div>
          <ProjectWrapper id="4" isReverse={false}/>
          <div className="seperator"></div>
          <ProjectWrapper id="5" isReverse={true}/>
          <div className="seperator"></div>
          <ProjectWrapper id="6" isReverse={false}/>
          <div className="seperator"></div>
          <ProjectWrapper id="7" isReverse={true}/>
        </div>
      </section>
    </ProjectsSectionStyles>
  );
}
