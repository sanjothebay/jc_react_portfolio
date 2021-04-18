import React from "react";
// import { Link } from "react-router-dom";
import { FaGithubSquare, FaProjectDiagram } from "react-icons/fa";
import Icon1 from "../../images/project1.JPG";
import Icon2 from "../../images/weatherapi.JPG";
import Icon3 from "../../images/dayplanner.JPG";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="Services">
      <ServicesH1>My Portfolio</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesH2>Sports App Project</ServicesH2>
          <ServicesIcon src={Icon1} />
          <ServicesP>
            Deploy App:{" "}
            <a
              href="https://jeck24.github.io/Project1/"
              target="_blank"
              aria-label="github"
            >
              <FaGithubSquare />
            </a>{" "}
            RepoLink:{" "}
            <a
              href="https://github.com/jeck24/Project1/tree/JC"
              target="_blank"
              aria-label="github"
            >
              <FaProjectDiagram />
            </a>
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>Weather App</ServicesH2>
          <ServicesIcon src={Icon2} />
          <ServicesP>
            Deploy App:{" "}
            <a
              href="https://sanjothebay.github.io/weather_app/"
              target="_blank"
              aria-label="github"
            >
              <FaGithubSquare />
            </a>{" "}
            RepoLink:{" "}
            <a
              href="https://github.com/sanjothebay/weather_app"
              target="_blank"
              aria-label="github"
            >
              <FaProjectDiagram />
            </a>
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>Day Planner</ServicesH2>
          <ServicesIcon src={Icon3} />
          <ServicesP>
            Deploy App:{" "}
            <a
              href="https://sanjothebay.github.io/schedule_app/"
              target="_blank"
              aria-label="github"
            >
              <FaGithubSquare />
            </a>{" "}
            RepoLink:{" "}
            <a
              href="https://github.com/sanjothebay/schedule_app"
              target="_blank"
              aria-label="github"
            >
              <FaProjectDiagram />
            </a>
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;