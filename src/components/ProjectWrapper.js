import React from "react";
import styled from "styled-components";
import { ProjectText } from "./ProjectData";

const ProjectBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  padding: 15px 20px;

  .preview-img-container {
    margin-bottom: 40px;
    width: 100%;
    position: relative;
  }

  .project-title-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .reverse {
    flex-direction: row-reverse !important;
  }

  .btn-container {
    display: flex;
    gap: 15px;
  }

  .btn {
    text-decoration: none;
    position: relative;
    background: none;
    border: solid 2px #efecea;
    color: #efecea;
    display: block;
    font-family: "Poiret One", cursive;
    font-size: 0.8em;
    font-weight: 900;
    border-radius: 2px;
    padding: 5px 20px;
    cursor: pointer;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    margin: 0 auto;
  }

  .btn::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 6px;
    left: 6px;
    width: 100%;
    height: 100%;
    transition: 0.2s;
    border-radius: 2px;
  }

  .btn-orange::after {
    background-color: #b88367;
  }

  .btn-green {
    color: #efecea;
  }

  .btn-orange {
    color: black;
  }

  .btn-green::after {
    background-color: #346751;
  }

  .btn:hover::after {
    top: 0px;
    left: 0px;
  }

  .project-technologies {
    margin: 30px 0 0 0;
    display: flex;
    gap: 18px;
    flex-wrap: wrap;
  }

  .project-technologies span {
    font-size: 0.75rem;
    padding: 0.5px 10px;
    border: 2px solid #efecea;
    background-color: #375570;
    border-radius: 2px;
  }


  .img-lg {
    width: 70%;
    left: 0;
    z-index: 1;
    border: 0;
    position: relative;
    right: 0;
    bottom: 0;
    border-radius: 2px;
    box-shadow: 0 5px 10px 0 rgb(0 0 0 / 75%);
  }

  .img-md {
    width: 27%;
    right: 14%;
    z-index: 2;
    border: 0;
    position: relative;
    bottom: 0;
    border-radius: 2px;
    box-shadow: 0 5px 10px 0 rgb(0 0 0 / 75%);
  }

  .img-sm {
    width: 15%;
    right: 1rem;
    z-index: 3;
    box-shadow: 0 5px 5px 0 rgb(0 0 0 / 75%);
    border: 0;
    position: absolute;
    right: 20px;
    bottom: 6px;
    border-radius: 2px;
  }
`;

export default function ProjectWrapper({ id , isReverse }) {
  return (
    <ProjectBoxContainer>
      <div className="preview-img-container">
        <img
          className="img-lg"
          src={ProjectText[id].screenshots[0]}
          alt="desktop-screenshot"
        />
        <img
          className="img-md"
          src={ProjectText[id].screenshots[1]}
          alt="tablet-screenshot"
        />
        <img
          className="img-sm"
          src={ProjectText[id].screenshots[2]}
          alt="mobile-screenshot"
        />
      </div>
      <div className={`project-title-container ${isReverse ? 'reverse' : null}`}>
        <h2>{ProjectText[id].title}</h2>
        <div className="btn-container">
          <a href={ProjectText[id].links[1]} className="btn btn-green" target="_blank" rel="no-referrer">Live</a>
          <a href={ProjectText[id].links[0]} className="btn btn-orange" >Code</a>
        </div>
      </div>
      <div className="project-content">
        <p>{ProjectText[id].description}</p>
        <div className="project-technologies">
          {ProjectText[id].languages.map((e) => {
            return <span>{e}</span>;
          })}
        </div>
      </div>
    </ProjectBoxContainer>
  );
}
