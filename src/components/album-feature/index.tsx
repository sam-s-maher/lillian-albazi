import React from "react";
import Styled from "styled-components";

import { styles } from "styles/variables";
import { css } from "styles/styled-css";
import StyledImg from "styles/styled-components/styled-img";
import AlbumArtImageMedium from "images/album-art-512.jpg";
import DiscImage from "images/disc-512.png";

const StyledAlbumFeatureDiv = Styled.div`
    ${css.centredFlexbox};
    height: 100%;
    color: ${styles.colours.theme.primaryText};
    justify-content: flex-end;
`;

const StyledAlbumDiv = Styled.div`
    ${css.centredFlexbox}
    height: 100%;
    max-height: 512px;
    position: relative;
`;

const StyledAlbumImg = Styled(StyledImg)`
    height: 100%;
    width: auto;
    max-width: none;
    max-height: 100vw;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
    z-index: 2;
`;

const StyledDiscImage = Styled.img`
    position: absolute;
    top: 2.5%;
    height: 100%;
    width: auto;
    transition-duration: ${styles.transitionTime.normal};
    z-index: 1;
`;

interface IAlbumFeatureProps {}

const AlbumFeature = (props: IAlbumFeatureProps) => {
    return (
        <StyledAlbumFeatureDiv>
            <StyledAlbumDiv>
                <StyledAlbumImg
                    src={AlbumArtImageMedium}
                    alt="Website logo"
                />
                <StyledDiscImage className="disc-image" src={DiscImage} alt="Disc image" />
            </StyledAlbumDiv>
        </StyledAlbumFeatureDiv>
    );
}

export default AlbumFeature;