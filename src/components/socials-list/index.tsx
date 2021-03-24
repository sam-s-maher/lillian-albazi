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
import { SocialsUrls } from "./socials-urls";

const StyledSocialsDiv = Styled.div`
    ${css.centredFlexbox}
`;

const StyledSocialUl = Styled.ul`
    ${css.centredFlexbox};
    flex-direction: row;
    flex-wrap: wrap;
    @media screen and (max-width: 768px) {
        max-width: 65%;
    }
`;

interface IStyledSocialLi {
    backgroundColour?: string;
}

const StyledSocialLi = Styled.li`
    ${css.centredFlexbox};
    width: 48px;
    height: 48px;
    margin: ${styles.padding.xxxs};
    background-color: ${(props: IStyledSocialLi) => props.backgroundColour};
    border-radius: 8px;
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

const StyledA = Styled.a`
    ${css.centredFlexbox};
    width: 100%;
    height: 100%;
    cursor: pointer;
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
        <StyledSocialsDiv>
            <StyledSocialUl>
                {ShouldDisplayIcon(exclude, SocialIcon.Bandcamp) && (
                    <StyledSocialLi backgroundColour={styles.colours.base.bandcampBlue}>
                        <StyledA href={SocialsUrls.Websites.Bandcamp} target="_blank">
                            <StyledButtonDiv>
                                <StyledImg
                                    src={BandcampIcon}
                                    alt="Bandcamp logo"
                                />
                            </StyledButtonDiv>
                        </StyledA>
                    </StyledSocialLi>
                )}
                {ShouldDisplayIcon(exclude, SocialIcon.Spotify) && (
                    <StyledSocialLi backgroundColour={styles.colours.base.spotifyGreen}>
                        <StyledA href={SocialsUrls.Websites.Spotify} target="_blank">
                            <StyledButtonDiv>
                                <StyledImg
                                    src={SpotifyIcon}
                                    alt="Spotify logo"
                                />
                            </StyledButtonDiv>
                        </StyledA>
                    </StyledSocialLi>
                )}
                {ShouldDisplayIcon(exclude, SocialIcon.Youtube) && (
                    <StyledSocialLi backgroundColour={styles.colours.base.youtubeRed}>
                        <StyledA href={SocialsUrls.Websites.Youtube} target="_blank">
                            <StyledButtonDiv>
                                <StyledImg
                                    src={YoutubeIcon}
                                    alt="Youtube logo"
                                />
                            </StyledButtonDiv>
                        </StyledA>
                    </StyledSocialLi>
                )}
                {ShouldDisplayIcon(exclude, SocialIcon.Facebook) && (
                    <StyledSocialLi backgroundColour={styles.colours.base.facebookBlue}>
                        <StyledA href={SocialsUrls.Websites.Facebook} target="_blank">
                            <StyledButtonDiv>
                                <StyledImg
                                    src={FacebookIcon}
                                    alt="Facebook logo"
                                />
                            </StyledButtonDiv>
                        </StyledA>
                    </StyledSocialLi>
                )}
                {ShouldDisplayIcon(exclude, SocialIcon.Instagram) && (
                    <StyledSocialLi backgroundColour={styles.colours.base.instagramPink}>
                        <StyledA href={SocialsUrls.Websites.Instagram} target="_blank">
                            <StyledButtonDiv>
                                <StyledImg
                                    src={InstagramIcon}
                                    alt="Instagram logo"
                                />
                            </StyledButtonDiv>
                        </StyledA>
                    </StyledSocialLi>
                )}
                {ShouldDisplayIcon(exclude, SocialIcon.Email) && (
                    <StyledSocialLi backgroundColour={styles.colours.base.white}>
                        <StyledA href={"mailto:" + SocialsUrls.Email} target="_blank">
                            <StyledButtonDiv>
                                <StyledEmailIcon icon={faEnvelope} size="2x"/>
                            </StyledButtonDiv>
                        </StyledA>
                    </StyledSocialLi>
                )}
            </StyledSocialUl>
        </StyledSocialsDiv>
    );
}

export default SocialsList;