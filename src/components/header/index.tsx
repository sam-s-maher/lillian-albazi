import React from "react";
import Styled from "styled-components";

import { styles } from "styles/variables";
import { css } from "styles/styled-css";
import StyledImg from "styles/styled-components/styled-img";

import BandcampIcon from "images/bandcamp-icon-dark-32.png";
import SpotifyIcon from "images/spotify-icon-white-32.png";
import Heading from "components/heading";
import { SocialsUrls } from "components/socials-list/socials-urls";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope
} from "@fortawesome/free-solid-svg-icons";

const StyledHeaderDiv = Styled.div`
    position: absolute;
    ${css.centredFlexbox};
    flex-flow: row nowrap;
    height: 4vh;
    min-height: 40px;
    color: ${styles.colours.theme.tertiaryText};
    background-color: ${styles.colours.theme.tertiaryBase};
    width: 100%;
`;

const StyledNavbarDiv = Styled.div`
    box-sizing: border-box;
    ${css.centredFlexbox};
    flex-flow: row nowrap;
    max-width: ${styles.mediaSize.desktopWide};
    width: 100%;
    padding: 0 ${styles.margin.s};
    @media only screen and (max-width: ${styles.mediaSize.phone}) {
        justify-content: center;
    }
`;

const StyledUl = Styled.ul`
    display: flex;
    flex-flow: row nowrap;
`;

const LeftWrapperDiv = Styled.div`
    ${css.centredFlexbox};
    justify-content: flex-start;
    flex: 4 1 0;
    flex-flow: row nowrap;
    @media only screen and (max-width: ${styles.mediaSize.phone}) {
        justify-content: center;
    }
`;

const RightWrapperDiv = Styled.div`
    ${css.centredFlexbox};
    justify-content: flex-end;
    flex: 4 1 0;
    flex-flow: row nowrap;
`;

const LogoWrapperDiv = Styled.div`
    ${css.centredFlexbox};
    width: fit-content;
    @media only screen and (max-width: ${styles.mediaSize.phone}) {
        display: none;
    }
`;

const StyledSocialsDiv = Styled(RightWrapperDiv)`
    @media only screen and (max-width: ${styles.mediaSize.desktop}) {
        display: none;
    }
`;

const StyledLink = Styled.a`
    padding: 0 ${styles.padding.s};
    cursor: pointer;
    transition: color ${styles.transitionTime.fastest};
    &:hover {
        color: ${styles.colours.theme.primaryHighlight};
    }
`;

const StyledIconImgLi = Styled.li`
    ${css.centredFlexbox};
    padding: 0 ${styles.padding.xxxs};
    cursor: pointer;
`;

const StyledIconImg = Styled(StyledImg)`
    max-width: 32px;
    max-height: 32px;
`;

const StyledEmailIcon = Styled(FontAwesomeIcon)`
    position: absolute;
    transform: translateY(3px);
    padding-left: .7rem;
`;

const StyledHeading = Styled(Heading)`
    font-size: 32px;
    margin-bottom: -6px;
`;

interface IHeaderProps {}

const Header = (props: IHeaderProps) => {
    return (
        <StyledHeaderDiv>
            <StyledNavbarDiv>
                <LeftWrapperDiv>
                    <nav>
                        <StyledUl>
                            <li><StyledLink href="#gigs">Gigs</StyledLink></li>
                            <li><StyledLink href="#contact">Follow</StyledLink></li>
                            <li><StyledLink href={"mailto:" + SocialsUrls.Email} target="_blank">Contact<StyledEmailIcon icon={faEnvelope} size="xs"/></StyledLink></li>
                        </StyledUl>
                    </nav>
                </LeftWrapperDiv>
                <LogoWrapperDiv>
                    <div>
                        <StyledHeading
                            text={'LILLIAN ALBAZI'}
                            type={'h1'}
                            style={'h3'}
                            fontFamily={'scheherazade'}
                        />
                    </div>
                </LogoWrapperDiv>
                <StyledSocialsDiv>
                    <nav>
                        <StyledUl>
                            <StyledIconImgLi>
                                <a href={SocialsUrls.Websites.Bandcamp}>
                                    <StyledIconImg
                                        src={BandcampIcon}
                                        alt="Bandcamp logo"
                                    />
                                </a>
                            </StyledIconImgLi>
                            <StyledIconImgLi>
                                <a href={SocialsUrls.Websites.Spotify}>
                                    <StyledIconImg
                                        src={SpotifyIcon}
                                        alt="Spotify logo"
                                    />
                                </a>
                            </StyledIconImgLi>
                        </StyledUl>
                    </nav>
                </StyledSocialsDiv>
            </StyledNavbarDiv>
        </StyledHeaderDiv>
    );
}

export default Header;