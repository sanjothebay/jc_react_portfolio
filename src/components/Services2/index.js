import React from "react";
// import { Link } from "react-router-dom";
import { FaGithubSquare, FaProjectDiagram } from "react-icons/fa";
import Icon4 from "../../images/project2.JPG";
import Icon5 from "../../images/teamgen.JPG";
import Icon6 from "../../images/userdirectory.JPG";
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
      <ServicesH1>My Portfolio</ServicesH1>
      <ServicesWrapper>
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
          <ServicesH2>Team Profile Genarator</ServicesH2>
          <ServicesIcon src={Icon5} />
          <ServicesP>
            Deploy App:{" "}
            <a
              href="https://sanjothebay.github.io/Team_Profile_Generator/"
              target="_blank"
              aria-label="github"
            >
              <FaGithubSquare />
            </a>{" "}
            RepoLink:{" "}
            <a
              href="https://github.com/sanjothebay/Team_Profile_Generator"
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
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services2;