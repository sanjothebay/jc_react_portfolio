import React from "react";
import { FaLinkedin, FaStackOverflow, FaGithubSquare } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import PDF from "../../pdf_download/JC RODRIGUEZ RESUME.pdf";

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconlink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>JC Rodriguez</FooterLinkTitle>
              <FooterLink to="#">Phone: +525614383816</FooterLink>
              <FooterLink to="#">Email: sanjothebay@gmail.com</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Resume</FooterLinkTitle>
              <FooterLink to={PDF} target="_blank" download>
                {" "}
                Download
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Git HUB</FooterLinkTitle>
              <FooterLink
                to="https://github.com/sanjothebay"
                href="https://github.com/sanjothebay"
                target="_blank"
                aria-label="github"
              >
                <a
                  to="https://github.com/sanjothebay"
                  href="https://github.com/sanjothebay"
                  target="_blank"
                  aria-label="github"
                >
                  github Repo
                </a>
              </FooterLink>
              <FooterLink
                to="https://stackoverflow.com/users/13977233/jc"
                href="https://stackoverflow.com/users/13977233/jc"
                target="_blank"
                aria-label="Stackoverflow"
              >
                <a
                  to="https://stackoverflow.com/users/13977233/jc"
                  href="https://stackoverflow.com/users/13977233/jc"
                  target="_blank"
                  aria-label="Stackoverflow"
                >
                  Stackoverflow
                </a>
              </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink
                to="https://www.linkedin.com/in/jc-rodriguez-805339180/"
                href="https://www.linkedin.com/in/jc-rodriguez-805339180/"
                target="_blank"
                aria-label="Linkedin"
              >
                <a
                  to="https://www.linkedin.com/in/jc-rodriguez-805339180/"
                  href="https://www.linkedin.com/in/jc-rodriguez-805339180/"
                  target="_blank"
                  aria-label="linkedin"
                >
                  linkedin
                </a>
              </FooterLink>
              <FooterLink
                to="https://www.facebook.com/sanjothebay/"
                href="https://www.facebook.com/sanjothebay/"
                target="_blank"
                aria-label="facebook"
              >
                <a
                  to="https://www.facebook.com/sanjothebay/"
                  href="https://www.facebook.com/sanjothebay/"
                  target="_blank"
                  aria-label="facebook"
                >
                  facebook
                </a>
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              JC Rodriguez
            </SocialLogo>
            <WebsiteRights>
              JC Rodriguez © {new Date().getFullYear()} All Rights To JC
              Reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconlink
                to="https://github.com/sanjothebay"
                href="https://github.com/sanjothebay"
                target="_blank"
                aria-label="github"
              >
                <FaGithubSquare />
              </SocialIconlink>
              <SocialIconlink
                to="https://www.linkedin.com/in/jc-rodriguez-805339180/"
                href="https://www.linkedin.com/in/jc-rodriguez-805339180/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconlink>
              <SocialIconlink
                to="https://stackoverflow.com/users/13977233/jc"
                href="https://stackoverflow.com/users/13977233/jc"
                target="_blank"
                aria-label="Stackoverflow"
              >
                <FaStackOverflow />
              </SocialIconlink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
