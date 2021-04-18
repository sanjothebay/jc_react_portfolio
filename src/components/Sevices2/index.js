import React from "react";
// import { Link } from "react-router-dom";
import { FaGithubSquare, FaProjectDiagram } from "react-icons/fa";
import Icon1 from "../../images/project1.JPG";
import Icon4 from "../../images/project2.JPG";
import Icon6 from "../../images/favmovieproject.JPG";

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./Services2Elements";

const Services2 = () => {
  return (
    <ServicesContainer id="Services2">
      <ServicesH1>Projects</ServicesH1>
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
          <ServicesH2> Chore Project app</ServicesH2>
          <ServicesIcon src={Icon4} />
          <ServicesP>
            Deploy App:{" "}
            <a
              href="https://protected-island-07471.herokuapp.com/"
              target="_blank"
              aria-label="github"
            >
              <FaGithubSquare />
            </a>{" "}
            RepoLink:{" "}
            <a
              href="https://github.com/pegasus-1982/Project2-Chores/tree/JC"
              target="_blank"
              aria-label="github"
            >
              <FaProjectDiagram />
            </a>
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>Fav Movie List Project</ServicesH2>
          <ServicesIcon src={Icon6} />
          <ServicesP>
            Deploy App:{" "}
            <a
              href="https://dry-caverns-58581.herokuapp.com/"
              target="_blank"
              aria-label="github"
            >
              <FaGithubSquare />
            </a>{" "}
            RepoLink:{" "}
            <a
              href="https://github.com/sanjothebay/fav_movie_list_project"
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

export default Services2;