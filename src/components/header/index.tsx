import React from "react";
import Styled from "styled-components";

import { styles } from "styles/variables";
import { css } from "styles/styled-css";
import StyledImg from "styles/styled-components/styled-img";

import BandcampIcon from "images/bandcamp-icon-dark-32.png";
import SpotifyIcon from "images/spotify-icon-white-32.png";

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
    justify-content: space-between;
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

const StyledSocialsDiv = Styled.div`
    @media only screen and (max-width: ${styles.mediaSize.phone}) {
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

interface IHeaderProps {}

const Header = (props: IHeaderProps) => {
    return (
        <StyledHeaderDiv>
            <StyledNavbarDiv>
                <div>
                    <nav>
                        <StyledUl>
                            <li><StyledLink href="#gigs">Gigs</StyledLink></li>
                            <li><StyledLink href="#contact">Contact</StyledLink></li>
                        </StyledUl>
                    </nav>
                </div>
                <StyledSocialsDiv>
                    <nav>
                        <StyledUl>
                            <StyledIconImgLi>
                                <StyledIconImg
                                    src={BandcampIcon}
                                    alt="Bandcamp logo"
                                />
                            </StyledIconImgLi>
                            <StyledIconImgLi>
                                <StyledIconImg
                                    src={SpotifyIcon}
                                    alt="Spotify logo"
                                />
                            </StyledIconImgLi>
                        </StyledUl>
                    </nav>
                </StyledSocialsDiv>
            </StyledNavbarDiv>
        </StyledHeaderDiv>
    );
}

export default Header;