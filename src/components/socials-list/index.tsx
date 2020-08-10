import React from "react";
import Styled from "styled-components";

import { css } from "styles/styled-css";
import { styles } from "styles/variables";
import StyledImg from "styles/styled-components/styled-img";
import BandcampIcon from "images/bandcamp-icon-white-32.png";
import SpotifyIcon from "images/spotify-icon-white-32.png";
import FacebookIcon from "images/facebook-icon-white-32.png";
import InstagramIcon from "images/instagram-icon-white-32.png";
import YoutubeIcon from "images/youtube-icon-white-32.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope
} from "@fortawesome/free-solid-svg-icons";

const StyledSocialUl = Styled.ul`
    ${css.centredFlexbox};
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
`;

interface IStyledSocialLi {
    backgroundColour?: string;
}

const StyledSocialLi = Styled.li`
    ${css.centredFlexbox};
    width: 48px;
    height: 48px;
    margin: 0 ${styles.padding.xxxs};
    background-color: ${(props: IStyledSocialLi) => props.backgroundColour};
    border-radius: 8px;
    cursor: pointer;
    &:hover div {
        width: 36px;
        height: 36px;
    }
`;

const StyledButtonDiv = Styled.div`
    ${css.centredFlexbox};
    width: 32px;
    height: 32px;
    transition: width 0.1s, height 0.1s;
`;

const StyledEmailIcon = Styled(FontAwesomeIcon)`
    color: ${styles.colours.base.black};
`;

export const enum SocialIcon {
    Bandcamp,
    Spotify,
    Youtube,
    Facebook,
    Instagram,
    Email
}

interface ISocialsListProps {
    exclude?: SocialIcon[];
}

function ShouldDisplayIcon(iconsToExclude: SocialIcon[], icon: SocialIcon): boolean {
    if (!iconsToExclude) return true;
    return !iconsToExclude.includes(icon);
}

const SocialsList = (props: ISocialsListProps) => {
    const { exclude } = props;

    return (
        <StyledSocialUl>
            {ShouldDisplayIcon(exclude, SocialIcon.Bandcamp) && (
                <StyledSocialLi backgroundColour={styles.colours.base.bandcampBlue}>
                    <a>
                        <StyledButtonDiv>
                            <StyledImg
                                src={BandcampIcon}
                                alt="Bandcamp logo"
                            />
                        </StyledButtonDiv>
                    </a>
                </StyledSocialLi>
            )}
            {ShouldDisplayIcon(exclude, SocialIcon.Spotify) && (
                <StyledSocialLi backgroundColour={styles.colours.base.spotifyGreen}>
                    <StyledButtonDiv>
                        <StyledImg
                            src={SpotifyIcon}
                            alt="Spotify logo"
                        />
                    </StyledButtonDiv>
                </StyledSocialLi>
            )}
            {ShouldDisplayIcon(exclude, SocialIcon.Youtube) && (
                <StyledSocialLi backgroundColour={styles.colours.base.youtubeRed}>
                    <a>
                        <StyledButtonDiv>
                            <StyledImg
                                src={YoutubeIcon}
                                alt="Youtube logo"
                            />
                        </StyledButtonDiv>
                    </a>
                </StyledSocialLi>
            )}
            {ShouldDisplayIcon(exclude, SocialIcon.Facebook) && (
                <StyledSocialLi backgroundColour={styles.colours.base.facebookBlue}>
                    <StyledButtonDiv>
                        <StyledImg
                            src={FacebookIcon}
                            alt="Facebook logo"
                        />
                    </StyledButtonDiv>
                </StyledSocialLi>
            )}
            {ShouldDisplayIcon(exclude, SocialIcon.Instagram) && (
                <StyledSocialLi backgroundColour={styles.colours.base.instagramPink}>
                    <StyledButtonDiv>
                        <StyledImg
                            src={InstagramIcon}
                            alt="Instagram logo"
                        />
                    </StyledButtonDiv>
                </StyledSocialLi>
            )}
            {ShouldDisplayIcon(exclude, SocialIcon.Email) && (
                <StyledSocialLi backgroundColour={styles.colours.base.white}>
                    <StyledButtonDiv>
                        <StyledEmailIcon icon={faEnvelope} size="2x"/>
                    </StyledButtonDiv>
                </StyledSocialLi>
            )}
        </StyledSocialUl>
    );
}

function GetOnClick(href: string): Function {
    return () => {};
}

export default SocialsList;