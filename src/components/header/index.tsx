import React from "react";
import Styled from "styled-components";

import { styles } from "styles/variables";
import { css } from "styles/styled-css";
import StyledImg from "styles/styled-components/styled-img";

import BandcampIcon from "images/bandcamp-icon-dark-32.png";
import SpotifyIcon from "images/spotify-icon-white-32.png";

const StyledHeaderDiv = Styled.div`
    ${css.centredFlexbox};
    height: 4vh;
    min-height: 40px;
    color: ${styles.colours.theme.tertiaryText};
    background-color: ${styles.colours.theme.tertiaryBase};
    padding: 0 ${styles.padding.xxs};
`;

const StyledNavbarDiv = Styled.div`
    ${css.centredFlexbox};
    flex-direction: row;
    justify-content: space-between;
    max-width: ${styles.mediaWidth.desktopWide};
    width: 100%;
`;

const StyledUl = Styled.ul`
    display: flex;
    flex-flow: row nowrap;
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
                            <li><StyledLink href="#album">Listen</StyledLink></li>
                            <li><StyledLink href="#gigs">Gigs</StyledLink></li>
                            <li><StyledLink href="#contact">Contact</StyledLink></li>
                        </StyledUl>
                    </nav>
                </div>
                <div>
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
                </div>
            </StyledNavbarDiv>
        </StyledHeaderDiv>
    );
}

export default Header;