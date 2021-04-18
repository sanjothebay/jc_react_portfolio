import React from "react";
// import { Link } from "react-router-dom";
import { FaGithubSquare, FaProjectDiagram } from "react-icons/fa";
import Icon2 from "../../images/weatherapi.JPG";
import Icon3 from "../../images/progressivebudget.JPG";
import Icon6 from "../../images/userdirectory.JPG";

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
          <ServicesH2>User Directory</ServicesH2>
          <ServicesIcon src={Icon6} />
          <ServicesP>
            Deploy App:{" "}
            <a
              href="https://sanjothebay.github.io/user_directory/"
              target="_blank"
              aria-label="github"
            >
              <FaGithubSquare />
            </a>{" "}
            RepoLink:{" "}
            <a
              href="https://github.com/sanjothebay/user_directory"
              target="_blank"
              aria-label="github"
            >
              <FaProjectDiagram />
            </a>
          </ServicesP>
        </ServicesCard>
                <ServicesCard>
          <ServicesH2>Progressive Budget</ServicesH2>
          <ServicesIcon src={Icon3} />
          <ServicesP>
            Deploy App:{" "}
            <a
              href="https://sheltered-headland-18484.herokuapp.com/"
              target="_blank"
              aria-label="github"
            >
              <FaGithubSquare />
            </a>{" "}
            RepoLink:{" "}
            <a
              href="https://github.com/sanjothebay/Progressive_Budget"
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