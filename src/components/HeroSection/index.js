import React, { useState } from "react";
import Video from "../../videos/video.mp4";
//import { Button } from "../ButtonElements";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
//   HeroBtnWapper,
//   ArrowForward,
//   ArrowRight,
} from "./HeroElemeents";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const OnHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1> JC Rodriguez </HeroH1>
        <HeroP>Full-Stack Web Developer</HeroP>
        {/* <HeroBtnWapper>
          <Button
            to="home"
            onMouseEnter={OnHover}
            onMouseLeave={OnHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Contact Me {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWapper> */}
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;