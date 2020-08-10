import React from "react";
import Styled from "styled-components";

import { styles } from "styles/variables";
import { css } from "styles/styled-css";
import StyledImg from "styles/styled-components/styled-img";
import AlbumArt from "images/album-art-768.png";
import BandcampLogo from "images/bandcamp-logo-white-32.png";
import SpotifyLogo from "images/spotify-logo-green-32.png";

import Heading from "components/heading";
import ButtonCard from "components/button-card";

const StyledAlbumFeatureDiv = Styled.div`
    ${css.centredFlexbox};
    padding: ${styles.padding.m} 0;
    background-color: ${styles.colours.theme.primaryBase};
    color: ${styles.colours.theme.primaryText};
`;

const StyledAlbumDiv = Styled.div`
    padding: ${styles.padding.xs};
`;

const StyledCallToActionDiv = Styled.div`
    ${css.centredFlexbox};
    padding: ${styles.padding.xxs} 0 0;
    flex-direction: row;
    justify-content: space-between;
    max-width: ${styles.mediaWidth.tablet};
    width: 100%;
    @media only screen and (max-width: ${styles.mediaWidth.phone}) {
        flex-direction: column;
    }
`;

const StyledAlbumImg = Styled(StyledImg)`
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
`;

const StyledHeadingDiv = Styled.div`
    padding: ${styles.padding.s} ${styles.padding.xxs};
`;

const StyledButtonCardsDiv = Styled.div`
    ${css.centredFlexbox};
    flex-direction: row;
`;

interface IAlbumFeatureProps {}

const AlbumFeature = (props: IAlbumFeatureProps) => {
    return (
        <StyledAlbumFeatureDiv>
            <StyledAlbumDiv>
                <StyledAlbumImg
                    src={AlbumArt}
                    alt="Website logo"
                />
            </StyledAlbumDiv>
            <StyledCallToActionDiv>
                <StyledHeadingDiv>
                    <Heading
                        text={"Album out now."}
                        type={'h2'}
                        style={'h2'}
                    />
                </StyledHeadingDiv>
                <StyledButtonCardsDiv>
                    <ButtonCard
                        imgSrc={BandcampLogo}
                        imgAlt={"Bandcamp logo"}
                        backgroundColour={styles.colours.base.bandcampBlue}
                    />
                    <ButtonCard
                        imgSrc={SpotifyLogo}
                        imgAlt={"Spotify logo"}
                        backgroundColour={styles.colours.base.black}
                    />
                </StyledButtonCardsDiv>
            </StyledCallToActionDiv>
        </StyledAlbumFeatureDiv>
    );
}

export default AlbumFeature;