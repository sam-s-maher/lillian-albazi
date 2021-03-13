import React from "react";
import Styled from "styled-components";

import { styles } from "styles/variables";
import { css } from "styles/styled-css";
import StyledImg from "styles/styled-components/styled-img";

import BandcampIcon from "images/bandcamp-icon-dark-32.png";
import SpotifyIcon from "images/spotify-icon-white-32.png";
// import FacebookIcon from "images/facebook-icon-white-32.png";
// import InstagramIcon from "images/instagram-icon-white-32.png";
// import YoutubeIcon from "images/youtube-icon-white-32.png";

const StyledHeaderDiv = Styled.div`
    ${css.centredFlexbox};
    height: 4vh;
    min-height: 40px;
    color: ${styles.colours.theme.primaryText};
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

const StyledLi = Styled.li`
    padding: 0 ${styles.padding.s};
`;

const StyledIconImgLi = Styled.li`
    ${css.centredFlexbox};
    padding: 0 ${styles.padding.xxxs};
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
                            <StyledLi>Listen</StyledLi>
                            <StyledLi>Gigs</StyledLi>
                            <StyledLi>Contact</StyledLi>
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
                            {/* <StyledIconImgLi>
                                <StyledIconImg
                                    src={YoutubeIcon}
                                    alt="Youtube logo"
                                />
                            </StyledIconImgLi>
                            <StyledIconImgLi>
                                <StyledIconImg
                                    src={FacebookIcon}
                                    alt="Facebook logo"
                                />
                            </StyledIconImgLi>
                            <StyledIconImgLi>
                                <StyledIconImg
                                    src={InstagramIcon}
                                    alt="Instagram logo"
                                />
                            </StyledIconImgLi> */}
                        </StyledUl>
                    </nav>
                </div>
            </StyledNavbarDiv>
        </StyledHeaderDiv>
    );
}

export default Header;